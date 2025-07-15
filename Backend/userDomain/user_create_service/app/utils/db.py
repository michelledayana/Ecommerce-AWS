from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

# Detecta si estás en Docker o local por variable ENVIRONMENT (que defines al correr)
environment = os.getenv("ENVIRONMENT", "local")  # por defecto 'local'

if environment == "docker":
    db_host = os.getenv("DB_HOST_DOCKER")
else:
    db_host = os.getenv("DB_HOST_LOCAL")

DATABASE_URL = (
    f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}"
    f"@{db_host}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

