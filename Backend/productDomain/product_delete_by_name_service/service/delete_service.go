package service

import (
	"errors"
	"strings"

	"product_delete_by_name_service/database"
	"product_delete_by_name_service/model"
)

func DeleteProductByName(name string) error {
	var product model.Product

	// Usamos ILIKE y TRIM para evitar errores por mayúsculas o espacios extra
	result := database.DB.
		Where("TRIM(LOWER(name)) = ?", strings.ToLower(strings.TrimSpace(name))).
		First(&product)

	if result.Error != nil {
		return errors.New("product not found")
	}

	if err := database.DB.Delete(&product).Error; err != nil {
		return err
	}
	return nil
}
