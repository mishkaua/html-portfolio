import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex justify-between md:h-32 p-8">
      <div className="flex pl-8 space-x-8">
        <a
          href="http://www.linkedin.com/in/maryna-pichyk-dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://github.com/mishkaua" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
      <div className="flex flex-col lg:pl-24 pl-8">
        <p className="md:text-lg text-sm">
          © {new Date().getFullYear()} Maryna Pichyk
        </p>
        <p>
          {"Coded in "}
          <a
            href="https://code.visualstudio.com/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>
          {" by truly yours. Built with "}
          <a
            href="https://react.dev/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            React.JS
          </a>
          {" and "}
          <a
            href="https://tailwindcss.com/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Vercel
          </a>
          . The text is set in the{" "}
          <a
            href="https://fontsource.org/fonts/roboto"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Roboto
          </a>{" "}
          typeface, and the headlines in{" "}
          <a
            href="https://fontsource.org/fonts/fira-code"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Fira Code
          </a>{" "}
          typeface.
        </p>
      </div>
    </div>
  );
}
