import { FaGithub, FaGlobe } from "react-icons/fa6";



export type ProjectTileProp = {
  data: {
    title: string;
    desc: string;
    tools: string[];
    img_src: string;
    url: {
      url: string;
      icons: string;
    }[];
  };
};

export function ProjectTile({ data }: ProjectTileProp) {
  function openInNewTab(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="
      border border-white/10 
      bg-white/5 
      rounded-2xl 
      overflow-hidden 
      backdrop-blur-sm 
      hover:scale-[1.02] 
      hover:border-white/20
      transition-all 
      duration-300
      flex flex-col
    ">
      
      {/* IMAGE AREA */}
      <div>
        <img
          src={data.img_src}
          className="w-full h-full"
        />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col p-6 justify-between h-full">
        
        {/* TITLE + DESC */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold tracking-tight">
            {data.title}
          </span>
          <span className="text-gray-300 leading-relaxed">
            {data.desc}
          </span>
        </div>

        {/* TOOLS + LINKS */}
        <div className="border-t border-white/10 mt-4 pt-4 flex flex-col gap-2">
          
          <span className="font-semibold text-white/80 uppercase text-xs tracking-wider">
            Tools
          </span>

          {/* TOOL TAGS */}
          <div className="flex flex-wrap gap-2">
            {data.tools.map((tool, i) => (
              <span 
                key={i}
                className="
                  px-2 py-1 
                  text-xs 
                  rounded-md 
                  bg-white/10 
                  border border-white/10 
                  text-gray-300
                "
              >
                {tool}
              </span>
            ))}
          </div>

          {/* ICON LINKS */}
          <div className="flex flex-row justify-end mt-3">
            {data.url.map((each, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openInNewTab(each.url)}
              >
                {each.icons === "github" ? (
                  <FaGithub
                    size={26}
                    className="mx-2 text-gray-300 hover:text-white transition-colors"
                  />
                ) : (
                  <FaGlobe
                    size={26}
                    className="mx-2 text-gray-300 hover:text-white transition-colors"
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

