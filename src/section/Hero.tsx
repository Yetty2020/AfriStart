import { IoDiamondOutline } from "react-icons/io5";

function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
        <span className="flex-start">Our Story</span>
        <h1>Built by women</h1>
        <h1>Built for founders</h1>
        <span className="text-6xl"><IoDiamondOutline/></span>
        <p className=" max-w-lg md:max-w-2xl">
            We started Afristart Soluitons because we saw too many brilliant Nigerian entrepreneurs lose opportunities that they deserved - not because of bad business but because of bad structure.
        </p>
      
    </div>
  )
}

export default Hero
