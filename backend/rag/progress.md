Document Loading

| Level                | Approach                      | What it does                                                          | Main limitation                           |
| -------------------- | ----------------------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| **1 — Beginner**     | Basic extraction              | PDF/TXT → plain `str`                                                 | Loses metadata, structure, images, tables |
| **2 — Basic+**       | Multi-format loading          | PDF, TXT, DOCX, MD, HTML, etc.                                        | Still mostly treats content as text       |
| **3 — Intermediate** | Structured `Document` objects | Content + metadata such as source/page/type                           | Limited understanding of layout           |
| **4 — Advanced**     | Layout-aware loading          | Detects headings, paragraphs, tables, images, figures, etc.           | More complex processing                   |
| **5 — Expert**       | Multimodal ingestion          | Independently handles text, images, tables, charts, audio/video, etc. | Complex models and infrastructure         |


Document Chunking

| Level                | Approach                  | What it does                                   | Main limitation                   |
| -------------------- | ------------------------- | ---------------------------------------------- | --------------------------------- |
| **1 — Beginner**     | Fixed character chunks    | Split every N characters with overlap          | Can cut sentences/ideas           |
| **2 — Basic+**       | Paragraph-aware           | Splits around paragraphs                       | Paragraphs can still be too large |
| **3 — Intermediate** | Recursive structure-aware | Paragraph → line → sentence → word → character | Still primarily size-based        |
| **4 — Advanced**     | Token + structure-aware   | Respects document structure and token limits   | More implementation complexity    |
| **5 — Expert**       | Semantic / hierarchical   | Detects topic changes; parent/child chunks     | More expensive and complex        |


currently both lv 3


RAG retrieval

| Level                | Retrieval approach              | How it works                                                                           | Main limitation                               |
| -------------------- | ------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------- |
| **1 — Beginner**     | Basic vector search             | Embed query → FAISS → top-K nearest chunks                                             | No relevance filtering or ranking improvement |
| **2 — Basic+**       | Similarity search + threshold   | Retrieve top-K, then remove results below a similarity threshold                       | Threshold can be difficult to tune            |
| **3 — Intermediate** | Hybrid / filtered retrieval     | Combine vector search with metadata, keyword search, or filters                        | More components to manage                     |
| **4 — Advanced**     | Reranking                       | Retrieve many candidates → reranker scores them → return best results                  | Additional model and compute cost             |
| **5 — Expert**       | Multi-stage / agentic retrieval | Query rewriting → multiple searches → hybrid retrieval → reranking → context selection | Complex, slower, harder to debug              |


| Level                | Approach                          | What it does                                                                              | Main limitation                                 |
| -------------------- | --------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **1 — Beginner**     | Basic instruction + context       | Tell LLM to answer using retrieved context                                                | Can hallucinate or misuse context               |
| **2 — Basic+**       | Explicit grounding rules          | Define when to use context, what to do when information is missing                        | Still relatively generic                        |
| **3 — Intermediate** | Structured prompt                 | Separate role, instructions, context, question, and output requirements                   | More prompt design required                     |
| **4 — Advanced**     | Grounded + constrained generation | Explicitly handle conflicts, uncertainty, relevance, verbosity, and sources               | More complex behavior to tune                   |
| **5 — Expert**       | Dynamic/context-aware prompting   | Prompt changes based on query type, retrieval quality, metadata, conversation state, etc. | Significant engineering and evaluation required |


RAG architecture

| Level                  | Architecture                | Typical flow                                                           | Main capability              |
| ---------------------- | --------------------------- | ---------------------------------------------------------------------- | ---------------------------- |
| **1 — Basic RAG**      | Linear                      | Load → Chunk → Embed → Retrieve → Prompt → LLM                         | Basic question answering     |
| **2 — Improved RAG**   | Linear + filtering          | Query → Retrieve → Filter/threshold → LLM                              | Better relevance             |
| **3 — Advanced RAG**   | Multi-stage                 | Query → Hybrid retrieval → Rerank → Context → LLM                      | Higher retrieval precision   |
| **4 — Corrective RAG** | Retrieval + validation loop | Retrieve → Evaluate → Correct/retrieve again → LLM                     | Detects bad retrieval        |
| **5 — Agentic RAG**    | Dynamic reasoning loop      | Understand → Plan → Search → Evaluate → Search again → Answer → Verify | Adaptive multi-step research |
