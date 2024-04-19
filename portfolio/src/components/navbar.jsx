import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/dev-logo.png";
import CV from "../assets/cv_2_pages.pdf";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="sticky flex top-0 w-full justify-between bg-gradient px-8 lg:px-12">
      {/* Logo */}
      <a href="/">
        <img
          src={Logo}
          alt="logo"
          className="h-24 w-24 my-4 min-w-[96px] border border-sky-400 rounded-full"
        />
      </a>

      {/* Menu Hamburger */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        aria-label="navbar button"
        className="focus:ring-2 focus:ring-sky-500 my-2 px-4 hover:bg-gradient rounded md:hidden"
      >
        <RxHamburgerMenu size={30} />
      </button>

      {/*  Menu Items */}
      <div
        className={`${
          !isMobileMenuShown === false && "hidden"
        } w-full lg:w-auto`}
      >
        <ul className="flex flex-col md:flex-row lg:bg-transparent text-lg md:border-none rounded-lg">
          <li className="hover:bg-cyan-50 tracking-tighter navbar-list-item">
            <a href="#about">A PROPOS</a>
          </li>
          <li className="hover:bg-cyan-50 tracking-tighter navbar-list-item">
            <a href="#projects">MES PROJETS</a>
          </li>
          <li className="hover:bg-cyan-50 navbar-list-item ">
            <a href={CV} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
          <li className="hover:bg-cyan-50 navbar-list-item">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
