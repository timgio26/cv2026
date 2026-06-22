import bookgether from "./assets/bookgether.jpg";
import openWheelImg from "./assets/openwheel.jpg";
import cdpBeImg from "./assets/cdp.png";
import linquizticImg from "./assets/linquiztic.png";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { Section } from "./components/Section";
import { RagChat } from "./components/RagChat";
import {ScrollHorizontalIndicator} from "./components/ScrollHorizontalIndicator"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImg from "./assets/profile.jpg"


const myProjects = [
  {
    title: "BookGether",
    desc: "BookGether is book sharing platform. Our mission is to reduce paper utilization and production by encouraging the sharing of books, especially those that are often read just once.",
    tools: ["TS", "Zustand", "Zod", "Tailwind", "Shadcn", "Supabase"],
    img_src: bookgether,
    url: [
      {
        url: "https://github.com/timgio26/bookgether",
        icons: "github",
      },
      {
        url: "https://bookgether.netlify.app/",
        icons: "app",
      },
    ],
  },
  {
    title: "OpenWheel",
    desc: "ride-sharing application designed to connect people who have similar travel routes, enabling them to share a ride in a single vehicle",
    tools: ["TS", "Redux", "Zod", "Tailwind", "Supabase"],
    img_src: openWheelImg,
    url: [
      {
        url: "https://github.com/timgio26/openwheel",
        icons: "github",
      },
      {
        url: "https://openwheel.netlify.app/",
        icons: "app",
      },
    ],
  },
  {
    title: "Customer Data Platform",
    desc: "Tools to manage customer & historical services for indonesian water treatment company",
    tools: ["Flask", "React", "MySQL","Tailwind"],
    img_src: cdpBeImg,
    url: [
      {
        url: "https://github.com/timgio26/cdp_toko",
        icons: "github",
      },
      // {
      //   url: "https://timgio26.pythonanywhere.com/",
      //   icons: "app",
      // },
    ],
  },
  {
    title: "Linquiztic (on progress)",
    tools: ["React", "TS", "Tailwind", ".NET", "C#", "Firebase"],
    desc: "Linquiztic is an fullstack app that allow user to learn new vocabulary & building sentence with the help of AI so every user has personalized journey",
    url: [
      { url: "https://github.com/timgio26/linquiztic_fe", icons: "github" },
    ],
    img_src: linquizticImg,
  },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16 flex flex-col gap-10">
      <ScrollHorizontalIndicator/>
      {/* HERO SECTION */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 tracking-widest uppercase text-sm">
            hello I'm
          </span>
          <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-center">
            Timotius Giovandi
          </span>
        </div>
  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-white/10 shadow-xl bg-white/5 backdrop-blur-sm">
    <img
      src={profileImg}
      alt="Profile"
      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-lg  text-gray-300">
            Data & Technology Enthusiast
          </span>
          <p className="max-w-2xl text-center text-gray-300">
  Building AI applications, data solutions, and software systems
  that turn ideas into real products.
</p>
        </div>

<div className="flex flex-row gap-3 mt-4">
<a
  href="/Giovandi_CV.pdf"
  download
  className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all inline-block cursor-pointer"
>
  Download CV
</a>


<a
  href="mailto:timotiusgiovandi@gmail.com"
  className="px-6 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all inline-block cursor-pointer"
>
  Contact Me
</a>

</div>


<div className="flex items-center gap-4 mt-4">
  <a
    href="https://github.com/timgio26"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/timgio/"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://www.instagram.com/timotiusgiovandi/"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <FaInstagram size={22} />
  </a>
</div>

      </div>

      <Section title="Chat With My AI Agent">
        <RagChat />
      </Section>

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
          <span className="text-gray-400 text-sm">Master | 2024 - Current</span>
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

      <div className="w-[90%] lg:w-[50%] max-w-3xl mx-auto flex flex-col gap-6">
        <span className="text-2xl font-semibold tracking-wide border-b border-white/10 pb-2">
          Projects
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {myProjects.map((each, index) => (
            <ProjectTile data={each} key={index} />
          ))}
        </div>
      </div>

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
