
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import SessionLocal
from app.models.user import User
from app.schemas.user_schema import LoginRequest, LoginResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login", response_model=LoginResponse)
def login_user(request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == request.email, User.password == request.password).first()
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    return {"message": "Login exitoso"}
