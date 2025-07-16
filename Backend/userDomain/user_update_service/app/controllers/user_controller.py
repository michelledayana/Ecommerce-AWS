from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services import user_service
from app.database.connection import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.put("/users/{user_id}")
def update_user(user_id: int, name: str, email: str, db: Session = Depends(get_db)):
    user = user_service.update_user_service(db, user_id, name, email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
