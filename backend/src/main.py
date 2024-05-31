from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "start"}

@app.get("/hello")
def hello_world():
    return {"message": "Hello"}

@app.get("/abc")
async def abc():
    return {"message": "Hello World"}

