package models

import (
	"fmt"
	"reflect"
	"strconv"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type UsersFast struct {
	Id          uint64       `orm:"column(id);pk" description:"id"`
	Type    string    `orm:"column(type)" description:""`
	Username    string    `orm:"column(username)" description:""`
	Password    string    `orm:"column(password)" description:""`
	Phone    string    `orm:"column(phone)" description:""`
	Email    string    `orm:"column(email)" description:""`
	Relation1    string    `orm:"column(relation1)" description:""`
	Relation2    string    `orm:"column(relation2)" description:""`
	Relation3    string    `orm:"column(relation3)" description:""`
	Relation4    string    `orm:"column(relation4)" description:""`
	Relation5    string    `orm:"column(relation5)" description:""`
	Relation6    string    `orm:"column(relation6)" description:""`
	CreatedTime time.Time `orm:"column(created_time);type(timestamp);null"`
	UpdatedTime time.Time `orm:"column(updated_time);type(timestamp);null"`
}

type UsersFastData struct {
	Id   uint64 `json:"id"`
	Relation1 string `json:"relation1"`
	Relation2 string `json:"relation2"`
	Relation3 string `json:"relation3"`
	Relation4 string `json:"relation4"`
	Relation5 string `json:"relation5"`
	Relation6 string `json:"relation6"`
	Attribute []Attribute `json:"attributes"`
}

// AddUsers insert a new Products into database and returns
// last inserted Id on success.
func AddUsersFast(user map[string]interface{}, types string) (data map[string]interface{}) {
	id := SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()

	username := GetMapValue("username", user)
	//验证数据是否存在
	phone := GetMapValue("phone", user)
	password := GetMapValue("password", user)
	email := GetMapValue("email", user)

	userData := new(Users)

	if username == "" && phone == "" {
		return MessageErrorUint64(0, "添加用户失败,用户名 或跟手机号 必须存在一个")
	}
	//验证手机号 是否存在
	if phone != "" {
		sql := "select count(*) as count from  `users`  where phone=? and type=? limit 1"

		var countNum []orm.Params
		_, errs := o.Raw(sql, phone, types).Values(&countNum)
		if errs != nil {
			beego.Debug(errs)
			return MessageErrorUint64(0, "用户注册失败,未知错误")
		}

		counts := GetMapValue("count", countNum[0]).(string)
		count, err := strconv.ParseInt(counts, 10, 64)
		if err != nil || count > 0 {
			return MessageErrorUint64(0, "添加用户失败,手机号已经存在")
		}
		userData.Phone = phone.(string)
	}
	//验证用户名 是否存在
	if username != "" {
		sql := "select count(*) as count from  `users`  where username=? and type=?  limit 1"

		var countNum []orm.Params
		_, errs := o.Raw(sql, username, types).Values(&countNum)
		if errs != nil {
			beego.Debug(errs)
			return MessageErrorUint64(0, "用户注册失败,未知错误")
		}

		counts := GetMapValue("count", countNum[0]).(string)
		count, err := strconv.ParseInt(counts, 10, 64)
		if err != nil || count > 0 {
			return MessageErrorUint64(0, "添加用户失败,用户名已经存在")
		}
		userData.Username = username.(string)
	}

	if email != "" {

		userData.Email = email.(string)
	}

	if password != "" {

		userData.Password = password.(string)
	}

	userData.CreatedTime = time.Now()
	userData.UpdatedTime = time.Now()
	userData.Type = types
	userData.Id = id
	userData.Relation1 =  GetMapValue("relation1", user).(string)
	userData.Relation2 =  GetMapValue("relation2", user).(string)
	userData.Relation3 =  GetMapValue("relation3", user).(string)
	userData.Relation4 =  GetMapValue("relation4", user).(string)
	userData.Relation5 =  GetMapValue("relation5", user).(string)
	userData.Relation6 =  GetMapValue("relation6", user).(string)

	num, err := o.Insert(userData)
	if err != nil {
		fmt.Println("mysql row affected id: ", num, err)
		return MessageErrorMap(data, "用户注册失败")
	}

	beego.Debug(user)

	AddCategoriesRelation(GetMapValue("category_ids",user),id,"user_category")
	var attribute Attribute
	for key, value := range user {
		//判断是否需要添加用户权限
		if(key=="authorization"){
			var authorizationType=""
			 values := make(map[string]interface{})

			for k, v := range value.(map[string]interface{}){
					if(k=="type"){
						authorizationType=v.(string)
					}
				values[k]=v
			}
			values["resource"]=uint64ToString(id)
			if(authorizationType==""){
				return MessageErrorMap(data, "用户注册失败,添加权限type不能为空")
			}
			authorizationData:=AddAuthorizationsFast(values,authorizationType)
			for k, v := range authorizationData{
				if(k=="status" && v==2000){
					return authorizationData
				}else if(k=="data"){
					attribute.SourceId = id
					attribute.Name = "authorization_id"
					attribute.Value = uint64ToString(v.(uint64))
					attribute.Format = getDataType(value)
					AddAttributes(&attribute, id, "user")
				}
			}
			continue
		}
		attribute.SourceId = id
		attribute.Name = key
		attribute.Value = value.(string)
		attribute.Format = getDataType(value)
		//去掉表固定字段
		if attribute.Name == "type" || attribute.Name == "username" || attribute.Name == "phone" || attribute.Name == "password" || attribute.Name == "email" {
			continue
		}

		//去掉权限字段
		//UpdateAttributes(&attribute,id)
		AddAttributes(&attribute, id, "user")
	}

	return MessageSucessUint64(id, "用户注册成功")
}


func GetUsersByUsername(username string, password string) (data map[string]interface{}) {
	orm.Debug = true
	o := orm.NewOrm()
	var maps []orm.Params
	num, err := o.Raw("select * from  users where `username`=? and  `password`=?", username, password).Values(&maps)
	if err != nil || num <= 0 { //处理err
		return MessageErrorMap(data, "登录失败,请检查用户名跟密码是否正确")
	}
	beego.Debug(maps[0])
	idStr := GetMapValue("id", maps[0])
	id, _ := strconv.ParseUint(idStr.(string), 10, 64)
	beego.Debug(id)
	fmt.Println("v1 type:", reflect.TypeOf(id))
	attributes, errs := GetAttributes(id)
	if errs != nil { //处理err
		return MessageErrorMap(data, "获取用户信息失败")
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
	phone := GetMapValue("phone", maps[0]).(string)
	email := GetMapValue("email", maps[0]).(string)
	returnData["type"] = types
	returnData["created_time"] = created_time
	returnData["updated_time"] = updated_time
	returnData["phone"] = phone
	returnData["email"] = email

	return MessageSucessMap(returnData, "登录成功")
}

func GetAllUsersFast(types string, query map[string]string, names map[string]string, fields []string, sortby []string, order []string,
	page int64, page_size int64, category_ids string) (data map[string]interface{}) {

	var DataList []orm.Params
	var count int64

	//如果是通过names来进行过滤查询 该方式性能较差,可能是下面查询方式的 二十分之一性能
	if len(names) != 0 {
		//参数遍历
		//name:=where(names)
		DataList = FindSourceIdByNameFromAttributes("users", query, names, fields, sortby, order, page, page_size, category_ids, "user","user_category")
		count = CountSourceIdByNameFromAttributes("users", query, names, category_ids, "user","user_category")

	} else {
		//sqlCount="select count(*) as count from  products  where  1=1"
		DataList = FindSourceIdByFromTables("users", query, fields, sortby, order, page, page_size, category_ids,"user_category")
		count = CountSourceIdByFromTables("users", query, category_ids,"user_category")
	}

	if count <= 0 {
		return MessageErrorMap(data, "没有查到数据,请添加数据")
	}

	if 0 == len(DataList) {
		return MessageErrorMap(data, "没有查到数据,请添加数据")
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
			username := GetMapValue("username", DataList[i]).(string)
			password := GetMapValue("password", DataList[i]).(string)
			phone := GetMapValue("phone", DataList[i]).(string)
			email := GetMapValue("email", DataList[i]).(string)
			data["type"] = types
			data["created_time"] = created_time
			data["updated_time"] = updated_time
			data["username"] = username
			data["password"] = password
			data["phone"] = phone
			data["email"] = email

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

func GetUsersByIdFast(id uint64) (data map[string]interface{}) {
	orm.Debug = true
	o := orm.NewOrm()
	var maps [] orm.Params
	num,err := o.Raw("select * from  users where id=?",id).Values(&maps)
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
	username := GetMapValue("username", maps[0]).(string)
	password := GetMapValue("password", maps[0]).(string)
	phone := GetMapValue("phone", maps[0]).(string)
	email := GetMapValue("email", maps[0]).(string)
	returnData["username"] = username
	returnData["password"] = password
	returnData["phone"] = phone
	returnData["email"] = email
	returnData["type"]=types
	returnData["created_time"]=created_time
	returnData["updated_time"]=updated_time

	return  MessageSucessMap(returnData,"获取数据成功")
}

//修改用户
// UpdateConfigurations updates Configurations by Id and returns error if
// the record to be updated doesn't exist
func UpdateUsersByIdFast(user map[string]interface{},id uint64) (map[string]interface{}) {

	orm.Debug = true
	o := orm.NewOrm()

	userData := Users{Id: id}
	err := o.Read(&userData)
	if err != nil  {        //处理err
		return  MessageErrorUint64(id,"数据不存在")
	}

	username := GetMapValue("username", user)
	//验证数据是否存在
	phone := GetMapValue("phone", user)
	password := GetMapValue("password", user)
	email := GetMapValue("email", user)
	types :=  GetMapValue("type", user).(string)
	Relation1 :=   GetMapValue("relation1", user).(string)
	Relation2 :=  GetMapValue("relation2", user).(string)
	Relation3 :=  GetMapValue("relation3", user).(string)
	Relation4 :=  GetMapValue("relation4", user).(string)
	Relation5 :=  GetMapValue("relation5", user).(string)
	Relation6 :=  GetMapValue("relation6", user).(string)
	//验证手机号 是否存在
	if phone != "" {
		sql := "select count(*) as count from  `users`  where phone=? and type=? limit 1"

		var countNum []orm.Params
		_, errs := o.Raw(sql, phone, types).Values(&countNum)
		if errs != nil {
			beego.Debug(errs)
			return MessageErrorUint64(0, "修改失败,未知错误")
		}

		counts := GetMapValue("count", countNum[0]).(string)
		count, err := strconv.ParseInt(counts, 10, 64)
		if err != nil || count > 0 {
			return MessageErrorUint64(0, "修改失败,手机号已经存在")
		}
		userData.Phone = phone.(string)
	}
	//验证用户名 是否存在
	if username != "" {
		sql := "select count(*) as count from  `users`  where username=? and type=?  limit 1"

		var countNum []orm.Params
		_, errs := o.Raw(sql, username, types).Values(&countNum)
		if errs != nil {
			beego.Debug(errs)
			return MessageErrorUint64(0, "修改失败,未知错误")
		}

		counts := GetMapValue("count", countNum[0]).(string)
		count, err := strconv.ParseInt(counts, 10, 64)
		if err != nil || count > 0 {
			return MessageErrorUint64(0, "修改失败,用户名已经存在")
		}
		userData.Username = username.(string)
	}

	if email != "" {

		userData.Email = email.(string)
	}

	if password != "" {

		userData.Password = password.(string)
	}
	if types != "" {
		userData.Type = types
	}

	if Relation1 != "" {
		userData.Relation1 = Relation1
	}
	if Relation2 != "" {
		userData.Relation2 = Relation2
	}
	if Relation3 != "" {
		userData.Relation3 = Relation3
	}
	if Relation4 != "" {
		userData.Relation4 = Relation4
	}
	if Relation5 != "" {
		userData.Relation5 = Relation5
	}
	if Relation6 != "" {
		userData.Relation6 = Relation6
	}

	userData.UpdatedTime = time.Now()
	userData.Id = id

	if num, err := o.Update(&userData); err != nil {
		fmt.Println("mysql row affected id: ",num,err)
		return MessageErrorUint64(id, "修改失败")
	}


	//
	//sql:="UPDATE  `users` SET  `type`=?, `username`=?, `password`=?, `phone`=?, `email`=?, `relation1`=?, `relation2`=?, `relation3`=?, `relation4`=?, `relation5`=?, `relation6`=?, `updated_time`=? " +
	//	"WHERE (`id`=?);"
	//
	//res, err := o.Raw(sql,time.Now(),id).Exec()
	//if err != nil {
	//	num, _ := res.RowsAffected()
	//	fmt.Println("mysql row affected nums: ", num)
	//	return  MessageErrorUint64(id,"修改失败")
	//}
	UpdateCategoriesRelation(GetMapValue("category_ids",user),id,"user_category")

	var  attribute Attribute
	for key, value := range user {

		attribute.SourceId=id
		attribute.Name=key
		attribute.Value=value.(string)
		attribute.Format=getDataType(value)
		if attribute.Name=="type"{
			continue
		}
		attributeData,errs := GetAttributesByName(id,key,"user")
		beego.Debug(attributeData)
		beego.Debug(errs)
		if errs == nil {        //修改
			UpdateAttributes(&attribute,id)
		}else{//添加
			AddAttributes(&attribute,id,"user")
		}
	}



	return  MessageSucessUint64(id,"修改成功")
}
