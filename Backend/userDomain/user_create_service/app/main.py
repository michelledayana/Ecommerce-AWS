from fastapi import FastAPI
from app.routes import user_route
from app.models.user import Base   # importa Base de tus modelos
from app.utils.db import engine          # importa engine de la configuración DB

app = FastAPI()

# Crear tablas al iniciar la app
Base.metadata.create_all(bind=engine)

app.include_router(user_route.router, prefix="/users", tags=["Users"])

#test15



