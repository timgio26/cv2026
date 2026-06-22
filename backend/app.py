from flask import Flask, request, jsonify,send_from_directory
from tools.tools import get_answer_rag

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
    answer = get_answer_rag(question)
    return jsonify({
        "question": question,
        "answer": answer
    })



if __name__ == "__main__":
    app.run(debug=True)