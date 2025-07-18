import os
from sqlalchemy.orm import Session
from .models import Product
from .schemas import ProductCreate

def create_product(db: Session, product: ProductCreate, image_filename: str):
    image_path = os.path.join("images", image_filename)
    db_product = Product(name=product.name, description=product.description, image_path=image_path)
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product
