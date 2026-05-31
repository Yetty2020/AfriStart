import { useState } from "react";
import { navlinks } from "./constants/Navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Logo from "./Logo";

function Navbar() {
  const [isopenMenu, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("open");
  };
  return (
    <nav className="w-full flex justify-between text-[#FFF1F2] font-Inter text-lg px-3 lg:px-10 font-bold tracking-wider">
      <div>
        <Logo/>
      </div>

      <ul className="hidden lg:flex justify-between items-center gap-20">
        {navlinks.map((link, index) => {
          return (
            <li key={index} className="list-none cursor-pointer uppercase ">
              <a>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="flex  lg:hidden">
        <button onClick={toggleMenu} className="z-50 text-3xl text-[#FFF1F2]">
          {isopenMenu ? <RiCloseFill /> : <HiMenuAlt3 />}
        </button>

        <div
          className={`fixed top-0 right-0 w-full h-screen bg-[#2D1B33] z-40 flex flex-col items-center justify-center transition-transform duration-300 ${isopenMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* First Item: The Logo */}
          <div className="lg:mb-5">
            <Logo/>
          </div>

          {/* Second Item: The Links */}
          <ul className="flex flex-col items-center gap-6 bg-[#2D1B33]">
            {navlinks.map((link, index) => (
              <li key={index} className="list-none">
                <a className="text-white text-2xl">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
