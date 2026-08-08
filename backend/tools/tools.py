from agents.assistant import llm
import pickle,faiss
from rag.raglite_retrieve import search_index


def search(question:str):
    index = faiss.read_index("rag/index.faiss")

    with open("rag/chunks.pkl", "rb") as f:
        chunks = pickle.load(f)
    answer = search_index(question=question,index=index,documents=chunks)
    return answer

def llm_create_answer(question:str):

    answers = search(question=question)
    context = "\n".join(i for i in answers)

    response = llm.invoke(f"""
    Answer the question using the context only when needed.
    Do not mention or refer to the context.
    Respond naturally, short, and directly.


    Context:
    {context}

    Question:
    {question}
    """)
    return response.content

# def get_answer_rag(question:str)->str:
#     vectorstore = get_vectorstore()
#     retriever = vectorstore.as_retriever(search_kwargs={"k": 10})

#     # results = retriever.invoke("What skills does Tim know?")

#     # question = "What backend technologies does Tim know?"

#     docs = retriever.invoke(question)

#     context = "\n".join([d.page_content for d in docs])

#     response = llm.invoke(f"""
#     Answer the question using the context only when needed.
#     Do not mention or refer to the context.
#     Respond naturally and directly.


#     Context:
#     {context}

#     Question:
#     {question}
#     """)
#     return response.content