import { PROJECT_LIST } from "../projects_data";

export default function MyProjects() {
  return (
    <div id="projects" className="px-8 lg:px-12 pt-40 mt-[-40]">
      <div className="fira tracking-tight text-white uppercase text-3xl lg:text-4xl mt-3">
        Mes Projets
      </div>
      {/*       Project Card */}
      <div className="space-y-4">
        {PROJECT_LIST.map((project, index) => {
          return (
            <div
              key={index}
              className="md:grid md:grid-cols-3 gap-x-4 rounded-lg pl-8 shadow-lg hover:bg-gradient-dark cursor-pointer"
            >
              {/*       Project Info */}
              <img
                className="h-40 pt-2 rounded-lg"
                src={project.src}
                alt={project.title}
              />
              <div className="col-span-2 py-2">
                <h5 className="inset-start-100 mb-2 text-xl font-medium text-sky-200">
                  {project.title}
                </h5>
                <p className="mb-4 text-sm text-white">{project.description}</p>
              </div>
              {/* List of technologies used */}
              <div className="col-start-2 col-span-2 pb-6">
                <ul className="flex flex-wrap gap-x-4">
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
