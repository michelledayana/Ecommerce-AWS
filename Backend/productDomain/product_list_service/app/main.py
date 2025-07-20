from fastapi import FastAPI
from app.routes import product_routes
from app.database.connection import engine
from app.models.product_model import Product

app = FastAPI()

# Crea las tablas automáticamente al iniciar
Product.metadata.create_all(bind=engine)

# Registra las rutas
app.include_router(product_routes.router)

#Test1
