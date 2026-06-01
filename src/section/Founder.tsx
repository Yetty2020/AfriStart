import zee from "../assets/zee.jpeg"

function Founder() {
  return (
    <section className="text-white lg:px-30 flex flex-col gap-8" >
      <div className="flex flex-col gap-4  ">
        <p className="flex-start  text-[#FFF1F2]  text-sm tracking-widest font-Inter font-extra-bold">The Founder</p>
        <h1 className="text-[#FFF1F2] font-black text-2xl lg:text-6xl">Zainab Ajileye</h1>
        <h1 className="text-[#FFF1F2] font-bold text-2xl italic">IP Lawyer & CEO</h1>
      </div>
      <div className="lg:flex items-center justify-content  " >
      <div className="lg:w-[40%]">
        <img src={zee} alt="founder-image" className="rounded-full w-[70%]"/>
      </div>

      
        
        <div className="lg:w-[60%] flex flex-col gap-3 items-center justify-content p-5 text-xl tracking-wider font-Playfair">
           <div className="w-[70%] flex flex-col gap-10 items-start ">
             <p>I'm an Ip Lawyer and i started Afristarts solutions because i kept seeing the same story - founders with brilliant ideas, real talent and genuine ambition, who were being held back but not by their business, but by the structure around it.</p>
            <p>Missing CAC registration meant they couldn't apply for funding. No website meant clients could not take them seriously. No business plan meant banks turned they away. These were all solvable problems - and i wanted to build a firm that solved them.</p>
            <p>Afristart is the result of that conviction. We put the pieces together so you can earn without stress.</p>
           </div>
            
        </div>
      
    </div>
    </section>

  )
}

export default Founder
