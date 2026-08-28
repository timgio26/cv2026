from agents.assistant import llm
import pickle,faiss
from rag.raglite_retrieve import search_index


def search(question:str,score_threshold=1):
    index = faiss.read_index("rag/index_new.faiss")

    with open("rag/chunks_new.pkl", "rb") as f:
        chunks = pickle.load(f)
    answer = search_index(question=question,index=index,documents=chunks,score_threshold=score_threshold)
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

def llm_create_answer_from_doc(question: str) -> str:

    answers = search(question=question,score_threshold=2)

    for answer in answers:
        doc = answer["document"]

        print(
            f"score={answer['score']:.4f} "
            f"page={doc.metadata.get('page')} "
            f"chars={len(doc.page_content)}"
        )


    context = "\n".join(
        answer['document'].page_content
        for answer in answers
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

CONTEXT:
{context}

QUESTION:
{question}

ANSWER:
    """)
    print(response)

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