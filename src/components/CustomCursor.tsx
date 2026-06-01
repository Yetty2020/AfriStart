import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null); // Ref to target the text layer inside the circle

  useEffect(() => {
    // 1. Mouse Tracking Loop
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power4.out"
      });
    };

    // 2. Dynamic Hover-In Logic
    const handleMouseOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("[data-cursor]");
      
      if (target) {
        const targetBg = target.getAttribute("data-cursor-bg") || "#CCFF00";
        const targetScale = target.getAttribute("data-cursor-scale") || "4";
        const customText = target.getAttribute("data-cursor-text") || ""; // Pull custom text attribute

        // Update the inner text string if it exists
        if (textRef.current) {
          textRef.current.innerText = customText;
        }

        // Animate the cursor shape and color
        gsap.to(cursorRef.current, {
          scale: targetScale,
          backgroundColor: targetBg,
          duration: 0.3,
          ease: "power2.out"
        });

        // If there's text, fade it in cleanly
        if (customText && textRef.current) {
          gsap.to(textRef.current, {
            opacity: 1,
            scale: 1, // Reset structural scaling so it doesn't warp
            duration: 0.2,
            delay: 0.1 // Tiny delay lets the circle expand first before text pops
          });
        }
      }
    };

    // 3. Hover-Out Reset Logic
    const handleMouseOut = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("[data-cursor]");
      
      if (target) {
        // Fade out inner text quickly
        if (textRef.current) {
          gsap.to(textRef.current, {
            opacity: 0,
            duration: 0.1
          });
        }

        // Reset the main cursor body back to default baseline
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#FFFFFF",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 h-5 w-5 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
    >
      {/* Tiny inner text container that scales down and starts completely hidden */}
      <span
        ref={textRef}
        className="opacity-0 font-sans font-bold text-[3px] text-[#1A0F1E] tracking-tighter uppercase whitespace-nowrap select-none text-center block"
        style={{ transform: 'scale(1)' }} // Forces browser to prevent inherited parent division scaling
      />
    </div>
  );
};

export default CustomCursor;