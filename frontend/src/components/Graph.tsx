import CytoscapeComponent from "react-cytoscapejs";
const elements = [
  // ===========================
  // Person
  // ===========================
  {
    data: {
      id: "tim",
      label: "Timotius Giovandi",
      type: "Person",
    },
  },

  // ===========================
  // Places
  // ===========================
  {
    data: {
      id: "bandung",
      label: "Bandung",
      type: "Location",
    },
  },
  {
    data: {
      id: "surabaya",
      label: "Surabaya",
      type: "Location",
    },
  },
  {
    data: {
      id: "gdansk",
      label: "Gdansk",
      type: "Location",
    },
  },

  // ===========================
  // Organizations
  // ===========================
  {
    data: {
      id: "its",
      label: "Institut Teknologi Sepuluh Nopember",
      type: "Organization",
    },
  },
  {
    data: {
      id: "ug",
      label: "University of Gdansk",
      type: "Organization",
    },
  },

  // ===========================
  // Education
  // ===========================
  {
    data: {
      id: "chemical",
      label: "Chemical Engineering",
      type: "Degree",
    },
  },
  {
    data: {
      id: "business",
      label: "Business Informatics",
      type: "Degree",
    },
  },

  // ===========================
  // Jobs
  // ===========================
  {
    data: {
      id: "water",
      label: "Water Treatment Engineer",
      type: "Job",
    },
  },
  {
    data: {
      id: "analyst",
      label: "Ecommerce Data Analyst",
      type: "Job",
    },
  },

  // ===========================
  // Projects
  // ===========================
  {
    data: {
      id: "cdp",
      label: "Customer Data Platform",
      type: "Project",
    },
  },
  {
    data: {
      id: "thesis",
      label: "Master Thesis",
      type: "Project",
    },
  },

  // ===========================
  // Skills
  // ===========================
  { data: { id: "python", label: "Python", type: "Skill" } },
  { data: { id: "react", label: "React", type: "Skill" } },
  { data: { id: "integration", label: "Data Integration", type: "Skill" } },
  { data: { id: "analytics", label: "Data Analytics", type: "Skill" } },
  {
    data: { id: "segmentation", label: "Customer Segmentation", type: "Skill" },
  },

  // ===========================
  // Languages
  // ===========================
  { data: { id: "indo", label: "Indonesian", type: "Language" } },
  { data: { id: "eng", label: "English", type: "Language" } },
  { data: { id: "ger", label: "German", type: "Language" } },
  { data: { id: "fre", label: "French", type: "Language" } },
  { data: { id: "spa", label: "Spanish", type: "Language" } },

  // ===========================
  // Research
  // ===========================
  { data: { id: "ml", label: "Machine Learning", type: "Research" } },
  { data: { id: "mllm", label: "MLLM", type: "Research" } },
  { data: { id: "slm", label: "Small Language Models", type: "Research" } },
  { data: { id: "prompt", label: "Prompt Engineering", type: "Research" } },
  { data: { id: "kg", label: "Knowledge Graph", type: "Research" } },
  { data: { id: "vector", label: "Vector Database", type: "Research" } },

  // ===========================
  // Relationships
  // ===========================

  { data: { source: "tim", target: "bandung", label: "BORN_IN" } },

  { data: { source: "tim", target: "indo", label: "SPEAKS" } },
  { data: { source: "tim", target: "eng", label: "SPEAKS" } },
  { data: { source: "tim", target: "ger", label: "LEARNING" } },
  { data: { source: "tim", target: "fre", label: "LEARNING" } },
  { data: { source: "tim", target: "spa", label: "LEARNING" } },

  { data: { source: "tim", target: "chemical", label: "STUDIED" } },
  { data: { source: "chemical", target: "its", label: "AT" } },
  { data: { source: "its", target: "surabaya", label: "LOCATED_IN" } },

  { data: { source: "tim", target: "water", label: "WORKED_AS" } },
  { data: { source: "water", target: "cdp", label: "DEVELOPED" } },
  { data: { source: "cdp", target: "python", label: "USES" } },
  { data: { source: "cdp", target: "react", label: "USES" } },

  { data: { source: "tim", target: "analyst", label: "WORKED_AS" } },
  { data: { source: "analyst", target: "integration", label: "REQUIRES" } },
  { data: { source: "analyst", target: "analytics", label: "REQUIRES" } },
  { data: { source: "analyst", target: "segmentation", label: "REQUIRES" } },

  { data: { source: "tim", target: "business", label: "STUDYING" } },
  { data: { source: "business", target: "ug", label: "AT" } },
  { data: { source: "ug", target: "gdansk", label: "LOCATED_IN" } },

  { data: { source: "tim", target: "thesis", label: "WRITING" } },
  { data: { source: "thesis", target: "mllm", label: "USES" } },
  { data: { source: "thesis", target: "slm", label: "STUDIES" } },
  { data: { source: "thesis", target: "prompt", label: "STUDIES" } },

  { data: { source: "tim", target: "ml", label: "INTERESTED_IN" } },
  { data: { source: "tim", target: "kg", label: "INTERESTED_IN" } },
  { data: { source: "tim", target: "vector", label: "INTERESTED_IN" } },
];

