from langchain_openai import ChatOpenAI
from dotenv import load_dotenv 
import os

load_dotenv(override=True)

llm = ChatOpenAI(
    model="openai/gpt-4.1",
    api_key=os.getenv("GITHUB_TOKEN"),
    base_url = "https://models.github.ai/inference"
)
