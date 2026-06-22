import { useState } from "react";
import { useGetRagAnswer } from "../utils/Queries";

export function RagChat() {
  const [conv, setConv] = useState([
    {
      role: "agent",
      msg: "Hello! I’m your AI assistant. Ask me anything about Timotius’ work,projects, or research.",
    },
  ]);
  const [question, setQuestion] = useState<string | undefined>("");
  const { mutate: sendQuestion, isPending } = useGetRagAnswer();

  function handleSend() {
    if (!question?.trim()) return;
    setConv((prev) => [...prev, { role: "user", msg: question }]);
    setQuestion("");
    sendQuestion(
      { question },
      {
        onSuccess: (data) => {
          setConv((prev) => [...prev, { role: "agent", msg: data }]);
        },
      },
    );
  }
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm h-125 flex flex-col overflow-hidden">
      {/* MESSAGES AREA */}
      <div id="chat-messages" className="chat-scrollbar flex-1 overflow-y-auto p-6 space-y-4">
        {/* AI MESSAGE */}
        {conv.map((each, index) => {
          if (each.role === "agent") {
            return (
              <div className="flex" key={index}>
                <div className="max-w-[80%] bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-gray-200">
                  {each.msg}
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex justify-end" key={index}>
                <div className="max-w-[80%] bg-amber-500/20 border border-amber-500/30 px-4 py-3 rounded-xl text-amber-200">
                  {each.msg}
                </div>
              </div>
            );
          }
        })}
        {isPending && (
          <div className="flex">
            <div className="max-w-[80%] bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-gray-400">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* INPUT BAR */}
      <div className="border-t border-white/10 p-4 flex items-center gap-3 bg-black/20">
        <input
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/20"
        />
        <button
          className="px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-gray-200 hover:bg-white/20 transition-all cursor-pointer"
          onClick={handleSend}
          disabled={isPending}
        >
          Send
        </button>
      </div>
    </div>
  );
}
