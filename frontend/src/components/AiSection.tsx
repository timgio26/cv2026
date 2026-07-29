import { useState } from "react";
import {Section} from "./Section"
import {RagChat} from "./RagChat"
import { Graph } from "./Graph";

export function AISection() {
  const [showGraph, setShowGraph] = useState(false);

  return (
    <Section title="Chat With My AI Agent">
      <RagChat />

      <button
        onClick={() => setShowGraph(!showGraph)}
        className="
          mt-6
          px-4 py-2
          rounded-lg
          border border-white/20
          text-sm text-gray-300
          hover:bg-white/10
          transition
        "
      >
        {showGraph ? "Hide Knowledge Graph" : "Show Knowledge Graph"}
      </button>

      {showGraph && (
        // <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
          <Graph />
        // </div>
      )}
    </Section>
  );
}