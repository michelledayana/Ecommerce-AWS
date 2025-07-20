from fastapi import FastAPI, Form, Depends
from sqlalchemy.orm import Session
from app.database.connection import Base, engine, SessionLocal
from app.schemas import schemas
from app.crud import crud

app = FastAPI()

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/products/")
async def create_product(
    name: str = Form(...),
    description: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    db: Session = Depends(get_db)
):
    product_data = schemas.ProductCreate(name=name, description=description, price=price, stock=stock)
    product = crud.create_product(db, product_data)
    return product

#test6