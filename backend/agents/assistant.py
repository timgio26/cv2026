from langchain_ollama import ChatOllama
from dotenv import load_dotenv 
import os

load_dotenv()

llm = ChatOllama(
    model="gemma4:31b-cloud",
    base_url="https://ollama.com",
    client_kwargs={
        "headers": {
            "Authorization": f"Bearer {os.getenv("OLLAMA_API_KEY")}"
        }
    }
)