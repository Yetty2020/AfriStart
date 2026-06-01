import { IoDiamondOutline } from "react-icons/io5";

function Hero() {
  return (
  
        
    <div className="h-screen md:h-screen flex flex-col items-center justify-center bg-[#1A0F1E] gap-6 font-Playfair lg:px-30 lg:mb-10" >
        <span data-cursor 
        data-cursor-bg="#CCFF00" 
        data-cursor-scale="6" className="flex-start  text-[#FFF1F2]  text-sm tracking-widest font-Inter font-extra-bold">Our Story</span>
        <h1 data-cursor data-cursor-scale="3" data-cursor-bg="#FFFF" className="text-[#FFF1F2] font-black text-5xl md:text-7xl lg:text-9xl">Built by women.</h1>
        <h1 data-cursor data-cursor-scale="2" data-cursor-bg="#FFFF" className="text-[#FFF1F2] font-black text-4xl md:text-5xl lg:text-7xl italic">Built for founders.</h1>
        <span className=" text-6xl lg:text-7xl text-[#FF6B00] my-9"><IoDiamondOutline/></span>
        <p className="md:max-w-4xl text-[#FFF1F2]  text-xl md:text-2xl text-center tracking-widest ">
            We started Afristart Soluitons because we saw too many brilliant Nigerian entrepreneurs lose opportunities that they deserved - not because of bad business but because of bad structure.
        </p>
      
    </div>
  )
}

export default Hero
