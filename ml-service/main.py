import logging
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import predict_sentiment

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Sentiment Analysis ML Service",
    description="FastAPI microservice for predicting text sentiment",
    version="1.0.0"
)

# Allow CORS origins from environment variable or default to frontend dev server
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestData(BaseModel):
    text: str

@app.get("/")
def home():
    logger.info("Health check endpoint accessed")
    return {"status": "ok", "message": "ML service running"}

@app.post("/predict")
def predict(data: RequestData):
    try:
        logger.info(f"Predicting sentiment for text of length {len(data.text)}")
        result = predict_sentiment(data.text)
        logger.info(f"Prediction successful: {result}")
        return {"text": data.text, "sentiment": result}
    except Exception as e:
        logger.error(f"Error predicting sentiment: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error during prediction")