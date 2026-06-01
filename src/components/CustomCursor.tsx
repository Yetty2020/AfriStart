import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Smooth Mouse Tracking
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.4, 
        ease: "power4.out"
      });
    };

    // Dynamic Hover Interaction 
    const handleMouseOver = (event: MouseEvent) => {
      // Find out if the hovered element or its parent wants a custom cursor effect
      const target = (event.target as HTMLElement).closest("[data-cursor]");
      
      if (target) {
        // Read the colors and scales directly from the element being hovered!
        const targetBg = target.getAttribute("data-cursor-bg") || "#FF6B00"; 
        const targetScale = target.getAttribute("data-cursor-scale") || "4";

        gsap.to(cursorRef.current, {
          scale: targetScale,
          backgroundColor: targetBg,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    // 3. Reset Cursor on Mouse Leave
    const handleMouseOut = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("[data-cursor]");
      
      if (target) {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#FFFFFF", // Resets back to white
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    // Attach all listeners to the global window object
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
    
      className="fixed top-0 left-0 h-4 w-4 bg-white rounded-full z-9999 pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CustomCursor;