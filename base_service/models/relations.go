package models

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"strings"
	"time"
)

type Relations struct {
	Id          uint64       `orm:"column(id);pk" description:"id"`
	SourceId    uint64    `orm:"column(source_id)" description:"如产品id "`
	TargetId    uint64    `orm:"column(source_id)" description:"如分类id"`
	Type        string    `orm:"column(type);size(255);null"`
	CreatedTime string `orm:"column(created_time);type(timestamp);null"`
	UpdatedTime string `orm:"column(updated_time);type(timestamp);null"`
}





func (t *Relations) TableName() string {
	return "relations"
}
//添加分类关联关系
func AddCategoriesRelation(categories interface{},id uint64,types string){

	if categories !=""{
		categories_ids :=strings.Split(categories.(string), ",")
		beego.Debug(categories_ids)
		for _, v := range categories_ids {
			beego.Debug("v")
			beego.Debug(v)
			AddRelations(id,StringToUint64(v),types)
		}
	}
}

//更新分类关联关系
func UpdateCategoriesRelation(categories interface{},id uint64,types string){

	if  categories !=""{
		categories_ids :=strings.Split(categories.(string), ",")
		beego.Debug(categories_ids)
		//添加分类属性

		//更新分类属性
		for _, v := range categories_ids {
			beego.Debug("v")
			beego.Debug(v)
			DeleteRelations(id,types)
			AddRelations(id,StringToUint64(v),types)
		}
	}
}

// AddCategories insert a new Categories into database and returns
// last inserted Id on success.
func DeleteRelations(SourceId uint64, Type string) bool {
	orm.Debug = true
	o := orm.NewOrm()
	sql :="delete  from `relations` where (source_id=? or target_id=? ) and type=?"
	beego.Debug(sql)
	res, err := o.Raw(sql,SourceId,SourceId,Type).Exec()
	if err != nil {
		num, _ := res.RowsAffected()
		fmt.Println("mysql row affected nums: ", num)
		return  false
	}
	return  true
}




// AddCategories insert a new Categories into database and returns
// last inserted Id on success.
func AddRelations(SourceId uint64,TargetId uint64,Type string) bool {
	id :=SnowflakeId()
	orm.Debug = true
	o := orm.NewOrm()
	sql :="INSERT INTO `relations` (`id`, `source_id`, `target_id`,`type`, `created_time`, `updated_time`)" +
		" VALUES (?, ?, ?, ?, ?, ?)"
	beego.Debug(sql)
	_, err := o.Raw(sql,id,SourceId,TargetId,Type,time.Now(),time.Now()).Exec()
	if err != nil {
		beego.Debug(err)
		return false
	}

	return true
}


