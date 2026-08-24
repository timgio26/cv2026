from flask import Flask, request, jsonify,send_from_directory
from rag.tools import ingest
from tools.tools import llm_create_answer
import argparse

app = Flask(__name__,    
            static_folder="dist",
            static_url_path="")

@app.route("/")
def index():
    return send_from_directory("dist", "index.html")


@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.get_json()
    # print(data)
    question = data.get("question")
    if not question:
        return jsonify({
            "error": "question is required"
        }), 400
    answer = llm_create_answer(question)
    return jsonify({
        "question": question,
        "answer": answer
    })



if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--ingest",
        action="store_true",
        help="Build the FAISS index from documents."
    )

    args = parser.parse_args()

    if args.ingest:
        ingest()
    else:
        app.run(debug=True)