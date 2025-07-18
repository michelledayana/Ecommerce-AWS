from sqlalchemy import Column, Integer, String
from app.database.connection import Base

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255))
    price = Column(Integer)
