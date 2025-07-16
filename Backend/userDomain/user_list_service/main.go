package main

import (
	"github.com/gin-gonic/gin"
	"user-list-service/config"
	"user-list-service/controllers"
)

func main() {
	// Conectar a la base de datos
	config.Connect()

	// Auto migrar el modelo
	config.DB.AutoMigrate(&models.User{})

	// Crear servidor
	r := gin.Default()
	r.GET("/users", controllers.ListUsers)

	r.Run(":3013") // Puerto definido
}
