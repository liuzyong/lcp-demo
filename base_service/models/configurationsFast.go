package models

import (
	"fmt"
	"strconv"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type ConfigurationsFast struct {
	Id          uint64 `orm:"column(id);pk" description:"id"`
	Type        string `orm:"column(type);size(255);null"`
	CreatedTime string `orm:"column(created_time);type(timestamp);null"`
	UpdatedTime string `orm:"column(updated_time);type(timestamp);null"`
}

type ConfigurationsDataFast struct {
	Id        uint64      `json:"id"`
	Type      string      `json:"type"`
	ParentId  uint64      `json:"parent_id"`
	Level     uint        `json:"level"`
	Path      string      `json:"path"`
	Attribute []Attribute `json:"attributes"`
}

// AddConfigurations insert a new Configurations into database and returns
// last inserted Id on success.
func AddConfigurationsFast(configuration map[string]interface{}, types string) (data map[string]interface{}) {
	id := SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()

	ConfigurationData := new(Configurations)
	ConfigurationData.CreatedTime = time.Now()
	ConfigurationData.UpdatedTime = time.Now()
	ConfigurationData.Type = types
	ConfigurationData.Id = id
	ConfigurationData.Relation1 =  GetMapValue("relation1", configuration).(string)
	ConfigurationData.Relation2 =  GetMapValue("relation2", configuration).(string)
	ConfigurationData.Relation3 =  GetMapValue("relation3", configuration).(string)
	ConfigurationData.Relation4 =  GetMapValue("relation4", configuration).(string)
	ConfigurationData.Relation5 =  GetMapValue("relation5", configuration).(string)
	ConfigurationData.Relation6 =  GetMapValue("relation6", configuration).(string)
	num, err := o.Insert(ConfigurationData)
	if err != nil {
		fmt.Println("mysql row affected id: ", num, err)
		return MessageErrorMap(data, "添加失败")
	}


	AddCategoriesRelation(GetMapValue("category_ids",configuration),id,"configuration_category")
	beego.Debug(configuration)
	deleteMap := make(map[string]interface{})
	deleteMap["type"]=types
	InsertAttributesToDb(configuration,id,deleteMap,"configuration")


	return MessageSucessUint64(id, "添加成功")
}

func GetAllConfigurationsFast(types string, query map[string]string, names map[string]string, fields []string, sortby []string, order []string,
	page int64, page_size int64, category_ids string) (data map[string]interface{}) {

	var DataList []orm.Params
	var count int64

	//如果是通过names来进行过滤查询 该方式性能较差,可能是下面查询方式的 二十分之一性能
	if len(names) != 0 {
		//参数遍历
		//name:=where(names)
		DataList = FindSourceIdByNameFromAttributes("configurations", query, names, fields, sortby, order, page, page_size, category_ids,
			"configuration","configuration_category")
		count = CountSourceIdByNameFromAttributes("configurations", query, names, category_ids, "configuration","configuration_category")

	} else {
		//sqlCount="select count(*) as count from  products  where  1=1"
		DataList = FindSourceIdByFromTables("configurations", query, fields, sortby, order, page, page_size, category_ids,"configuration_category")
		count = CountSourceIdByFromTables("configurations", query, category_ids,"configuration_category")
	}

	if count <= 0 {
		return MessageErrorMap(data, "获取数据失败,没有查到有效数据")
	}

	if 0 == len(DataList) {
		return MessageErrorMap(data, "获取数据失败,没有查到有效数据")
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


func UpdateConfigurationsByIdFast(configuration map[string]interface{}, id uint64) map[string]interface{} {

	orm.Debug = true
	o := orm.NewOrm()
	ConfigurationData := Configurations{Id: id}

	err := o.Read(&ConfigurationData)
	if err != nil  {
		return  MessageErrorUint64(id,"数据不存在")
	}

	ConfigurationData.UpdatedTime = time.Now()
	ConfigurationData.Id = id
	types :=  GetMapValue("type", configuration).(string)
	Relation1 :=   GetMapValue("relation1", configuration).(string)
	Relation2 :=  GetMapValue("relation2", configuration).(string)
	Relation3 :=  GetMapValue("relation3", configuration).(string)
	Relation4 :=  GetMapValue("relation4", configuration).(string)
	Relation5 :=  GetMapValue("relation5", configuration).(string)
	Relation6 :=  GetMapValue("relation6", configuration).(string)
	if Relation1 != "" {
		ConfigurationData.Relation1 = Relation1
	}
	if Relation2 != "" {
		ConfigurationData.Relation2 = Relation2
	}
	if Relation3 != "" {
		ConfigurationData.Relation3 = Relation3
	}
	if Relation4 != "" {
		ConfigurationData.Relation4 = Relation4
	}
	if Relation5 != "" {
		ConfigurationData.Relation5 = Relation5
	}
	if Relation6 != "" {
		ConfigurationData.Relation6 = Relation6
	}
	if types != "" {
		ConfigurationData.Type = types
	}

	if num, err := o.Update(&ConfigurationData); err != nil {
		fmt.Println("mysql row affected id: ",num,err)
		return MessageErrorUint64(id, "修改失败")
	}
	UpdateCategoriesRelation(GetMapValue("category_ids",configuration),id,"configuration_category")


	deleteMap := make(map[string]interface{})
	deleteMap["type"]=types
	UpdateAttributesToDb(configuration,id,deleteMap,"configuration")

	return MessageSucessUint64(id, "修改成功")
}

func GetConfigurationsByIdFast(id uint64) (data map[string]interface{}) {
	orm.Debug = true
	o := orm.NewOrm()
	var maps []orm.Params
	num, err := o.Raw("select * from  configurations where id=?", id).Values(&maps)
	if err != nil || num <= 0 { //处理err
		return MessageErrorMap(data, "获取数据失败,请检查传入id参数")
	}

	attributes, errs := GetAttributes(id)
	if errs != nil { //处理err
		return MessageErrorMap(data, "获取数据失败")
	}

	returnData := make(map[string]interface{})
	for i := 0; i < len(attributes); i++ {
		//var data map[string]string
		key, value := GetMapAttibutesKeyAndValue(attributes[i])
		beego.Debug(key)
		beego.Debug(value)
		//data[key]=value
		fmt.Printf("v1 type:%T\n", key)
		fmt.Printf("v2 type:%T\n", value)
		returnData[key] = value

	}
	returnData["id"] = uint64ToString(id)
	types := GetMapValue("type", maps[0]).(string)
	created_time := GetMapValue("created_time", maps[0]).(string)
	updated_time := GetMapValue("updated_time", maps[0]).(string)
	returnData["type"] = types
	returnData["created_time"] = created_time
	returnData["updated_time"] = updated_time

	return MessageSucessMap(returnData, "获取成功")
}
