from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate
from app.services.user_service import create_user
from app.utils.db import get_db

router = APIRouter()

@router.post("/")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)
