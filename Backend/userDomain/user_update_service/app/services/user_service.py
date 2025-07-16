from sqlalchemy.orm import Session
from app.models.user import User

def update_user_service(db: Session, user_id: int, name: str = None, email: str = None):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return None
    if name is not None:
        user.name = name
    if email is not None:
        user.email = email
    db.commit()
    db.refresh(user)
    return user
