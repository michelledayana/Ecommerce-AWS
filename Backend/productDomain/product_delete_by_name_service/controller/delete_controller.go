package controller

import (
	"net/http"

	"product_delete_by_name_service/service"

	"github.com/gin-gonic/gin"
)

func DeleteProductByNameHandler(c *gin.Context) {
	name := c.Param("name")

	err := service.DeleteProductByName(name)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product deleted successfully"})
}
