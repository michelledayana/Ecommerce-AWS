package main

import (
	"product_delete_by_name_service/controller"
	"product_delete_by_name_service/database"

	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()

	r := gin.Default()
	r.DELETE("/products/:name", controller.DeleteProductByNameHandler)

	r.Run(":3019")
}

//Test2
