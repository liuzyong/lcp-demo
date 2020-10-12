package controllers

import (
	"encoding/json"
	"errors"
	"github.com/astaxie/beego"
	"service_config/models"
	"strconv"
	"strings"
)

// CategoriesController operations for Categories
type CategoriesController struct {
	baseController
}

// URLMapping ...
func (c *CategoriesController) URLMapping() {
	beego.Debug("URLMapping")
	beego.Debug(c.Ctx.Input.Param(":method"))
	if c.Ctx.Input.Param(":method") == GetFast() {
		c.Method = "agility"
	} else {
		c.Method = "fast"
	}
	c.Mapping("Post", c.Post)
	c.Mapping("GetOne", c.GetOne)
	c.Mapping("GetAll", c.GetAll)
	c.Mapping("Put", c.Put)
	c.Mapping("Delete", c.Delete)
}





// Post ...
// @Title Post
// @Description create Categories
// @Param	body		body 	models.Categories	true		"body for Categories content"
// @Success 201 {int} models.Categories
// @Failure 403 body is empty
// @router / [post]
func (c *CategoriesController) Post() {


	beego.Debug("Post")
	if c.Method == "fast" {
		//快速开发模式

		var data map[string]interface{}
		err := json.Unmarshal(c.Ctx.Input.RequestBody, &data)
		if err == nil {
			types := models.GetMapValue("type", data)
			if types == "" {
				c.Data["json"] = models.MessageErrorUint64(0, "添加失败,type不能为空")
			} else {

				c.Data["json"] = models.AddCategoriesFast(data, types.(string))
			}
		} else {
			c.Data["json"] = models.MessageErrorUint64(0, err.Error())
		}
	}else{
		//var d models.Categorie
		var Categorie  models.CategoriesData
		err := json.Unmarshal(c.Ctx.Input.RequestBody, &Categorie)
		if err == nil {
			c.Data["json"]  = models.AddCategories(&Categorie)
		}else{
			c.Data["json"] =models.MessageErrorUint64(0,err.Error())
		}
	}

	c.ServeJSON()
	return

}

// GetOne ...
// @Title Get One
// @Description get Categories by id
// @Param	id		path 	string	true		"The key for staticblock"
// @Success 200 {object} models.Categories
// @Failure 403 :id is empty
// @router /:id [get]
func (c *CategoriesController) GetOne() {
	beego.Debug("GetOne")
	idStr := c.Ctx.Input.Param(":id")
	id, _ := strconv.ParseUint(idStr,10, 64)
	v := models.GetCategoriesById(id)

	c.Data["json"] = v
	c.ServeJSON()
	return
}

// GetAll ...
// @Title Get All
// @Description get Categories
// @Param	query	query	string	false	"Filter. e.g. col1:v1,col2:v2 ..."
// @Param	fields	query	string	false	"Fields returned. e.g. col1,col2 ..."
// @Param	sortby	query	string	false	"Sorted-by fields. e.g. col1,col2 ..."
// @Param	order	query	string	false	"Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ..."
// @Param	limit	query	string	false	"Limit the size of result set. Must be an integer"
// @Param	offset	query	string	false	"Start position of result set. Must be an integer"
// @Success 200 {object} models.Categories
// @Failure 403
// @router / [get]
//自定义开发模式
func (c *CategoriesController) GetAll() {
	beego.Debug("GetAll")

	var fields []string
	var sortby []string
	var order []string
	var query = make(map[string]string)
	var keys = make(map[string]string)
	var page_size int64 = 10
	var page int64
	// type
	var types string

	if v := c.GetString("type"); v != "" {
		types = v
	}

	// fields: col1,col2,entity.col3
	if v := c.GetString("fields"); v != "" {
		fields = strings.Split(v, ",")
	}
	// limit: 10 (default is 10)
	if v, err := c.GetInt64("page_size"); err == nil {
		page_size = v
	}
	// offset: 0 (default is 0)
	if v, err := c.GetInt64("page"); err == nil {
		page = (v-1)*page_size
	}
	beego.Debug(page)
	// sortby: col1,col2
	if v := c.GetString("sortby"); v != "" {
		sortby = strings.Split(v, ",")
	}
	// order: desc,asc
	if v := c.GetString("order"); v != "" {
		order = strings.Split(v, ",")
	}
	// query: k:v,k:v
	if v := c.GetString("query"); v != "" {
		for _, cond := range strings.Split(v, ",") {
			kv := strings.SplitN(cond, ":", 2)
			if len(kv) != 2 {
				c.Data["json"] = errors.New("Error: invalid query key/value pair")
				c.ServeJSON()
				return
			}
			k, v := kv[0], kv[1]
			query[k] = v
		}
	}

	// keys: k:v,k:v
	if v := c.GetString("keys"); v != "" {
		for _, cond := range strings.Split(v, ",") {
			kv := strings.SplitN(cond, ":", 2)
			if len(kv) != 2 {
				c.Data["json"] = errors.New("Error: invalid query key/value pair")
				c.ServeJSON()
				return
			}
			k, v := kv[0], kv[1]
			keys[k] = v
		}
	}

	v := models.GetAllCategories(types,query,keys, fields, sortby, order, page, page_size)
	c.Data["json"] = v
	c.ServeJSON()
	return
}

// Put ...
// @Title Put
// @Description update the Categories
// @Param	id		path 	string	true		"The id you want to update"
// @Param	body		body 	models.Categories	true		"body for Categories content"
// @Success 200 {object} models.Categories
// @Failure 403 :id is not int
// @router /:id [put]
func (c *CategoriesController) Put() {
	beego.Debug("Put")
	idStr := c.Ctx.Input.Param(":id")
	id, _ := strconv.ParseUint(idStr,10, 64)
	v := models.CategoriesData{Id: id}
	 err := json.Unmarshal(c.Ctx.Input.RequestBody, &v);
	if	err == nil {
		 data := models.UpdateCategoriesById(&v)
		 c.Data["json"] =data
	} else {
		c.Data["json"] =models.MessageErrorUint64(id,err.Error())
	}
	c.ServeJSON()
}

// Delete ...
// @Title Delete
// @Description delete the Categories
// @Param	id		path 	string	true		"The id you want to delete"
// @Success 200 {string} delete success!
// @Failure 403 id is empty
// @router /:id [delete]
func (c *CategoriesController) Delete() {
	beego.Debug("Delete")

	idStr := c.Ctx.Input.Param(":id")
	id, _ := strconv.ParseUint(idStr,10, 64)
	data := models.DeleteCategories(id)

		c.Data["json"] = data

	c.ServeJSON()
}
