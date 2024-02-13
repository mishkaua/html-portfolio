export function AboutMe() {
  return (
    <div className="grid grid-cols-7 gap-4">
      {/* Global div */}
      {/*     Left Panel */}
      <div className="col-span-3 px-8 lg:px-12">
        <h1 className="fira text-7xl sm:text-4xl tracking-tighter text-white font-bold">
          Maryna Pichyk
        </h1>
        <h2 className="fira text-3xl lg:text-4xl mt-3 uppercase tracking-tight text-white font-semibold">
          développeuse full-stack junior
        </h2>
        <p className="text-red-800 text-xl font-bold lg:text-md mt-2">
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
      <div className="col-span-4 space-y-2 text-sky-200 text-sm mr-4 text-justify">
        <p className="mb-1">{`Bonjour, je suis Maryna Pichyk. J’aime mettre en place et améliorer le fonctionnement des outils et de systèmes. Il n’est donc pas suprenant qu’après des années en tant que Gestionnaire Logiciel Métier (AMOA dans un cabinet de conseil en propriété industrielle), j’ai décidé de reprendre les études pour pouvoir proposer de solutions plus complètes aux clients.`}</p>
        <p className="text-sky-200 text-sm">
          {`Pour cela, j’ai choisi une formation intense et intensive avec une `}
          <span className="standout">specialization full-stack</span>
          {` à Coding Academy by Epitech. Et je viens`}
          <span className="standout">
            {" "}
            d’obtenir mon diplôme de développeur/intégrateur web.
          </span>
          {` Je souhaite avec
          cette reconversion donner une nouvelle impulsion à ma vie
          professionnelle, en capitalisant sur ma curiosité, mon gout de
          challenge et le travail en équipe.`}
        </p>
        <p>
          {`Cette formation m’a donné un aperçu
          sur les technologies front et backend telles que `}
          <span className="standout">{`Vue.JS, React.JS,
          php, python, Laravel, Next.JS, SQL, MongoDB,`}</span>
          {`tout en réalisant de projets réels et variés.`}
        </p>
        <p>{`Comme démontré par mon parcours professionnel et personnel, je m’épannouie dans le context multiculturel et les domaines technophiles.`}</p>
        {/*         <p>{`Lorsque je ne suis pas devant l'ordinateur, j’adore passer du temps avec ma famille, voyager, me reconnecter avec la nature, ou de nourir mon esprit avec le yoga ou la lecture.`}</p>
         */}
        <p>
          {`Actuellement je suis `}
          <span className="standout">{`à la recherche d’une nouvelle opportunité professionnelle`}</span>
          {` qui permettra de mettre en oeuvre mes nouvelles compétences de développeuse tout en continuant à me former à ce métier. Si vous êtes à la recherche de quelqu’un de passionné pour rejoindre votre équipe, faites-moi signe! `}
        </p>
      </div>
    </div>
  );
}
