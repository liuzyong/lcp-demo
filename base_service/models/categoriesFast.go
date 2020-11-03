package models

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"strconv"
	"time"
)

type CategoriesFast struct {
	Id          uint64       `orm:"column(id);pk" description:"id"`
	ParentId    uint64    `orm:"column(parent_id)" description:"父ID"`
	Level       uint      `orm:"column(level)" description:"层级"`
	Path        string    `orm:"column(path);size(255);null"`
	Type        string    `orm:"column(type);size(255);null"`
	CreatedTime string `orm:"column(created_time);type(timestamp);null"`
	UpdatedTime string `orm:"column(updated_time);type(timestamp);null"`
}


type CategoriesDataFast struct {
	Id   uint64 `json:"id"`
	Type string `json:"type"`
	ParentId uint64 `json:"parent_id"`
	Level    uint	`json:"level"`
	Path    string	`json:"path"`
	Attribute []Attribute `json:"attributes"`
}





func AddCategoriesFast(category map[string]interface{},types string) (data map[string]interface{}) {
	id :=SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()

	parent_id := GetMapValue("parent_id", category)
	level := GetMapValue("level", category)
	path := GetMapValue("path", category)

	if parent_id == "" {
		return MessageErrorUint64(0, "添加失败,parent_id不能为空")
	}

	if level == "" {
		return MessageErrorUint64(0, "添加失败,level不能为空")
	}

	if path == "" {
		return MessageErrorUint64(0, "添加失败,path不能为空")
	}


	CategorieData := new(Categories)
	CategorieData.CreatedTime = time.Now()
	CategorieData.UpdatedTime = time.Now()
	CategorieData.Type = types
	CategorieData.ParentId = StringToUint64(ToString(parent_id))
	CategorieData.Level =StringToUint(ToString(level))
	CategorieData.Path = path.(string)
	CategorieData.Id = id
	CategorieData.Relation1 =  GetMapValue("relation1", category).(string)
	CategorieData.Relation2 =  GetMapValue("relation2", category).(string)
	CategorieData.Relation3 =  GetMapValue("relation3", category).(string)
	CategorieData.Relation4 =  GetMapValue("relation4", category).(string)
	CategorieData.Relation5 =  GetMapValue("relation5", category).(string)
	CategorieData.Relation6 =  GetMapValue("relation6", category).(string)
	num, err := o.Insert(CategorieData)
	if err != nil {
		fmt.Println("mysql row affected id: ", num, err)
		return MessageErrorMap(data, "添加失败")
	}
	deleteMap := make(map[string]interface{})
	deleteMap["parent_id"]=parent_id
	deleteMap["level"]=level
	deleteMap["parent_id"]=parent_id
	deleteMap["relation1"]=""
	deleteMap["relation2"]=""
	deleteMap["relation3"]=""
	deleteMap["relation4"]=""
	deleteMap["relation5"]=""
	deleteMap["relation6"]=""
	deleteMap["path"]=path
	deleteMap["type"]=types
	InsertAttributesToDb(category,id,deleteMap,"category")

	return  MessageSucessUint64(id,"添加成功")
}




func UpdateCategoriesByIdFast(category map[string]interface{},id uint64) (map[string]interface{}) {

	orm.Debug = true
	o := orm.NewOrm()

	CategorieData := Categories{Id: id}

	err := o.Read(&CategorieData)
	if err != nil  {
		return  MessageErrorUint64(id,"数据不存在")
	}

	CategorieData.UpdatedTime = time.Now()
	CategorieData.Id = id
	types :=  GetMapValue("type", category).(string)
	parent_id :=  GetMapValue("parent_id", category)
	level :=  GetMapValue("level", category)
	path :=  GetMapValue("path", category)
	Relation1 :=   GetMapValue("relation1", category).(string)
	Relation2 :=  GetMapValue("relation2", category).(string)
	Relation3 :=  GetMapValue("relation3", category).(string)
	Relation4 :=  GetMapValue("relation4", category).(string)
	Relation5 :=  GetMapValue("relation5", category).(string)
	Relation6 :=  GetMapValue("relation6", category).(string)
	if Relation1 != "" {
		CategorieData.Relation1 = Relation1
	}
	if Relation2 != "" {
		CategorieData.Relation2 = Relation2
	}
	if Relation3 != "" {
		CategorieData.Relation3 = Relation3
	}
	if Relation4 != "" {
		CategorieData.Relation4 = Relation4
	}
	if Relation5 != "" {
		CategorieData.Relation5 = Relation5
	}
	if Relation6 != "" {
		CategorieData.Relation6 = Relation6
	}
	if types != "" {
		CategorieData.Type = types
	}
	if parent_id != "" {
		CategorieData.ParentId = StringToUint64(ToString(GetMapValue("parent_id", category)))

	}
	if level != "" {
		CategorieData.Level =StringToUint(ToString(GetMapValue("level", category)))

	}
	if path != "" {
		CategorieData.Path = GetMapValue("path", category).(string)

	}


	if num, err := o.Update(&CategorieData); err != nil {
		fmt.Println("mysql row affected id: ",num,err)
		return MessageErrorUint64(id, "修改失败")
	}

	deleteMap := make(map[string]interface{})
	deleteMap["parent_id"]=parent_id
	deleteMap["level"]=level
	deleteMap["parent_id"]=parent_id
	deleteMap["type"]=types
	UpdateAttributesToDb(category,id,deleteMap,"category")


	return MessageSucessUint64(id, "修改成功")
}

