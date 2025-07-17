package controller

import (
	"net/http"
	"user-get-by-id-service/service"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetUserByID(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Param("id")
		user, err := service.GetUserByID(db, id)
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, user)
	}
}
