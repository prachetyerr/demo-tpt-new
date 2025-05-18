from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from backend.seo import analyze_seo
from backend.ai import improve_article

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
def analyze_article(article: str = Form(...), keyword: str = Form("")):
    seo_results = analyze_seo(article, keyword)
    suggestions = improve_article(article, keyword)
    return {
        "seo": seo_results,
        "ai_suggestions": suggestions
    }
