package models

import (
	"github.com/GUAIK-ORG/go-snowflake/snowflake"
	"github.com/astaxie/beego"
	"strconv"
)

// 生成唯一id
// (s *Snowflake) NextVal() int64
// 返回1 (int64): 唯一ID
func SnowflakeId()uint64{
	s, err := snowflake.NewSnowflake(int64(0), int64(0))
	if err != nil {
		beego.Error(err)
		return uint64(0)
	}
	SnowflakeId := s.NextVal()

	return uint64(SnowflakeId)
}



func MessageSucessMap(data  map[string]interface{},message string) map[string]interface{}{
	var returnData map[string]interface{}

	returnData=map[string]interface{}{"data": data, "msg": message,"status":0}
	return returnData
}

func MessageSucessMapInt(data  map[int]string,message string) map[string]interface{}{
	var returnData map[string]interface{}

	returnData=map[string]interface{}{"data": data, "msg": message,"status":0}
	return returnData
}
func MessageErrorMap(data  map[string]interface{},message string) map[string]interface{}{
	var returnData map[string]interface{}
	returnData=map[string]interface{}{"data": data, "msg": message,"status":2000}
	return returnData
}

func MessageSucessUint64(data uint64,message string) map[string]interface{}{
	var returnData map[string]interface{}
	returnData=map[string]interface{}{"data": data, "msg": message,"status":0}
	return returnData
}


func MessageErrorUint64(data uint64,message string) map[string]interface{}{
	var returnData map[string]interface{}
	returnData=map[string]interface{}{"data": data, "msg": message,"status":2000}
	return returnData
}

func MessageSucessString(data string,message string) map[string]interface{}{
	var returnData map[string]interface{}
	returnData=map[string]interface{}{"data": data, "msg": message,"status":0}
	return returnData
}

func MessageErrorString(data string,message string) map[string]interface{}{
	var returnData map[string]interface{}
	returnData=map[string]interface{}{"data": data, "msg": message,"status":0}
	return returnData
}


func GetMapValue(key string, data map[string]interface{})(value interface{}) {
	for k, v := range data {
		if k == key {
			return v
		}
	}
	return ""
}

func uint64ToString(intNum uint64)(int64Str string){
	int64Str = strconv.FormatUint(intNum, 10)

	return int64Str
}
func getDataType(i interface{}) string {  //函数t有一个参数i
	switch i.(type) { //多选语句switch
	case string:
		return "string"
	case int:
		return "int"
	}
	return "string"
}