export function Graph() {
  return (
    <div className="h-150 w-full rounded-lg border border-zinc-800 bg-zinc-950">
      <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "100%" }}
        cy={(cy) => {cy.minZoom(0.8)}}
        layout={{
            name: "cose",
            // directed: true,
            spacingFactor: 1.8,
            padding: 40
        }}
stylesheet={[
  {
    selector: "node",
    style: {
      label: "data(label)",
      color: "#e4e4e7",
      "font-size": 11,
      "text-wrap": "wrap",
      // "text-max-width": 100,

      width: 45,
      height: 45,

      "background-color": "#3f3f46",
      "border-width": 1,
      "border-color": "#71717a",
    },
  },

  // Main entity
  {
    selector: 'node[type="Person"]',
    style: {
      "background-color": "#fafafa",
      color: "#fee685",
      width: 65,
      height: 65,
      "border-width": 2,
      "border-color": "#ffffff",
      "font-weight": "bold",
    },
  },

  // Organizations
  {
    selector: 'node[type="Organization"]',
    style: {
      "background-color": "#52525b",
      "border-color": "#a1a1aa",
    },
  },

  // Jobs
  {
    selector: 'node[type="Job"]',
    style: {
      "background-color": "#3f3f46",
    },
  },

  // Education
  {
    selector: 'node[type="Degree"]',
    style: {
      "background-color": "#27272a",
      "border-color": "#a1a1aa",
    },
  },

  // Projects
  {
    selector: 'node[type="Project"]',
    style: {
      "background-color": "#18181b",
      "border-color": "#71717a",
    },
  },

  // Skills
  {
    selector: 'node[type="Skill"]',
    style: {
      "background-color": "#52525b",
    },
  },

  // Research topics
  {
    selector: 'node[type="Research"]',
    style: {
      "background-color": "#27272a",
      "border-color": "#d4d4d8",
    },
  },

  // Languages
  {
    selector: 'node[type="Language"]',
    style: {
      "background-color": "#71717a",
    },
  },

  // Locations
  {
    selector: 'node[type="Location"]',
    style: {
      "background-color": "#404040",
    },
  },

  // Relationships
  {
    selector: "edge",
    style: {
      label: "data(label)",

      color: "#a1a1aa",
      "font-size": 8,

      width: 1.5,

      "line-color": "#52525b",
      "target-arrow-color": "#52525b",
      "target-arrow-shape": "triangle",

      "curve-style": "bezier",
    },
  },

  // Hover/selection
  {
    selector: ":selected",
    style: {
      "background-color": "#ffffff",
      color: "#18181b",
      "line-color": "#ffffff",
      "target-arrow-color": "#ffffff",
    },
  },
]}
      />
    </div>
  );
}
