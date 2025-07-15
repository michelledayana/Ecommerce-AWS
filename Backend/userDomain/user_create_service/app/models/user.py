from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from app.utils.db import engine  # importa el engine definido en db.py

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100), unique=True, index=True)
    password = Column(String(100))

Base.metadata.create_all(bind=engine)  # crea tablas si no existen
