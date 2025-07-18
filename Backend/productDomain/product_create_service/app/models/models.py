from sqlalchemy import Column, Integer, String, Float
from app.database.connection import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    price = Column(Float, nullable=False)      # debe existir
    stock = Column(Integer, nullable=False)    # debe existir
