package models

import (
	"fmt"
	"strconv"
	"time"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type AuthorizationsFast struct {
	Id          uint64 `orm:"column(id);pk" description:"id"`
	Type        string `orm:"column(type);size(255);null"`
	CreatedTime string `orm:"column(created_time);type(timestamp);null"`
	UpdatedTime string `orm:"column(updated_time);type(timestamp);null"`
}
type AuthorizationRequest struct {
	Type      string      `json:"type"`
	Resource  string      `json:"resource"`
	Entity     string        `json:"entity"`
	Operation      string      `json:"operation"`
}

type AuthorizationsDataFast struct {
	Id        uint64      `json:"id"`
	Type      string      `json:"type"`
	Resource  string      `json:"resource"`
	Entity     string        `json:"entity"`
	Operation      string      `json:"operation"`
	Attribute []Attribute `json:"attributes"`
}

func (t *AuthorizationsFast) TableName() string {
	return "configurations"
}

//func (t *Attributes) TableName() string {
//	return "attributes"
//}

func init() {
	orm.RegisterModel(new(AuthorizationsFast))
	//orm.RegisterModel(new(Attributes))
}

// AddConfigurations insert a new Configurations into database and returns
// last inserted Id on success.
func AddAuthorizationsFast(authorization map[string]interface{}, types string) (data map[string]interface{}) {
	id := SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()
	resource := GetMapValue("resource", authorization)
	entity := GetMapValue("entity", authorization)
	operation := GetMapValue("operation", authorization)
	beego.Debug(resource)
	beego.Debug(entity)
	beego.Debug(operation)
	if resource == "" || entity=="" ||  operation==""{
		return MessageErrorMap(data, "添加权限失败,权限参数不完整")
	}
	sql := "INSERT INTO `authorizations` (`id`,  `type`,`resource`,`entity`,`operation`, `created_time`, `updated_time`)" +
		" VALUES (?, ?,?, ?,?,?, ?)"

	res, err := o.Raw(sql, id, types,resource,entity,operation, time.Now(), time.Now()).Exec()
	if err != nil {
		num, _ := res.RowsAffected()
		fmt.Println("mysql row affected nums: ", num)
		return MessageErrorMap(data, "添加权限失败")
	}

	AddCategoriesRelation(GetMapValue("category_ids",authorization),id,"authorization_category")
	beego.Debug(authorization)

	var attribute Attribute
	for key, value := range authorization {
		attribute.SourceId = id
		attribute.Name = key
		attribute.Value = value.(string)
		attribute.Format = getDataType(value)
		if attribute.Name == "type" {
			continue
		}
		AddAttributes(&attribute, id, "authorization")
	}

	return MessageSucessUint64(id, "添加权限成功")
}

func GetAllAuthorizationsFast(types string, query map[string]string, names map[string]string, fields []string, sortby []string, order []string,
	page int64, page_size int64, category_ids string) (data map[string]interface{}) {

	var DataList []orm.Params
	var count int64
	beego.Debug(names)
	//如果是通过names来进行过滤查询 该方式性能较差,可能是下面查询方式的 二十分之一性能
	if len(names) != 0 {
		//参数遍历
		//name:=where(names)
		DataList = FindSourceIdByNameFromAttributes("authorizations", query, names, fields, sortby, order, page, page_size, category_ids,
			"authorization","authorization_category")
		count = CountSourceIdByNameFromAttributes("authorizations", query, names, category_ids, "authorization","authorization_category")

	} else {
		//sqlCount="select count(*) as count from  products  where  1=1"
		DataList = FindSourceIdByFromTables("authorizations", query, fields, sortby, order, page, page_size, category_ids,"authorization_category")
		count = CountSourceIdByFromTables("authorizations", query, category_ids,"authorization_category")
	}

	if count <= 0 {
		return MessageErrorMap(data, "获取权限列表失败,没有查到合法数据")
	}
	beego.Debug(DataList)
	if 0 == len(DataList) {
		return MessageErrorMap(data, "获取权限列表失败,没有查到合法数据")
	}

	dataList := []map[string]string{}
	for i := 0; i < len(DataList); i++ {

		var source_id uint64

		id := GetMapValue("id", DataList[i]).(string)
		source_id, _ = strconv.ParseUint(id, 10, 64)

		//获取详情信息
		attributes, errs := GetAttributes(source_id)
		data := make(map[string]string)
		if errs == nil {
			for i := 0; i < len(attributes); i++ {
				//var data map[string]string
				key, value := GetMapAttibutesKeyAndValue(attributes[i])
				beego.Debug(key)
				beego.Debug(value)
				//data[key]=value
				fmt.Printf("v1 type:%T\n", key)
				fmt.Printf("v2 type:%T\n", value)
				data[key] = value

			}
			data["id"] = id
			types := GetMapValue("type", DataList[i]).(string)
			created_time := GetMapValue("created_time", DataList[i]).(string)
			updated_time := GetMapValue("updated_time", DataList[i]).(string)
			data["type"] = types
			data["created_time"] = created_time
			data["updated_time"] = updated_time

			dataList = append(dataList, data)

		}

		beego.Debug(dataList)
	}
	beego.Debug(data)
	returnData := map[string]interface{}{}
	returnData["items"] = dataList
	returnData["count"] = count
	returnData["page"] = page
	returnData["perPage"] = page_size

	return MessageSucessMap(returnData, "获取数据成功")
}


//更新
// UpdateConfigurations updates Configurations by Id and returns error if
// the record to be updated doesn't exist
func UpdateAuthorizationsByIdFast(authorization map[string]interface{},id uint64,types string) (map[string]interface{}) {

	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  authorizations where id=?",id).Values(&maps)
	if err != nil  || num <= 0{        //处理err
		//权限不存在 调用新增
		if(types !=""){
			return  AddAuthorizationsFast(authorization,types)
		}else{
			return  MessageErrorUint64(id,"修改权限失败,权限不存在，如新加请传入type")
		}
	}

	sql:="UPDATE  `authorizations` SET `updated_time`=? " +
		"WHERE (`id`=?);"

	res, err := o.Raw(sql,time.Now(),id).Exec()
	if err != nil {
		num, _ := res.RowsAffected()
		fmt.Println("mysql row affected nums: ", num)
		return  MessageErrorUint64(id,"修改权限失败")
	}

	UpdateCategoriesRelation(GetMapValue("category_ids",authorization),id,"authorization_category")


	var  attribute Attribute
	for key, value := range authorization {

		attribute.SourceId=id
		attribute.Name=key
		attribute.Value=value.(string)
		attribute.Format=getDataType(value)
		if attribute.Name=="type"{
			continue
		}
		attributeData,errs := GetAttributesByName(id,key,"authorization")
		beego.Debug(attributeData)
		beego.Debug(errs)
		if errs == nil {        //修改
			UpdateAttributes(&attribute,id)
		}else{//添加
			AddAttributes(&attribute,id,"authorization")
		}
	}


	return  MessageSucessUint64(id,"修改权限成功")
}
func GetAuthorizationsFastById(id uint64) (data map[string]interface{}) {
	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  authorizations where id=?",id).Values(&maps)
	if err != nil  || num <= 0{        //处理err
		return  MessageErrorMap(data,"获取单条权限失败,请检查传入id参数")
	}

	attributes,errs := GetAttributes(id)
	if errs != nil {        //处理err
		return  MessageErrorMap(data,"获取单条权限失败")
	}

	returnData := make(map[string]interface{})
	for i := 0; i < len(attributes); i++ {
		//var data map[string]string
		key,value:=GetMapAttibutesKeyAndValue(attributes[i])
		beego.Debug(key)
		beego.Debug(value)
		//data[key]=value
		fmt.Printf("v1 type:%T\n", key)
		fmt.Printf("v2 type:%T\n", value)
		returnData[key]=value

	}
	returnData["id"]=uint64ToString(id)
	types:=GetMapValue("type",maps[0]).(string)
	created_time:=GetMapValue("created_time",maps[0]).(string)
	updated_time:=GetMapValue("updated_time",maps[0]).(string)
	returnData["type"]=types
	returnData["created_time"]=created_time
	returnData["updated_time"]=updated_time

	return  MessageSucessMap(returnData,"获取单条权限成功")
}


func DeleteAuthorizations(id uint64) (map[string]interface{}) {
	o := orm.NewOrm()
	v := AuthorizationsFast{Id: id}
	// ascertain id exists in the database
	if err := o.Read(&v);
		err != nil {
		return  MessageErrorUint64(id,"数据不存在")
	}
	if _, err := o.Delete(&AuthorizationsFast{Id: id});
		err != nil {
		return  MessageErrorUint64(id,"删除失败")
	}
	DeleteAttributes(id)
	return  MessageSucessUint64(id,"删除成功")
}