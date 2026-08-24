import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
export function HeroSection() {
  return (
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
          Building AI applications, data solutions, and software systems that
          turn ideas into real products.
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
  );
}
