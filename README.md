# CV RAG

A local Retrieval-Augmented Generation (RAG) application for querying CVs and other documents.

## Project Structure

```text
cv-rag/
├── frontend/              # Frontend source code
├── backend/               # Flask backend
│   ├── app.py
│   ├── data/              # Input documents for ingestion
│   └── dist/              # Production frontend build
└── README.md
```

## Architecture

* **Frontend** is developed independently in `frontend/`.
* The frontend production build is copied into the Flask backend.
* **Flask** serves the frontend build from the homepage route.
* Documents are stored in `backend/data/`.
* The RAG pipeline ingests `.pdf` and `.txt` files locally.

## Development Workflow

### 1. Develop the frontend

Work normally inside the `frontend/` directory.

```bash
cd frontend
npm install
npm run dev
```

When the frontend is finished, create a production build:

```bash
npm run build
```

Copy the generated build output into the backend static directory:

```text
frontend/dist/ → backend/dist/
```

## Backend

Install the Python dependencies and start the Flask application:

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Flask should serve the frontend from the homepage:

```text
GET /
```

Conceptually:

```python
@app.route("/")
def index():
    return send_from_directory("static", "index.html")
```

If the frontend uses client-side routing, add a fallback route so frontend routes continue to work after refreshing the page.

## Document Ingestion

Place supported documents inside:

```text
backend/data/
```

Supported input formats:

* `.pdf`
* `.txt`

Run ingestion locally with:

```bash
cd backend
python app.py --ingest
```

The ingestion process should:

1. Scan the `data/` directory.
2. Load all PDF and TXT files.
3. Extract and normalize text.
4. Split documents into chunks.
5. Generate embeddings locally when possible.
6. Store the chunks and embeddings in the configured vector database.
7. Make the documents available to the RAG query pipeline.