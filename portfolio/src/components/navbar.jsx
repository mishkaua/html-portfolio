import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/dev-logo.png";
import CV from "../assets/cv_2_pages.pdf";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="sticky top-0 flex justify-between bg-gradient px-8 lg:px-12">
      {/* Logo */}
      <a href="/">
        <img
          src={Logo}
          alt="logo"
          className="h-24 w-24 my-4 border border-sky-400 rounded-full"
        />
      </a>

      {/* Menu Hamburger */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="focus:ring-2 focus:ring-sky-500 border my-2 hover:bg-sky-300 rounded md:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/*  Menu Items */}
      <div
        className={`${
          !isMobileMenuShown === false && "hidden"
        } w-full lg:w-auto`}
      >
        <ul className="flex flex-col md:flex-row bg-sky-400 lg:bg-transparent text-lg p-4 border md:border-none rounded-lg">
          <li className="bg-sky-700 text-white lg:bg-transparent lg:text-sky-700 navbar-list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:bg-cyan-50 tracking-tighter navbar-list-item">
            <Link to="/about">A PROPOS</Link>
          </li>
          <li className="hover:bg-cyan-50 tracking-tighter navbar-list-item">
            <Link to="/myprojects">MES PROJETS</Link>
          </li>
          <li className="hover:bg-cyan-50 navbar-list-item">
            <a href={CV}>CV</a>
          </li>
          <li className="hover:bg-cyan-50 navbar-list-item">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
