import postit from "./assets/postit.png";
import moveWithJoy from "./assets/move-with-joy.png";
import nikeshoes from "./assets/nikeshoes.png";
import showtime from "./assets/showtime.png";
import rottenTomatoes from "./assets/rotten-tomatoes.png";
import yowl from "./assets/yowl.png"

export const PROJECT_LIST = [
  {
    id: 1,
    title: "Nike Shoes",
    description: "The app displays a list of shoe models, it allows to add them to the shopping cart, as well as to remove them from the shopping cart.It has a light and a dark mode, and allows easy switching between them. The app is responsive to the screen size it is used on.",
    src: nikeshoes,
    link: "https://shoes-hvur.vercel.app/",
    technologies: ["React", "Javascript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Postit",
    description: "The homepage displays titles of all the notes from the API. One can click on \"See details\" to see the content of a note and give possibility to edit or delete it. CRUD for notes (create, read, update, delete). Use of CSS animation to create snow effect on the homepage.",
    src: postit,
    link: "",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Vue.JS", "API"],
  },
  {
    id: 3,
    title: "Rotten Tomatoes",
    description: "A movie presentation and review website, which allows registered users to see new films with descriptions, comments and the review of the public. It also includes the admin panel allowing to manage users, see statistics on comments and notes given to movies, and add new films from the TMDB API.",
    src: rottenTomatoes,
    link: "",
    technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "MongoDB", "React", "Next.Js"],
  },
  {
    id: 4,
    title: "Show Time",
    description: "Show Time is a site for concert tickets booking. It is made of two parts: a frontoffice and a backoffice. All users can see a list of available concerts. They can filter them by band title and can register and login. An administrator can: create/ update/ delete a user. Assign admin rights to a user. Update a concert: date, number of available tickets, genres, bands. Be able to view booking statistics. ",
    src: showtime,
    link: "",
    technologies: ["Bootstrap", "Vue.JS", "Nest.JS", "MongoDB"],
  },
  {
    id: 5,
    title: "YOWL",
    description: "YOWL is a free website allowing the users to share their comments on any content. The application decentralizes comments from social networks.",
    src: yowl,
    link: "",
    technologies: ["Vue.JS", "Javascript", "Laravel 10", "PHP", "MySQL"],
  },
  {
    id: 6,
    title: "Move With Joy",
    description: "A simple front-end landing page for a moving company.",
    src: moveWithJoy,
    link: "https://move-with-joy-plum.vercel.app/",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: 7,
    title: "Dashboard",
    description: "",
    src: "",
    link: "",
    technologies: ["Vue.JS", "Bootstrap", "MongoDB", "Passport", "API"],
  },
];
