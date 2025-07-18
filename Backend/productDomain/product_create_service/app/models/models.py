from sqlalchemy import Column, Integer, String
from .database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(String(255))
    image_path = Column(String(255))  # Ruta de la imagen local
