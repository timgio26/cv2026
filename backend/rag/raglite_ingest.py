from pathlib import Path
from pypdf import PdfReader
from fastembed import TextEmbedding
import numpy as np
import faiss
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document


# Load the embedding model once
embedding_model = TextEmbedding()

def read_txt(file_path: str) -> str:
    """Read a plain text file."""
    return Path(file_path).read_text(encoding="utf-8")

def read_txt_to_doc(file_path: str) -> Document:
    """Read a plain text file and return a Document."""

    path = Path(file_path)

    text = path.read_text(encoding="utf-8")

    return Document(
        page_content=text,
        metadata={
            "source": str(path),
            "file_name": path.name,
            "file_type": "txt",
        },
    )

def read_pdf(file_path: str) -> str:
    """Extract text from all pages of a PDF."""
    reader = PdfReader(file_path)

    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"

    return text

def read_pdf_to_docs(file_path: str) -> list[Document]:
    """Extract text from each PDF page as a separate Document."""

    path = Path(file_path)
    reader = PdfReader(file_path)

    documents: list[Document] = []

    for page_number, page in enumerate(reader.pages, start=1):
        page_text = page.extract_text()

        if page_text:
            documents.append(
                Document(
                    page_content=page_text,
                    metadata={
                        "source": str(path),
                        "file_name": path.name,
                        "file_type": "pdf",
                        "page": page_number,
                    },
                )
            )

    return documents


def load_documents_txt(folder: str):
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

def load_documents(folder: str) -> list[Document]:
    """
    Read all .txt and .pdf files from a folder.

    TXT files become one Document.
    PDF files become one Document per page.
    """

    documents: list[Document] = []

    for path in Path(folder).glob("*"):

        if path.suffix.lower() == ".txt":
            document = read_txt_to_doc(str(path))
            documents.append(document)

        elif path.suffix.lower() == ".pdf":
            pdf_documents = read_pdf_to_docs(str(path))
            documents.extend(pdf_documents)

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

def chunk_documents(
    documents: list[Document],
    chunk_size: int = 500,
    chunk_overlap: int = 100,
) -> list[Document]:
    """
    Split documents recursively while respecting natural text boundaries.
    """

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=[
            "\n\n",
            "\n",
            ". ",
            "! ",
            "? ",
            "; ",
            " ",
            "",
        ],
    )

    chunks: list[Document] = []

    # for document in documents:
    #     chunks.extend(splitter.split_text(document))
    chunks.extend(splitter.split_documents(documents=documents))

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
    faiss.write_index(index, "rag/index_new.faiss")

    # return index

def build_index_from_list_of_document(chunks: list[Document]) -> None:
    """Convert document chunks into vectors and store them in a FAISS index."""

    texts = [
        chunk.page_content
        for chunk in chunks
    ]

    vectors = np.array(
        list(embedding_model.embed(texts)),
        dtype=np.float32,
    )

    dimension = vectors.shape[1]

    index = faiss.IndexFlatL2(dimension)

    index.add(vectors)

    faiss.write_index(
        index,
        "rag/index_new.faiss",
    )