package main

import (
	"log"
	"os"
	"user-get-by-id-service/controller"
	"user-get-by-id-service/database"

	"github.com/gin-gonic/gin"
)

func main() {
	db := database.Connect()

	router := gin.Default()
	router.GET("/users/:id", controller.GetUserByID(db))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3014"
	}
	log.Printf("🚀 Servidor corriendo en http://localhost:%s", port)
	router.Run(":" + port)
}