func GetCategoriesFastById(id uint64) (data map[string]interface{}) {
	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  categories where id=?",id).Values(&maps)
	if err != nil  || num <= 0{        //处理err
		return  MessageErrorMap(data,"获取数据失败,请检查传入id参数")
	}

	attributes,errs := GetAttributes(id)
	if errs != nil {        //处理err
		return  MessageErrorMap(data,"获取单条数据失败")
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
	level:=GetMapValue("level",maps[0]).(string)
	parent_id:=GetMapValue("parent_id",maps[0]).(string)
	path:=GetMapValue("path",maps[0]).(string)
	created_time:=GetMapValue("created_time",maps[0]).(string)
	updated_time:=GetMapValue("updated_time",maps[0]).(string)
	returnData["type"]=types
	returnData["level"]=level
	returnData["parent_id"]=parent_id
	returnData["path"]=path
	returnData["created_time"]=created_time
	returnData["updated_time"]=updated_time

	return  MessageSucessMap(returnData,"获取数据成功")
}

func GetAllCategoriesFast(types string,query map[string]string, names map[string]string,fields []string, sortby []string, order []string,
	page int64, page_size int64) (data map[string]interface{}) {

	var DataList [] orm.Params
	var count int64
	 category_ids :=""
	//如果是通过names来进行过滤查询 该方式性能较差,可能是下面查询方式的 二十分之一性能
	if len(names) != 0{
		//参数遍历

		DataList=FindSourceIdByNameFromAttributes("categories",query,names, fields, sortby, order, page, page_size,category_ids,"category","")
		count=CountSourceIdByNameFromAttributes("categories",query,names,category_ids,"category","")

	}else{
		DataList=FindSourceIdByFromTables("categories",query, fields, sortby, order, page, page_size,category_ids,"")
		count=CountSourceIdByFromTables("categories",query,category_ids,"")
	}



	if count <=0 {
		return MessageErrorMap(data,"没有查到数据,请添加数据")
	}


	if  0== len(DataList){
		return MessageErrorMap(data,"没有查到数据,请添加数据")
	}


	dataList := []map[string]string{}
	for i := 0; i < len(DataList); i++ {

		var source_id uint64

		id:=GetMapValue("id",DataList[i]).(string)
		source_id, _ = strconv.ParseUint(id, 10, 64)

		//获取详情信息
		attributes,errs := GetAttributes(source_id)
		data := make(map[string]string)
		if errs ==nil{
			for i := 0; i < len(attributes); i++ {
				//var data map[string]string
				key,value:=GetMapAttibutesKeyAndValue(attributes[i])
				beego.Debug(key)
				beego.Debug(value)
				//data[key]=value
				fmt.Printf("v1 type:%T\n", key)
				fmt.Printf("v2 type:%T\n", value)
				data[key]=value

			}
			data["id"]=id
			types:=GetMapValue("type",DataList[i]).(string)
			parent_id:=GetMapValue("parent_id",DataList[i]).(string)
			path:=GetMapValue("path",DataList[i]).(string)
			level:=GetMapValue("level",DataList[i]).(string)
			created_time:=GetMapValue("created_time",DataList[i]).(string)
			updated_time:=GetMapValue("updated_time",DataList[i]).(string)
			data["parent_id"]=parent_id
			data["path"]=path
			data["level"]=level
			data["type"]=types
			data["created_time"]=created_time
			data["updated_time"]=updated_time

			dataList = append(dataList, data)

		}

		beego.Debug(dataList)
	}
	beego.Debug(data)
	returnData  :=map[string]interface{}{}
	returnData["items"]=dataList
	returnData["count"]=count
	returnData["page"]=page
	returnData["perPage"]=page_size

	return  MessageSucessMap(returnData,"获取成功")
}
