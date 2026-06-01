import { useState, useEffect } from "react";
import { navlinks } from "./constants/Navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Logo from "./Logo";
import gsap from "gsap";
 
//import {useGSAP} from "@gsap/react"

function Navbar() {
  const [isopenMenu, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("open");
  };
  // Scope all our animations to this navbar component safely
  useEffect(() => {
    // 1. Set the initial baseline state for all underlines on layout mount
    gsap.set('.nav-underline', {
      scaleX: 0,
      transformOrigin: 'left center',
    });
  }, []);

  // 2. Hover-In Animation (Slides out smoothly from the Left)
  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const underline = event.currentTarget.querySelector('.nav-underline');
    
    gsap.to(underline, {
      scaleX: 1,
      transformOrigin: 'left center', // Forces growth outwards to the right
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  // 3. Hover-Out Animation (The Premium "Wipe-Out" Editorial Shift)
  const handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const underline = event.currentTarget.querySelector('.nav-underline');
    
    gsap.to(underline, {
      scaleX: 0,
      transformOrigin: 'right center', // CRUCIAL: Forces the line to vanish towards the right!
      duration: 0.5,
      ease: 'power2.inOut',
    });
  };
  return (
    <nav data-cursor data-cursor-scale="1.2" data-cursor-bg="#FFFF" className="w-full flex justify-between text-[#FFF1F2] font-Inter text-lg px-3 lg:px-10 font-bold tracking-wider">
      <div>
        <Logo/>
      </div>

      <ul className="hidden lg:flex justify-between items-center gap-20">
        {navlinks.map((link, index) => {
          return (
            <li key={index} className="list-none cursor-pointer uppercase ">
              <a onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className="nav-link relative py-3  text-sm tracking-widest uppercase cursor-none">{link.title}
                {/* Underline Animation */}
                <span className="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B00]"></span>

              </a>
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
