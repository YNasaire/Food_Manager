import os


class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://postgres:NNMINDE12;@localhost:5432/python_food_manager_db",
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False