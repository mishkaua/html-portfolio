import { PROJECT_LIST } from "../projects_data";

export function MyProjects() {
  return (
    <div className="px-8 lg:px-12">
      <div className="fira tracking-tight text-white uppercase text-3xl lg:text-4xl mt-3">
        Mes Projets
      </div>
      {/*       Project Card */}
      <div className="grid grid-col-6 space-y-4">
        {PROJECT_LIST.map((project, index) => {
          return (
            <div
              key={index}
              className="rounded-lg shadow-lg hover:bg-gradient-dark cursor-pointer"
            >
              {/*       Project Info */}
              <img
                className="col-start-1 col-span-1 h-40 rounded-lg object-cover"
                src={project.src}
                alt=""
              />
              <div className="col-start-2 px-4 py-2">
                <h5 className="mb-2 text-xl font-medium text-sky-200">
                  {project.title}
                </h5>
                <p className="mb-4 text-sm text-white">{project.description}</p>
              </div>
              {/* List of technologies used */}
              <div>
                <ul className="flex flex-wrap space-x-2 my-2 px-4">
                  {project.technologies.map((technology, index) => {
                    return (
                      <li
                        key={index}
                        className="flex rounded-full text-sm font-sm py-1 px-2 text-sky-200 border"
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
