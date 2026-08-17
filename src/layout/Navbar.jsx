import { Link } from "react-router-dom";
import Close_icon from "../assets/close_icon.svg";
import Menu_icon from "../assets/menu_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="flex justify-between items-center px-5 py-5 sm:px-10 pt-3 shadow-md bg-[#1E2939] text-white relative z-30">
      <Link to="/">
        <h1 className="font-bold pt-2">PORTFOLIO</h1>
      </Link>

      {sidebar && (
        <div
          className="max-sm:fixed max-sm:inset-0 max-sm:bg-black/50 max-sm:z-20"
          onClick={() => setSidebar(false)}
        ></div>
      )}

      <div
        className={`flex items-center gap-8 text-sm font-medium max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-screen max-sm:bg-[#1E2939] max-sm:text-white sm:text-sm max-sm:flex-col max-sm:justify-center max-sm:transition-all max-sm:duration-300 max-sm:z-30 ${sidebar ? "max-sm:w-60" : "max-sm:w-0 max-sm:overflow-hidden"}`}
      >
        <img
          src={Close_icon}
          alt="close"
          className="w-6 max-sm:absolute max-sm:top-5 max-sm:right-5 sm:hidden cursor-pointer"
          onClick={() => setSidebar(false)}
        />
        <a
          href="#about"
          onClick={() => setSidebar(false)}
          className="hover:text-[#4A90E2] transition whitespace-nowrap"
        >
          About
        </a>
        <a
          href="#project"
          onClick={() => setSidebar(false)}
          className="hover:text-[#4A90E2] transition whitespace-nowrap"
        >
          Project
        </a>
        <a
          href="#experience"
          onClick={() => setSidebar(false)}
          className="hover:text-[#4A90E2] transition whitespace-nowrap"
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={() => setSidebar(false)}
          className="hover:text-[#4A90E2] transition whitespace-nowrap"
        >
          Contact
        </a>
      </div>

      <img
        src={Menu_icon}
        alt="menu"
        onClick={() => setSidebar(true)}
        className={`w-8 sm:hidden cursor-pointer ${sidebar ? "hidden" : "block"}`}
      />
    </nav>
  );
};

export default Navbar;
