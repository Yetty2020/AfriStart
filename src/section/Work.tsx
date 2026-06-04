import ProfileCard from "../components/ProfileCard";
import { ProfileData } from "../components/constants/Profile";
import gsap from "gsap";
import {scrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"

function Work() {
  return (
    <div className="bg-[#1A0F1E] text-amber-200">
      

     <section className="cards relative w-full h-screen overflow-hidden p-6 flex justify-center z-10  text-amber-50">
  <div className="cards-container relative w-[75%] h-full flex justify-center items-center gap-5">
    
    {/* CARD 1 */}
    <div className="card flex flex-1 relative aspect-5/7 perspective-1000 transform-[translateX(100%)_translateY(100%)_rotate(-5deg)_scale(0.25)] z-2 opacity-0" id="card-1"> 
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-floating delay-100 bg-[#F4F1EA] text-[#1A0F1E] rounded-2xl p-6 shadow-2xl border border-white/10">
      <div className="flip-card-inner relative w-full h-full backface-hidden">
        <div className="flip-card-front absolute w-full h-full overflow-hidden  transform-3d flex flex-col justify-between items-center">
          <div className="w-full h-full flex flex-col justify-between">
          <div className="card-title w-full flex justify-between font-bold">
            <span>Plan</span>
            <span>01</span>
          </div>
          
          
          
          <div className="card-title w-full flex justify-between text-xs opacity-50 font-mono">
            <span>AFRISTART</span>
            <span>©2026</span>
          </div>
        </div>
        </div>
        <div className="flip-card-back absolute w-full h-full overflow-hidden  transform-3d flex flex-col justify-between items-center rotate-y-180">
          <div className="w-full h-full flex flex-col justify-between">
          <div className="card-title w-full flex justify-between font-bold">
            <span>Plan</span>
            <span>01</span>
          </div>
          
          <div className="card-copy my-4 space-y-1 text-sm opacity-80 w-full h-full flex flex-col gap-2">
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>

          </div>
          
          <div className="card-title w-full flex justify-between text-xs opacity-50 font-mono">
            <span>AFRISTART</span>
            <span>©2026</span>
          </div>
        </div>
        </div>
      </div>

        
      </div>
    </div>

    {/* CARD 2 */}
    <div className="card flex flex-1 relative aspect-5/7 perspective-1000 transform-[translateX(100%)_translateY(100%)_rotate(0deg)_scale(0.25)] z-1 opacity-0" id="card-2">
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-floating delay-200 bg-[#F4F1EA] text-[#1A0F1E] rounded-2xl p-6 shadow-2xl border border-white/10">
      <div className="flip-card-inner relative w-full h-full backface-hidden">
        <div className="flip-card-front absolute w-full h-full overflow-hidden  transform-3d flex flex-col justify-between items-center">
          <div className="w-full h-full flex flex-col justify-between">
          <div className="card-title w-full flex justify-between font-bold">
            <span>Plan</span>
            <span>01</span>
          </div>
          
          
          
          <div className="card-title w-full flex justify-between text-xs opacity-50 font-mono">
            <span>AFRISTART</span>
            <span>©2026</span>
          </div>
        </div>
        </div>
        <div className="flip-card-back absolute w-full h-full overflow-hidden  transform-3d flex flex-col justify-between items-center rotate-y-180">
          <div className="w-full h-full flex flex-col justify-between">
          <div className="card-title w-full flex justify-between font-bold">
            <span>Plan</span>
            <span>01</span>
          </div>
          
          <div className="card-copy my-4 space-y-1 text-sm opacity-80 w-full h-full flex flex-col gap-2">
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>

          </div>
          
          <div className="card-title w-full flex justify-between text-xs opacity-50 font-mono">
            <span>AFRISTART</span>
            <span>©2026</span>
          </div>
        </div>
        </div>
      </div>

        
      </div>
    </div>

    {/* CARD 3 */}
    <div className="card flex flex-1 relative aspect-5/7 perspective-1000 transform-[translateX(100%)_translateY(100%)_rotate(-5deg)_scale(0.25)] z-0 opacity-0" id="card-3">
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-floating delay-300 bg-[#F4F1EA] text-[#1A0F1E] rounded-2xl p-6 shadow-2xl border border-white/10">
      <div className="flip-card-inner relative w-full h-full backface-hidden">
        <div className="flip-card-front absolute w-full h-full overflow-hidden  transform-3d flex flex-col justify-between items-center">
          <div className="w-full h-full flex flex-col justify-between">
          <div className="card-title w-full flex justify-between font-bold">
            <span>Plan</span>
            <span>01</span>
          </div>
          
          
          
          <div className="card-title w-full flex justify-between text-xs opacity-50 font-mono">
            <span>AFRISTART</span>
            <span>©2026</span>
          </div>
        </div>
        </div>
        <div className="flip-card-back absolute w-full h-full overflow-hidden  transform-3d flex flex-col justify-between items-center rotate-y-180">
          <div className="w-full h-full flex flex-col justify-between">
          <div className="card-title w-full flex justify-between font-bold">
            <span>Plan</span>
            <span>01</span>
          </div>
          
          <div className="card-copy my-4 space-y-1 text-sm opacity-80 w-full h-full flex flex-col gap-2">
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>
            <p>Wireframes</p>

          </div>
          
          <div className="card-title w-full flex justify-between text-xs opacity-50 font-mono">
            <span>AFRISTART</span>
            <span>©2026</span>
          </div>
        </div>
        </div>
      </div>

        
      </div>
    </div>

  </div>
</section>
      <h1>The Women behind the work</h1>
      <div>
        {ProfileData.map((member) => (
          <ProfileCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

export default Work;
