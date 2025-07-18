// model/product.go
package model

type Product struct {
	ID          uint    `gorm:"primaryKey" json:"id"`
	Name        string  `gorm:"type:varchar(255);not null" json:"name"`
	Description string  `gorm:"type:text;not null" json:"description"`
	Price       float64 `gorm:"type:numeric(10,2);not null" json:"price"`
	Stock       int     `gorm:"not null" json:"stock"`
}
