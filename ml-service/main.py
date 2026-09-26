from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import predict_sentiment

app = FastAPI(
    title="Sentiment Analysis ML Service",
    description="FastAPI microservice for predicting text sentiment",
    version="1.0.0"
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestData(BaseModel):
    text: str

@app.get("/")
def home():
    return {"status": "ok", "message": "ML service running"}

@app.post("/predict")
def predict(data: RequestData):
    result = predict_sentiment(data.text)
    return {"text": data.text, "sentiment": result}