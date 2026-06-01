import zee from "../assets/zee.jpeg"

function Founder() {
  return (
    <section className="text-white  flex flex-col gap-8 w-full border-t border-[#FF6B00] pt-10" >
      <div className="flex flex-col gap-4 border-b border-[#FF6B00] w-full pb-10 px-30">
        <p className="  text-[#FFF1F2]  text-sm tracking-widest font-Inter font-bold">The Founder</p>
        <h1 className="text-[#FFF1F2] font-black text-2xl lg:text-8xl">Zainab Ajileye</h1>
        <h1 className="text-[#FFF1F2] font-bold lg:text-3xl italic">IP Lawyer & CEO</h1>
      </div>
      <div className="lg:flex items-center justify-content  " >
      {/* <div className="lg:w-[40%] aspect-3/4 overflow-hidden rounded-full border-r border-[#FF6B00] bg-zinc-900/40 backdrop-blur-sm  ">
        <img src={zee} alt="founder-image" className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out "/>
      </div> */}
      <div className="relative flex justify-center items-center px-30 p-12 md:border-r border-[#FF6B00] min-h-100">
          {/* Your Profile Picture Wrapper */}
          <div className="w-100 aspect-3/4 overflow-hidden rounded-full border border-[#FF6B00] bg-zinc-900/40 backdrop-blur-sm">
            <img 
              src={zee} 
              alt="Zainab Ajileye" 
              className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>

          {/* Optional: The geometric circles from Pulsr can be absolute layered background vectors here */}
        </div>

      
        
        <div className="lg:w-[60%] flex flex-col gap-3 items-center justify-content p-5 font-medium text-xl tracking-wider font-Playfair">
           <div className="w-[70%] flex flex-col gap-10 items-start ">
             <p>I'm an IP Lawyer and I started Afristarts solutions because I kept seeing the same story - founders with brilliant ideas, real talent and genuine ambition, who were being held back but not by their business, but by the structure around it.</p>
            <p>Missing CAC registration meant they couldn't apply for funding. No website meant clients could not take them seriously. No business plan meant banks turned they away. These were all solvable problems - and I wanted to build a firm that solved them.</p>
            <p>Afristart is the result of that conviction. We put the pieces together so you can earn without stress.</p>
           </div>
            
        </div>
      
    </div>
    </section>

  )
}

export default Founder
