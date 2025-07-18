import os
from fastapi import FastAPI, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session
from .database import Base, engine, SessionLocal
from . import schemas, crud

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
    image: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    file_location = f"images/{image.filename}"
    with open(file_location, "wb") as f:
        f.write(await image.read())
    
    product_data = schemas.ProductCreate(name=name, description=description)
    return crud.create_product(db, product_data, image.filename)
