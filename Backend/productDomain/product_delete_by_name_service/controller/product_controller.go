package controller

import (
	"net/http"
	"product-delete-by-name-service/service"

	"github.com/gin-gonic/gin"
)

func DeleteProductByName(c *gin.Context) {
	name := c.Query("name")

	if name == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "El parámetro 'name' es requerido"})
		return
	}

	err := service.DeleteProductByName(name)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Producto eliminado correctamente"})
}
