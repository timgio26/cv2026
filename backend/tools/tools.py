from agents.assistant import llm
import pickle,faiss
from rag.raglite_retrieve import search_index


def search(question:str):
    index = faiss.read_index("rag/index_new.faiss")

    with open("rag/chunks_new.pkl", "rb") as f:
        chunks = pickle.load(f)
    answer = search_index(question=question,index=index,documents=chunks)
    return answer

def llm_create_answer(question:str):

    answers = search(question=question)
    print(answers)
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

def llm_create_answer_from_doc(question: str) -> str:

    answers = search(question=question)

    context = "\n".join(
        document.page_content
        for document in answers
    )

    response = llm.invoke(f"""
ROLE:
You are the assistant and representative of Timotius Giovandi.

INSTRUCTIONS:
- Answer the user's question directly.
- Use the provided context when relevant.
- Do not invent information.
- If the context is insufficient, say so.
- Do not mention the context or retrieval process.
- Keep the answer concise.

Rules:

1. Prefer information supported by the retrieved documents.
2. Do not fabricate facts.
3. If documents conflict, acknowledge the uncertainty.
4. If the retrieved information is irrelevant, do not force it
   into the answer.
5. Answer only what the user asked.
6. Keep the response concise.
7. Do not mention internal retrieval, documents, context,
   embeddings, or the RAG system.

CONTEXT:
{context}

QUESTION:
{question}

ANSWER:
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