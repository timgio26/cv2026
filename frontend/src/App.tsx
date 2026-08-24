import "./App.css";
import { Section } from "./components/Section";
import { ScrollHorizontalIndicator } from "./components/ScrollHorizontalIndicator";
import { HeroSection } from "./sections/HeroSection";
import { lazy, Suspense } from "react";

function App() {
  const AISection = lazy(() => import("./components/AiSection"));
  const ProjectSection = lazy(() => import("./sections/ProjectSection"));
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16 flex flex-col gap-10">
      <ScrollHorizontalIndicator />
      {/* HERO SECTION */}
      <HeroSection />
      <Suspense fallback={<div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">Loading AI...</div>}>
        <AISection />
      </Suspense>
      {/* <AISection /> */}

      {/* EXPERIENCE SECTION */}
      <Section title="Experience">
        <div className="flex flex-col bg-white/5 border border-white/10 px-5 py-5 rounded-xl backdrop-blur-sm">
          <span className="text-xl font-medium">
            Ecommerce Analyst & Product Manager
          </span>
          <span className="text-gray-400 text-sm">Jan 2020 - Sep 2024</span>
          <span className="text-gray-300 text-sm mb-3">
            PT Nutrifood Indonesia
          </span>
          <span className="text-gray-400 leading-relaxed">
            Consolidate e-commerce sales data from multiple sources to create
            integrated datasets for decision making. Conduct exploration,
            cleaning, and feature engineering to support promotion and marketing
            strategies. Prepare presentation decks for management and develop
            internal web applications to support business processes.
          </span>
        </div>

        <div className="flex flex-col bg-white/5 border border-white/10 px-5 py-5 rounded-xl backdrop-blur-sm">
          <span className="text-xl font-medium">Water Treatment Engineer</span>
          <span className="text-gray-400 text-sm">Aug 2019 - Dec 2019</span>
          <span className="text-gray-300 text-sm mb-3">Setia Purindo</span>
          <span className="text-gray-400 leading-relaxed">
            Involved in end-to-end water treatment processes, including sample
            collection, laboratory testing, system planning, and chemical medium
            selection. Conducted periodic assessments to ensure product quality
            and customer satisfaction.
          </span>
        </div>
      </Section>

      {/* EDUCATION SECTION */}
      <Section title="Education">
        {/* MASTER DEGREE */}
        <div className="flex flex-col bg-white/5 border border-white/10 px-5 py-5 rounded-xl backdrop-blur-sm">
          <span className="text-xl font-medium">Business Informatics</span>
          <span className="text-gray-400 text-sm">
            Master | GPA 4.58/5.00 | 2024 - 2026
          </span>
          <span className="text-gray-300 text-sm mb-3">
            University of Gdańsk, Poland
          </span>
          <span className="text-gray-400 leading-relaxed">
            Thesis: “Assessing Visual Literacy of Multimodal Large Language
            Models Using Mini‑VLAT: The Influence of Model Size and Prompting
            Techniques”
          </span>
        </div>

        {/* BACHELOR DEGREE */}
        <div className="flex flex-col bg-white/5 border border-white/10 px-5 py-5 rounded-xl backdrop-blur-sm">
          <span className="text-xl font-medium">Chemical Engineering</span>
          <span className="text-gray-400 text-sm">
            Bachelor | GPA 3.66/4.00 | 2015 - 2019
          </span>
          <span className="text-gray-300 text-sm mb-3">
            Institut Teknologi Sepuluh Nopember Surabaya, Indonesia
          </span>

          <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-1">
            <li>
              Chem-E-Car team competitor in Indonesia, Australia, and the United
              States
            </li>
            <li>
              Process engineer intern at ammonia fertilizer plant PT Pupuk
              Sriwidjaja
            </li>
            <li>Analytical chemistry laboratory assistant</li>
          </ul>
        </div>
      </Section>

      <div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">
        <span className="text-2xl font-semibold tracking-wide border-b border-white/10 pb-2">
          Technology Stack
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* DATA ENGINEERING & ANALYTICS */}
          <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-5 backdrop-blur-sm">
            <span className="text-lg font-medium">
              Data Engineering & Analytics
            </span>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1 leading-relaxed">
              <li>Python, SQL</li>
              <li>pandas, NumPy, scikit‑learn, TensorFlow</li>
              <li>Airflow, dbt (Data Build Tool)</li>
              <li>Power BI</li>
            </ul>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-5 backdrop-blur-sm">
            <span className="text-lg font-medium">Web Development</span>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1 leading-relaxed">
              <li>Python, C#, TypeScript</li>
              <li>Flask, .NET, React</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">Loading Projects...</div>}>
      <ProjectSection/>
      </Suspense>

      <div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">
        <span className="text-2xl font-semibold tracking-wide border-b border-white/10 pb-2">
          Awards & Achievements
        </span>

        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-6 backdrop-blur-sm">
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>
              <span className="font-semibold text-white">2016: </span>
              Winner — Chem-E-Car Competition, Chemeca Conference, Adelaide,
              Australia
            </li>

            <li>
              <span className="font-semibold text-white">2017: </span>
              Winner — Chem-E-Car Competition, AIChE Conference, Minnesota,
              United States
            </li>

            <li>
              <span className="font-semibold text-white">2018: </span>
              Winner — Chem-E-Car Competition, ICECC Chernival, Surabaya,
              Indonesia
            </li>

            <li>
              <span className="font-semibold text-white">2018: </span>
              Judges’ Choice Winner — AIChE Global Undergraduate Video
              Competition
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">
        {/* SECTION TITLE */}
        <span className="text-2xl font-semibold tracking-wide border-b border-white/10 pb-2">
          Research Publication
        </span>

        {/* PUBLICATION CARD */}
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-6 backdrop-blur-sm">
          <span className="text-lg font-medium text-white">
            Synthesis of Reduced Graphene Oxide/MnO₂ Nanocomposites for Oxygen
            Reduction Reaction Catalyst
          </span>

          <span className="text-gray-400 text-sm mt-2 block leading-relaxed">
            Sarjani, V. S. Y., Witri, P. S., Giovandi, T., Widiyastuti, W.,
            Rois, M. F., & Setyawan, H. (2020). Published in{" "}
            <span className="italic text-gray-300">
              AIP Conference Proceedings
            </span>
            , Vol. 2219, No. 1, p. 080004. AIP Publishing LLC.
          </span>

          {/* OPTIONAL: LINK BUTTON */}
          {/* If you have a DOI or link, you can enable this */}
          {/* 
    <button 
      onClick={() => window.open('https://doi.org/...', '_blank')}
      className="mt-4 px-4 py-2 rounded-md bg-white/10 border border-white/10 text-gray-200 hover:bg-white/20 transition-all"
    >
      View Publication
    </button>
    */}
        </div>
      </div>
    </div>
  );
}

export default App;
