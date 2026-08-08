# from langchain_openai import ChatOpenAI
from langchain_openrouter import ChatOpenRouter
from dotenv import load_dotenv 
import os

load_dotenv(override=True)

# llm = ChatOpenAI(
#     model="openai/gpt-4.1",
#     api_key=os.getenv("GITHUB_TOKEN"),
#     # base_url = "https://models.github.ai/inference"
# )

llm = ChatOpenRouter(
    api_key=os.getenv("OPENROUTER_TOKEN"),
    model="openrouter/free",
    temperature=0.5,
    max_tokens=1024,
    max_retries=2,
    base_url = "https://openrouter.ai/api/v1"
    # other params...
)