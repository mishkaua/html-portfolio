import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex justify-between h-32 p-8">
      <div className="flex pl-8 space-x-8">
        <a href="http://www.linkedin.com/in/maryna-pichyk-dev">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://github.com/mishkaua">
          <FaGithub size={24} />
        </a>
      </div>
      <div className="flex flex-col lg:pl-24 pl-8">
        <p className="text-lg">© {new Date().getFullYear()} Maryna Pichyk</p>
        <p>
          {"Coded in "}
          <a href="https://code.visualstudio.com/" className="link">
            Visual Studio Code
          </a>
          {" by truly yours. Built with "}
          <a href="https://react.dev/" className="link">
            React.JS
          </a>
          {" and "}
          <a href="https://tailwindcss.com/" className="link">
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a href="https://vercel.com/" className="link">
            {" "}
            Vercel
          </a>
          . The text is set in the{" "}
          <a href="https://fontsource.org/fonts/roboto" className="link">
            Roboto
          </a>{" "}
          typeface, and the headlines in{" "}
          <a href="https://fontsource.org/fonts/fira-code" className="link">
            Fira Code
          </a>{" "}
          typeface.
        </p>
      </div>
    </div>
  );
}
