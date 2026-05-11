import { useState } from "react";
import { navlinks } from "./constants/Navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

function Navbar() {

    const [isopenMenu, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
        console.log("open")
    }
  return (
    <nav className="w-full flex justify-between ">
         <div>
                <span>Logo</span>
            </div>
      

           
            <ul className="hidden lg:flex justify-between items-center gap-10">
                {
                navlinks.map((link, index) => {
                    return (
                        <li key={index} className="list-none">
                            <a>
                            {link.title}</a></li>
                    )

                })

            }

            </ul>
            
       
        <div className="flex  lg:hidden">
           
            <button onClick={toggleMenu}>{
                isopenMenu ? <RiCloseFill /> : <HiMenuAlt3 />
            }</button>
        </div>
    </nav>
  );
}

export default Navbar;
