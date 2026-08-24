import bookgether from "../assets/bookgether.jpg";
import openWheelImg from "../assets/openwheel.jpg";
import cdpBeImg from "../assets/cdp.png";
import linquizticImg from "../assets/linquiztic.png";

export const myProjects = [
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
    tools: ["Flask", "React", "MySQL", "Tailwind"],
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