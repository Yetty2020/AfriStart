import zee from "../assets/zee.jpeg"

function Founder() {
  return (
    <section  data-cursor
  data-cursor-bg="#FFF1F2"      
  data-cursor-scale="6"         
  data-cursor-text="The Founder" className="text-white  flex flex-col gap-8 w-full border-t border-[#FF6B00] pt-10" >
      <div className="flex flex-col gap-4 border-b border-[#FF6B00] w-full pb-10 px-5 lg:px-30">
        <p className="  text-[#FFF1F2]  text-sm tracking-widest font-Inter font-bold">The Founder</p>
        <h1 className="text-[#FFF1F2] font-black text-5xl md:text-7xl lg:text-8xl">Zainab Ajileye</h1>
        <h1 className="text-[#FFF1F2] font-bold text-2xl md:text-3xl italic">IP Lawyer & CEO</h1>
      </div>
      <div className="lg:flex lg:items-center lg:justify-content  " >
      {/* <div className="lg:w-[40%] aspect-3/4 overflow-hidden rounded-full border-r border-[#FF6B00] bg-zinc-900/40 backdrop-blur-sm  ">
        <img src={zee} alt="founder-image" className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out "/>
      </div> */}
      <div className="relative flex justify-center items-center lg:px-30  p-10 lg:p-12 md:border-r border-[#FF6B00] min-h-100">
          {/* Your Profile Picture Wrapper */}
          <div className="w-100 aspect-3/4 overflow-hidden rounded-full lg:border border-[#FF6B00] bg-zinc-900/40 backdrop-blur-sm">
            <img 
              src={zee} 
              alt="Zainab Ajileye" 
              className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>

          {/* Optional: The geometric circles from Pulsr can be absolute layered background vectors here */}
        </div>

      
        
        <div className="lg:w-[60%] flex flex-col gap-3 items-center justify-content  lg:p-5 font-medium  text-lg md:text-xl tracking-wider font-Playfair ">
           <div className="lg:w-[70%] flex flex-col gap-10 items-start ">
             <p className="p-7 lg:p-0 text-left">I'm an IP Lawyer and I started Afristarts solutions because I kept seeing the same story - founders with brilliant ideas, real talent and genuine ambition, who were being held back but not by their business, but by the structure around it.</p>
             <div className="relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-23 h-23 lg:hidden text-[#FF6B00] absolute -left-8 top-1 ">
  <path d="M12 2L22 12L12 22L2 12Z" strokeLinecap="square"/>
  <path d="M12 6L18 12L12 18L6 12Z" strokeOpacity="0.3"/>
</svg>
 <p className="ml-14 lg:ml-0 px-7 lg:px-0 text-left">Missing CAC registration meant they couldn't apply for funding. No website meant clients could not take them seriously. No business plan meant banks turned they away. These were all solvable problems - and I wanted to build a firm that solved them.</p>
             </div>
             <div className="relative">
               <p className="mr-14 lg:mr-0 p-7 lg:px-0 text-left">Afristart is the result of that conviction. We put the pieces together so you can earn without stress.</p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-23 h-23 lg:hidden text-[#FF6B00] absolute  -right-5 bottom-0">
  {/* Outer Hexagon Boundary */}
  <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
  {/* Internal Corner Connectors meeting at the absolute center */}
  <path d="M12 22V12M12 12L21 7M12 12L3 7" strokeLinecap="round" strokeLinejoin="round" />
  {/* Inner Diamond Highlight Accents for dimensional complexity */}
  <path d="M12 7L16.5 9.5L12 12L7.5 9.5Z" strokeOpacity="0.4" />
</svg>
             </div>
           
           
           </div>
            
        </div>
      
    </div>
    </section>

  )
}

export default Founder
