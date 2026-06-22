from langchain_ollama import OllamaEmbeddings
from langchain_chroma import Chroma

_embeddings = OllamaEmbeddings(
    model="all-minilm:latest"
)
def get_vectorstore()->Chroma:

    return Chroma(
        persist_directory="./chroma_db",
        embedding_function=_embeddings,
    )