import textstat

def analyze_seo(article: str, keyword: str):
    keyword_count = article.lower().count(keyword.lower()) if keyword else 0
    word_count = len(article.split())
    density = (keyword_count / word_count) * 100 if word_count > 0 else 0

    return {
        "word_count": word_count,
        "keyword_count": keyword_count,
        "keyword_density": round(density, 2),
        "readability": textstat.flesch_reading_ease(article),
        "sentence_count": textstat.sentence_count(article)
    }
