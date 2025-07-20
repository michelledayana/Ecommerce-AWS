from fastapi import FastAPI
from app.controllers import user_controller
from app.database.connection import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(user_controller.router)

#test3