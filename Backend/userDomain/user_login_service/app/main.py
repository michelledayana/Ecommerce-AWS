from fastapi import FastAPI
from app.routes.login import router as login_router

app = FastAPI(title="User Login Service")

app.include_router(login_router, prefix="/login")

##Test5
