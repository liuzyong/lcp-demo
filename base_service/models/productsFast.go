package models

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"strconv"
	"time"
)

type ProductsFast struct {
	Id          uint64       `orm:"column(id);pk" description:"id"`
	Type    string    `orm:"column(type)" description:"产品类型"`
	CreatedTime string `orm:"column(created_time);type(timestamp);null"`
	UpdatedTime string `orm:"column(updated_time);type(timestamp);null"`
}




// AddProducts insert a new Products into database and returns
// last inserted Id on success.
func AddProductsFast(product map[string]interface{},types string) (data map[string]interface{}) {
	id :=SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()


	sql :="INSERT INTO `products` (`id`,  `type`, `created_time`, `updated_time`)" +
		" VALUES (?, ?,?,  ?)"

	res, err := o.Raw(sql,id,types,time.Now(),time.Now()).Exec()
	if err != nil {
		num, _ := res.RowsAffected()
		fmt.Println("mysql row affected nums: ", num)
		return  MessageErrorMap(data,"添加产品失败")
	}

	//
	////填写产品属性
	//

	////添加分类属性
	//for _, v := range c.CategoryIds {
	//	beego.Debug("v")
	//	AddRelations(id,v,"category_product")
	//}
	//
	beego.Debug(product)


	var  attribute Attribute
	for key, value := range product {

		attribute.SourceId=id
		attribute.Name=key
		attribute.Value=value.(string)
		attribute.Format=getDataType(value)
		if attribute.Name=="type"{
			continue
		}
		//UpdateAttributes(&attribute,id)
		AddAttributes(&attribute,id,"product")
	}

	return  MessageSucessUint64(id,"添加成功")
}


func GetProductsFastById(id uint64) (data map[string]interface{}) {
	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  products where id=?",id).Values(&maps)
	if err != nil  || num <= 0{        //处理err
		return  MessageErrorMap(data,"获取数据失败,请检查传入id参数")
	}

	attributes,errs := GetAttributes(id)
	if errs != nil {        //处理err
		return  MessageErrorMap(data,"获取数据失败")
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

	return  MessageSucessMap(returnData,"获取数据成功")
}




func GetAllProductsFast(types string,query map[string]string, names map[string]string,fields []string, sortby []string, order []string,
	page int64, page_size int64,category_ids string) (data map[string]interface{}) {

	var DataList [] orm.Params
	var count int64

	//如果是通过names来进行过滤查询 该方式性能较差,可能是下面查询方式的 二十分之一性能
	if len(names) != 0{
		//参数遍历
		//name:=where(names)
		DataList=FindSourceIdByNameFromAttributes("products",query,names, fields, sortby, order, page, page_size,category_ids,"product")
		count=CountSourceIdByNameFromAttributes("products",query,names,category_ids,"product")

	}else{
		//sqlCount="select count(*) as count from  products  where  1=1"
		DataList=FindSourceIdByFromTables("products",query, fields, sortby, order, page, page_size,category_ids)
		count=CountSourceIdByFromTables("products",query,category_ids)
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
			created_time:=GetMapValue("created_time",DataList[i]).(string)
			updated_time:=GetMapValue("updated_time",DataList[i]).(string)
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

	return  MessageSucessMap(returnData,"获取产品列表成功")
}


//更新产品
// UpdateCategories updates Categories by Id and returns error if
// the record to be updated doesn't exist
func UpdateProductByIdFast(product map[string]interface{},id uint64) (map[string]interface{}) {

	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  products where id=?",id).Values(&maps)
	if err != nil  || num <= 0{        //处理err
		return  MessageErrorUint64(id,"产品不存在")
	}
	beego.Debug("UpdateProductByIdFast1")
	category_id :=GetMapValue("category_id",product)
	if category_id !=""{
		//sql:="UPDATE  `products` SET `category_id`=?, `updated_time`=? " +
		//	"WHERE (`id`=?);"
		//_, err := o.Raw(sql,category_id,time.Now(),id).Exec()
		//
		//if err != nil {
		//	return  MessageErrorUint64(id,"修改产品失败")
		//}


		//更新分类属性
		//if(0< len(m.CategoryIds)){
		//	for _, v := range m.CategoryIds {
		//		beego.Debug("v")
		//		DeleteRelations(m.Id,"category_product")
		//		AddRelations(m.Id,v,"category_product")
		//	}
		//}

	}else{
		sql:="UPDATE  `products` SET  `updated_time`=? " +
			"WHERE (`id`=?);"
		_, err := o.Raw(sql,time.Now(),id).Exec()

		if err != nil {
			return  MessageErrorUint64(id,"修改产品失败")
		}
	}
	beego.Debug("UpdateProductByIdFast2")

	beego.Debug(product)

	var  attribute Attribute
	for key, value := range product {

		attribute.SourceId=id
		attribute.Name=key
		attribute.Value=value.(string)
		attribute.Format=getDataType(value)
		if attribute.Name=="type"{
			continue
		}
		attributeData,errs := GetAttributesByName(id,key,"product")
		beego.Debug(attributeData)
		beego.Debug(errs)
		if errs == nil {        //修改
			UpdateAttributes(&attribute,id)
		}else{//添加
			AddAttributes(&attribute,id,"product")
		}
	}

	//如果配置存在则更新

	return  MessageSucessUint64(id,"修改产品成功")
}