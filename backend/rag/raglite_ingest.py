from pathlib import Path
from pypdf import PdfReader
from fastembed import TextEmbedding
import numpy as np
import faiss


# Load the embedding model once
embedding_model = TextEmbedding()

def read_txt(file_path: str) -> str:
    """Read a plain text file."""
    return Path(file_path).read_text(encoding="utf-8")

def read_pdf(file_path: str) -> str:
    """Extract text from all pages of a PDF."""
    reader = PdfReader(file_path)

    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"

    return text


def load_documents(folder: str):
    """
    Read all .txt and .pdf files from a folder.
    Returns a list of document strings.
    """
    documents = []

    for path in Path(folder).glob("*"):
        if path.suffix.lower() == ".txt":
            documents.append(read_txt(str(path)))

        elif path.suffix.lower() == ".pdf":
            documents.append(read_pdf(str(path)))

    return documents

def chunk_text(
    text: str,
    chunk_size: int = 500,
    overlap: int = 100
):
    """
    Split text into overlapping chunks.

    chunk_size = maximum characters per chunk
    overlap    = characters shared between consecutive chunks
    """

    chunks = []
    start = 0

    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])

        # Move forward but keep some overlap
        start += chunk_size - overlap

    return chunks


def build_index(documents):
    """Convert documents into vectors and store them in a FAISS index."""

    # Embed every document
    vectors = np.array(
        list(embedding_model.embed(documents)),
        dtype=np.float32
    )

    # Create a FAISS index
    dimension = vectors.shape[1]
    index = faiss.IndexFlatL2(dimension)

    # Store the document vectors
    index.add(vectors)
    faiss.write_index(index, "index.faiss")

    # return index