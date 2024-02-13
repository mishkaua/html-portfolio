import { PROJECT_LIST } from "../projects_data";

export function MyProjects() {
  return (
    <div className="px-8 lg:px-12">
      <div className="fira tracking-tight text-white uppercase text-3xl lg:text-4xl mt-3">
        Mes Projets
      </div>
      {/*       Project Card */}
      <div className="space-y-4">
        {PROJECT_LIST.map((project, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 rounded-lg pl-8 shadow-lg hover:bg-gradient-dark cursor-pointer"
            >
              {/*       Project Info */}
              <img className="h-40 mt-2 rounded-lg" src={project.src} alt="" />
              <div className="col-span-2 px-4 py-2">
                <h5 className="inset-start-100 mb-2 text-xl font-medium text-sky-200">
                  {project.title}
                </h5>
                <p className="mb-4 text-sm text-white">{project.description}</p>
              </div>
              {/* List of technologies used */}
              <div className="col-start-2 col-span-2">
                <ul className="flex flex-wrap space-x-2 my-2 px-4">
                  {project.technologies.map((technology, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-wrap rounded-full text-sm my-1 font-sm py-1 px-2 text-sky-200 border"
                      >
                        {technology}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
