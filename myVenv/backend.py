import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from PyPDF2 import PdfReader

# Load .env file
load_dotenv()

app = Flask(__name__)
CORS(app)


# Gemini API Key
API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API_KEY}"

@app.route("/analyze", methods=["POST"])
def analyze_resume():
    # Check PDF file
    if "resume" not in request.files:
        return jsonify({"error": "Resume file missing"}), 400
    resume_file = request.files["resume"]

    # Convert PDF to text
    pdf_reader = PdfReader(resume_file)
    resume_text = ""
    for page in pdf_reader.pages:
        resume_text += page.extract_text() + "\n"

    # Get Job Description
    job_desc = request.form.get("job_desc", "")
    if not job_desc.strip():
        return jsonify({"error": "Job Description missing"}), 400

    # AI Prompt
    prompt = f"""
    Compare the following resume with the given job description.
    1. Give a compatibility score (0-100).
    2. Suggest missing keywords from resume.
    3. Suggest improvements in layout or wording.

    Resume:
    {resume_text}

    Job Description:
    {job_desc}
    """

    headers = {"Content-Type": "application/json"}
    payload = {"contents": [{"parts": [{"text": prompt}]}]}

    response = requests.post(GEMINI_URL, headers=headers, json=payload)

    if response.status_code != 200:
        return jsonify({"error": "Gemini API request failed please try again! ", "details": response.text}), 500

    result = response.json()
    output_text = result["candidates"][0]["content"]["parts"][0]["text"]

    return jsonify({"analysis": output_text})


# ✅ New Route for Cover Letter
@app.route("/cover-letter", methods=["POST"])
def generate_cover_letter():
    job_desc = request.form.get("job_desc", "")
    if not job_desc.strip():
        return jsonify({"error": "Job Description missing"}), 400

    prompt = f"""
    Write a professional and tailored Cover Letter for the following Job Description. 
    Make sure it is formal, concise, and highlights the applicant’s enthusiasm and suitability.

    Job Description:
    {job_desc}
    """

    headers = {"Content-Type": "application/json"}
    payload = {"contents": [{"parts": [{"text": prompt}]}]}

    response = requests.post(GEMINI_URL, headers=headers, json=payload)

    if response.status_code != 200:
        return jsonify({"error": "Gemini API request failed please try again! ", "details": response.text}), 500

    result = response.json()
    output_text = result["candidates"][0]["content"]["parts"][0]["text"]

    return jsonify({"cover_letter": output_text})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
