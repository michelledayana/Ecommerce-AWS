// database/connection.go
package database

import (
	"fmt"
	"log"
	"product-update-service/model"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() *gorm.DB {
	dsn := "host=localhost user=postgres password=dayana dbname=products_db port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error al conectar a la base de datos:", err)
	}

	err = db.AutoMigrate(&model.Product{})
	if err != nil {
		log.Fatal("Error en migración:", err)
	}

	DB = db
	fmt.Println("Conexión a la base de datos exitosa")
	return db
}
