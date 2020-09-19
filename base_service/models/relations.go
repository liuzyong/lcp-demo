package models

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
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


// AddCategories insert a new Categories into database and returns
// last inserted Id on success.
func DeleteRelations(SourceId uint64, Type string) bool {
	orm.Debug = true
	o := orm.NewOrm()
	sql :="delete  from `relations` where source_id=? and type=?"
	beego.Debug(sql)
	res, err := o.Raw(sql,SourceId,Type).Exec()
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


