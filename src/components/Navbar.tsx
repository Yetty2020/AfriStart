import { useState } from "react";
import { navlinks } from "./constants/Navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

function Navbar() {
  const [isopenMenu, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("open");
  };
  return (
    <nav className="w-full flex justify-between ">
      <div>
        <span>Logo</span>
      </div>

      <ul className="hidden lg:flex justify-between items-center gap-10">
        {navlinks.map((link, index) => {
          return (
            <li key={index} className="list-none">
              <a>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="flex  lg:hidden">
        <button onClick={toggleMenu} className="z-50 text-3xl text-black">
          {isopenMenu ? <RiCloseFill /> : <HiMenuAlt3 />}
        </button>

        <div
          className={`fixed top-0 right-0 w-full h-screen bg-[#2D1B33] z-40 flex flex-col items-center justify-center transition-transform duration-300 ${isopenMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* First Item: The Logo */}
          <div className="mb-10">
            <span className="text-white font-bold">Logo</span>
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
