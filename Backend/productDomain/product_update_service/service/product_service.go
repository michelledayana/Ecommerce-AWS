// service/product_service.go
package service

import (
	"errors"
	"product-update-service/database"
	"product-update-service/model"
)

func UpdateProduct(id uint, updatedData model.Product) (*model.Product, error) {
	var product model.Product

	// Buscar el producto existente por ID
	if err := database.DB.First(&product, id).Error; err != nil {
		return nil, errors.New("producto no encontrado")
	}

	// Actualizar campos
	product.Name = updatedData.Name
	product.Description = updatedData.Description
	product.Price = updatedData.Price
	product.Stock = updatedData.Stock

	// Guardar cambios
	if err := database.DB.Save(&product).Error; err != nil {
		return nil, err
	}

	return &product, nil
}
