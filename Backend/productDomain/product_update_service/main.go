package main

import (
	"product-update-service/controller"
	"product-update-service/database"

	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()

	router := gin.Default()

	// Ruta para actualizar producto
	router.PUT("/products/:id", controller.UpdateProductHandler)

	router.Run(":3016")
}
