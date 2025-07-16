package main

import (
	"log"
	"os"

	"user-list-service/database"
	"user-list-service/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	// Cargar la base de datos
	db := database.Connect()

	// Iniciar servidor
	router := gin.Default()
	router.GET("/users", handlers.GetUsers(db))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3013"
	}

	log.Printf("Servidor corriendo en http://localhost:%s", port)
	router.Run(":" + port)
}
