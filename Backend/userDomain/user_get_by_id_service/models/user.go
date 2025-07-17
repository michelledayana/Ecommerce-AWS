package models

type User struct {
	ID       int    `json:"id" gorm:"column:id"`
	Name     string `json:"name" gorm:"column:name"`
	Email    string `json:"email" gorm:"column:email"`
	Password string `json:"password" gorm:"column:password"`
}

// Tabla manual si no sigue convención "users"
func (User) TableName() string {
	return "users"
}
