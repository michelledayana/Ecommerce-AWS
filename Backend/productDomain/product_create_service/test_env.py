import os
from dotenv import load_dotenv

load_dotenv()

print("USER:", os.getenv("POSTGRES_USER"))
print("PASSWORD:", os.getenv("POSTGRES_PASSWORD"))
print("SERVER:", os.getenv("POSTGRES_SERVER"))
print("PORT:", os.getenv("POSTGRES_PORT"))
print("DB:", os.getenv("POSTGRES_DB"))
