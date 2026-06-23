from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma
from dotenv import load_dotenv 
import os

load_dotenv(override=True)

_embeddings = OpenAIEmbeddings(
    model="openai/text-embedding-3-small",
    api_key=os.getenv("GITHUB_TOKEN"),
    base_url="https://models.github.ai/inference"
)

def get_vectorstore()->Chroma:
    return Chroma(
        persist_directory="./chroma_db",
        embedding_function=_embeddings,
    )