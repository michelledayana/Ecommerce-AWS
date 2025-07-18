package service

import (
	"errors"
	"product-delete-by-name-service/database"
	"product-delete-by-name-service/model"
)

func DeleteProductByName(name string) error {
	var product model.Product
	result := database.DB.Where("name = ?", name).First(&product)

	if result.Error != nil {
		return errors.New("producto no encontrado")
	}

	database.DB.Delete(&product)
	return nil
}
