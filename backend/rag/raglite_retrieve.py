from fastembed import TextEmbedding
import numpy as np

# Load the embedding model once
embedding_model = TextEmbedding()


def search_index(question, index, documents, k=10):
    """Find the k most relevant documents."""

    # Convert the user's question into an embedding
    query_vector = np.array(
        list(embedding_model.embed([question])),
        dtype=np.float32
    )

    # Search for the closest vectors
    distances, indices = index.search(query_vector, k)

    # Convert vector indices back into document text
    return [documents[i] for i in indices[0]]