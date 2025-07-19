### Microserviceuser-create-service

**Language:** Python  
**Framework:** FastAPI  
**Database:** MySQL  
**Architecture:** RESTful API + ORM (SQLAlchemy)

## 📝 Description

This microservice is responsible for **creating new users** in the system.  
It receives `POST` requests with user data and stores the information in the `users_db` MySQL database.

## 🚀 Endpoint

- `POST /users/`  
  Creates a new user with the provided data.

## 🛠️ Technologies

- Python 3.11+
- FastAPI
- SQLAlchemy
- Pydantic
- MySQL

## 📁 Project Structure

![alt text](image.png)

## ✅ Responsibilities

- Validates incoming user registration data
- Connects to the database using SQLAlchemy
- Persists user data securely
- Returns proper HTTP status codes

## 🔐 Security Notes

- Input validation with Pydantic
- Passwords should be hashed (implementation recommended)
- .env file should be excluded from version control (`.gitignore`)
