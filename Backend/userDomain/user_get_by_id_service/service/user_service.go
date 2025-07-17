package service

import (
	"errors"
	"user_get_by_id_service/model"

	"gorm.io/gorm"
)

func GetUserByID(db *gorm.DB, id string) (*model.User, error) {
	var user model.User
	result := db.First(&user, id)
	if result.Error != nil {
		return nil, errors.New("usuario no encontrado")
	}
	return &user, nil
}
