from fastapi import FastAPI
from dotenv import load_dotenv
import os

# Load environment variables from dev.env file
load_dotenv("dev.env")

app = FastAPI()

@app.get("/env")
def env():
    return {"message": f"{os.getenv('PASSWORD')} {os.getenv('my-password')}"}

@app.get("/")
def root():
    return {"message": "start"}

@app.get("/hello")
def hello_world():
    return {"message": "Hello"}

@app.get("/abc")
async def abc():
    return {"message": "Hello World"}

