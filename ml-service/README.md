# Sentiment Analysis - ML Service

FastAPI-powered microservice for text and note sentiment classification.

## 🚀 Features

- **High-Performance REST API**: Built on [FastAPI](https://fastapi.tiangolo.com/) and [Uvicorn](https://www.uvicorn.org/).
- **Sentiment Classification**: Categorizes text into `positive`, `negative`, or `neutral`.
- **Negation Handling**: Smart keyword matching that correctly handles negation phrases (e.g., "not good").
- **CORS Support**: Integrated `CORSMiddleware` to allow direct frontend queries and cross-origin microservice calls.
- **Interactive API Documentation**: Built-in Swagger UI and OpenAPI documentation out of the box.

---

## 🛠️ Tech Stack

- **Python 3.10+**
- **FastAPI** (`fastapi>=0.115.0`)
- **Uvicorn** (`uvicorn[standard]>=0.30.0`)
- **Pydantic** (`pydantic>=2.10.0`)

---

## 📦 Getting Started

### 1. Prerequisites

- Python 3.10 or higher
- `pip` package manager

### 2. Create and Activate Virtual Environment

**Windows (PowerShell):**
```powershell
cd ml-service
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

**macOS / Linux:**
```bash
cd ml-service
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Service

```bash
uvicorn main:app --reload --port 8000
```

The service will start at `http://localhost:8000`.

---

## 📖 API Endpoints

### 1. Health Check
- **URL**: `GET /`
- **Response**:
```json
{
  "status": "ok",
  "message": "ML service running"
}
```

### 2. Sentiment Prediction
- **URL**: `POST /predict`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "text": "The service was really good and helpful!"
}
```
- **Response**:
```json
{
  "text": "The service was really good and helpful!",
  "sentiment": "positive"
}
```

---

## 🧪 Testing with cURL / PowerShell

### cURL:
```bash
curl -X POST "http://localhost:8000/predict" \
     -H "Content-Type: application/json" \
     -d "{\"text\": \"This product is excellent!\"}"
```

### PowerShell:
```powershell
Invoke-RestMethod -Uri "http://localhost:8000/predict" -Method Post -ContentType "application/json" -Body '{"text": "This product is not good"}'
```

### Interactive Documentation:
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 📁 Directory Layout

```
ml-service/
├── main.py             # FastAPI app initialization, routes, and CORS setup
├── model.py            # Sentiment analysis inference logic
├── requirements.txt    # Python dependencies
├── .gitignore          # Python-specific ignore rules
└── README.md           # Service documentation
```
