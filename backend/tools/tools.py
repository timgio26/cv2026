from rag.vector_store import get_vectorstore
from agents.assistant import llm

def get_answer_rag(question:str)->str:
    vectorstore = get_vectorstore()
    retriever = vectorstore.as_retriever(search_kwargs={"k": 10})

    # results = retriever.invoke("What skills does Tim know?")

    # question = "What backend technologies does Tim know?"

    docs = retriever.invoke(question)

    context = "\n".join([d.page_content for d in docs])

    response = llm.invoke(f"""
    Answer the question using the context only when needed.
    Do not mention or refer to the context.
    Respond naturally and directly.


    Context:
    {context}

    Question:
    {question}
    """)
    return response.content