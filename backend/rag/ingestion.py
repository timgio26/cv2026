from langchain_community.document_loaders import TextLoader,PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from vector_store import get_vectorstore
from langchain_core.documents import Document
from tools import get_url_content
import os

def get_loader(filedir:str):
    ext = filedir.split(".")[-1]
    if ext == "pdf":
        return PyPDFLoader(filedir)
    if ext in ['txt','md','py']:
        return TextLoader(filedir)
    raise ValueError(
        f"Unsupported file type: {ext}"
    )

def store_documents(documents: list[Document]):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=50
    )

    chunks = splitter.split_documents(documents)

    vectorstore= get_vectorstore()
    vectorstore.add_documents(chunks)
    

def load_and_store_vector(filedir:str)->None:
    loader = get_loader(filedir)
    documents = loader.load()
    store_documents(documents=documents)

def load_and_store_vector_string(text:str)->None:
    doc = Document(
        page_content=text,
        metadata={
            "source": "manual_input"
        }
    )
    store_documents(documents=[doc])

if __name__ == "__main__":
    files = os.listdir("./data")
    for file in files:
        load_and_store_vector(f"data/{file}")
    text = get_url_content("https://timotiusgiovandi.vercel.app/")
    load_and_store_vector_string(text=text)
