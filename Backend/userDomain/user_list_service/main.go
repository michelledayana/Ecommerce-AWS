package main

import (
	"user_list_service/config"
	"user_list_service/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	config.Connect()

	r := gin.Default()
	r.GET("/users", controllers.GetUsers)

	r.Run(":3010")
}

//Test3
