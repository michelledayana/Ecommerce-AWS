package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"user-list-service/config"
	"user-list-service/models"
)

func ListUsers(c *gin.Context) {
	var users []models.User
	result := config.DB.Find(&users)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, users)
}
