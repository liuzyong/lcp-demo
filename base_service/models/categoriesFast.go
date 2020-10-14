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





func AddCategoriesFast(category map[string]interface{}) (data map[string]interface{}) {
	id :=SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()

	parent_id := GetMapValue("parent_id", category)
	level := GetMapValue("level", category)
	path := GetMapValue("path", category)
	types :=GetMapValue("type", category)

	if parent_id == "" {
		return MessageErrorUint64(0, "添加失败,parent_id不能为空")
	}

	if level == "" {
		return MessageErrorUint64(0, "添加失败,level不能为空")
	}

	if path == "" {
		return MessageErrorUint64(0, "添加失败,path不能为空")
	}


	sql :="INSERT INTO `categories` (`id`, `parent_id`, `level`, `path`, `type`, `created_time`, `updated_time`)" +
		" VALUES (?, ?, ?, ?, ?, ?, ?)"

	res, err := o.Raw(sql,id,parent_id,level,path,types,time.Now(),time.Now()).Exec()
	if err != nil {
		num, _ := res.RowsAffected()
		fmt.Println("mysql row affected nums: ", num)
		return  MessageErrorMap(data,"添加失败")
	}


	beego.Debug(category)
	deleteMap := make(map[string]interface{})
	deleteMap["parent_id"]=parent_id
	deleteMap["level"]=level
	deleteMap["parent_id"]=parent_id
	deleteMap["path"]=path
	deleteMap["type"]=types
	InsertAttributesToDb(category,id,deleteMap)

	return  MessageSucessUint64(id,"添加成功")
}




func UpdateCategoriesByIdFast(category map[string]interface{},id uint64) (map[string]interface{}) {

	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  categories where id=?",id).Values(&maps)
	if err != nil  || num <= 0{        //处理err
		return  MessageErrorUint64(id,"数据不存在")
	}
	beego.Debug("UpdateCategoriesByIdFast")

	types := GetMapValue("type", category)
	parent_id := GetMapValue("parent_id", category)
	level := GetMapValue("level", category)
	path := GetMapValue("path", category)
	date := GetMapValue("date", category)

	beego.Debug(date)
	sql:="UPDATE  `categories` SET `parent_id`=?, `level`=?, `path`=?, `type`=?, `updated_time`=? " +
		"WHERE (`id`=?);"
	res, err := o.Raw(sql,parent_id,level,path,types,time.Now(),id).Exec()
	if err != nil {
		num, _ := res.RowsAffected()
		fmt.Println("mysql row affected nums: ", num)
		return MessageErrorUint64(id, "修改失败")
	}

	deleteMap := make(map[string]interface{})
	deleteMap["parent_id"]=parent_id
	deleteMap["level"]=level
	deleteMap["parent_id"]=parent_id
	deleteMap["type"]=types
	UpdateAttributesToDb(category,id,deleteMap)
	//如果配置存在则更新

	return MessageSucessUint64(id, "修改配置成功")
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

	return  MessageSucessMap(returnData,"获取单条产品成功")
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
