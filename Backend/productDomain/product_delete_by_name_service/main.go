package main

import (
	"product-delete-by-name-service/controller"
	"product-delete-by-name-service/database"

	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()

	router := gin.Default()

	router.DELETE("/api/products/delete", controller.DeleteProductByName)

	router.Run(":3019")
}
