export function AboutMe() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Global div */}
      {/*     Left Panel */}
      <div className="px-8 lg:px-12">
        <h1 className="fira text-7xl sm:text-4xl tracking-tighter text-white font-bold">
          Maryna Pichyk
        </h1>
        <h2 className="fira text-3xl lg:text-4xl mt-3 uppercase tracking-tight text-white font-semibold">
          développeuse full-stack junior
        </h2>
        <p className="text-sky-900 animate-pulse font-medium lg:text-md mt-2">
          A la recherche du stage ou CDD à partir de mai 2024.
        </p>

        {/* Buttons */}
        <div className="flex justify-start space-x-16 py-8">
          <button className="bg-sky-600 text-white border px-8 py-3 rounded btn-press-anim">
            <a href="/myprojects">Mes projets</a>
          </button>
          <button className="bg-sky-600 text-white border px-8 py-3 rounded btn-press-anim">
            <a href="/contact">Me contacter</a>
          </button>
        </div>
      </div>
      {/* Right column - About Me Section - Pitch */}
      <div className="">
        <p>Pitch</p>
      </div>
    </div>
  );
}
