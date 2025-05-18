import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def improve_article(article: str, keyword: str):
    prompt = (
        "You're an SEO expert. Read the following article and return a short list of 4 to 6 very clear, precise, and actionable suggestions."
        "to improve its SEO score, based on these target keywords: "
        f"{', '.join(keyword)}.\n\n"
        "Article:\n"
        f"{article}\n\n"
        "Format the suggestions as a numbered list with each point being concise and under 20 words." 
        "It should strictly be the pointers (without any heading), and remove all markdown. "
        "Make it look professional by NOT including emojis."
        "All information must be in Indian English ONLY."
        "DO NOT NUMBER THE POINTS."
    )

    model = genai.GenerativeModel("gemini-2.0-flash")  # Correct model name and usage
    response = model.generate_content(prompt)
    return response.text

