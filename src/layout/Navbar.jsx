import { Link } from 'react-router-dom';
import PortfolioImage from '../assets/PortfolioImage.png';
import Close_icon from '../assets/close_icon.svg';
import Menu_icon from '../assets/menu_icon.png';
import { useState } from 'react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="flex justify-between items-center px-5 py-5 sm:px-10 pt-3 shadow-md bg-[#1A3046] text-white relative z-20">

      <Link to="/">
        <h1 className='font-bold pt-2'>PORTFOLIO</h1>
       </Link>

      <div
        className={`
          flex items-center gap-8 text-sm font-medium
          max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-screen
          max-sm:bg-[#D9D9D9] max-sm:text-black max-sm:text-lg sm:text-sm
          max-sm:flex-col max-sm:justify-center
          max-sm:transition-all max-sm:duration-300
          max-sm:z-20
          ${sidebar ? 'max-sm:w-60' : 'max-sm:w-0 overflow-hidden'}`}>
        <img
          src={Close_icon}
          alt="close"
          className="w-6  top-5 right-5 sm:hidden cursor-pointer  "
          onClick={() => setSidebar(false)}
        />

        <Link to="/about" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          About
        </Link>
        <Link to="/project" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Project
        </Link>
        <Link to="/experience" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Experience
        </Link>
        <Link to="/contact" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Contact
        </Link>
      </div>

      {/* Menu Icon */}
      <img
        src={Menu_icon}
        alt="menu"
        onClick={() => setSidebar(true)}
        className={`w-8 sm:hidden cursor-pointer ${sidebar ? 'hidden' : 'block'}`}
      />
    </nav>
  );
};

export default Navbar;