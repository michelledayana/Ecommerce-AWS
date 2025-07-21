# 📦 Ecommerce AWS

This project is a distributed backend infrastructure composed of microservices written in **Go**, **Python**, and **JavaScript**, connected to **MySQL** and **PostgreSQL** databases. It is designed to be deployed on an **AWS EC2 instance** using Docker containers via `docker-compose`.

---

## 🚀 Technologies Used

- **Programming Languages:**
  - Go (Gin + GORM)
  - Python (FastAPI + SQLAlchemy)
  - JavaScript (Node.js + Express + Sequelize)

- **Databases:**
  - PostgreSQL
  - MySQL

- **DevOps:**
  - Docker
  - Docker Compose
  - AWS EC2 (Ubuntu)

---

## 🗂️ Project Structure

```
└── 📁Backend
    └── 📁api_gateway
    └── 📁productDomain
        └── 📁product_create_service
        └── 📁product_delete_by_name_service
        └── 📁product_get_by_name_service
        └── 📁product_list_service
        └── 📁product_update_service
    └── 📁userDomain
        └── 📁user_create_service
        └── 📁user_delete_service
        └── 📁user_get_by_id_service
        └── 📁user_list_service
        └── 📁user_login_service                   
        └── 📁user_update_service
```

---

## ☁️ EC2 Setup Instructions

### 1. Connect to EC2 Instance via SSH

```bash
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

### 2. Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
exit  # Logout and SSH again
```

### 3. Install Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" \
-o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

---

## 🐳 Running the Services

1. Clone this repository into your EC2:

```bash
git clone https://github.com/yourusername/infra-backend-services.git
cd infra-backend-services
```

2. Rename `.env.example` to `.env` and set your environment variables:

```bash
cp .env.example .env
```

3. Start all services using Docker Compose:

```bash
docker-compose up -d
```

---

## 🧪 Health Check

Check each service by visiting:

```
http://<EC2_PUBLIC_IP>:<SERVICE_PORT>
```

Or use `curl`:

```bash
curl http://localhost:8000/users
```

---

## 📝 Author

Michelle Heredia  
Project: **Distributed E-commerce Backend**


