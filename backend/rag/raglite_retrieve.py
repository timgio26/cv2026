from fastembed import TextEmbedding
import numpy as np

# Load the embedding model once
embedding_model = TextEmbedding()


def search_index_1(question, index, documents, k=10):
    """Find the k most relevant documents."""
    # this is most basic level 1
    # 1. Convert question into an embedding
    query_vector = np.array(
        list(embedding_model.embed([question])),
        dtype=np.float32
    )

    # 2. Search the vector index
    distances, indices = index.search(query_vector, k)

    # 3. Convert vector indices back into document text
    return [documents[i] for i in indices[0]]

def search_index(question, index, documents, k=10,score_threshold=None,max_result=5):
    """Find the k most relevant documents."""
    # this is level 2
    # 1. Convert question into an embedding
    query_vector = np.array(
        list(embedding_model.embed([question])),
        dtype=np.float32
    )

    # 2. Search the vector index
    distances, indices = index.search(query_vector, k)

    # 3. Build structured results
    results = []

    for distance, index_id in zip(distances[0], indices[0]):

        # Skip invalid indices
        if index_id < 0:
            continue

        # Optional relevance filtering
        if score_threshold is not None:
            if distance > score_threshold:
                continue

        results.append({
            "document": documents[index_id],
            "score": float(distance),
            "index": int(index_id),
        })


    # 3. Convert vector indices back into document text
    return results[:max_result]
