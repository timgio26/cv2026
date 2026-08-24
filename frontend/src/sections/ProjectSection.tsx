import { ProjectTile } from "../components/ProjectTile"
import { myProjects } from "../components/ProjectData"
export default function ProjectSection(){
    return(
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
    )
}