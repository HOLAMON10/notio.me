import { useEffect } from "react";
import Desktop from "../components/Desktop";

const LandingPage = () => {
  useEffect(() => {
  console.log("👋 Curious dev? Code’s not cursed. Mostly.");
}, []);
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-purple-300 via-gray-300 to-blue-300">
      {/* Floating SVG decoration */}
      <svg
        className="absolute -top-32 -left-32 w-[600px] opacity-20 z-0 animate-float-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#A78BFA"
          d="M38.3,-58.6C49.1,-48.6,57.4,-36.7,62.5,-23.9C67.6,-11.2,69.4,2.5,65.2,15.8C60.9,29.1,50.6,42,38.1,50.2C25.6,58.3,10.8,61.7,-2.5,65C-15.9,68.2,-31.7,71.2,-44.4,65.1C-57.1,59,-66.6,43.9,-70.1,28.1C-73.5,12.3,-70.9,-4.4,-64.3,-19.7C-57.7,-35,-46.9,-48.9,-33.6,-59.2C-20.4,-69.4,-10.2,-76,1.5,-78C13.3,-80,26.5,-77.6,38.3,-58.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <main className="flex-1 flex justify-center items-center relative z-10">
        
        {/* Left Intro Block */}
       <div className="absolute top-24 left-6 sm:left-36 max-w-2xl text-left px-4 sm:px-0 animate-fade-in-up">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight drop-shadow-sm">
    I Build Cool Stuff So You Don’t Have To.
  </h1>
  <p className="mt-4 text-base md:text-lg text-gray-700">
Hi, I’m John part coder, part designer, part caffeine-fueled gremlin. I turn complex ideas into slick interfaces (sometimes on purpose).  </p>
  <p className="mt-2 text-base md:text-lg text-gray-700">
    This portfolio? It's more than a vibe. Poke around. Projects, pics, poems it's all cooked fresh.
  </p> 
</div>

        {/* Right Tech Stack Block */}
<div className="hidden sm:block absolute top-28 right-6 sm:right-16 z-30 w-[280px] bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-4 animate-fade-in-up delay-150 border border-white/40">
        <svg
        className="absolute -top-72 -left-32 w-[600px] opacity-20 z-0 animate-float-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#A78BFA"
          d="M38.3,-58.6C49.1,-48.6,57.4,-36.7,62.5,-23.9C67.6,-11.2,69.4,2.5,65.2,15.8C60.9,29.1,50.6,42,38.1,50.2C25.6,58.3,10.8,61.7,-2.5,65C-15.9,68.2,-31.7,71.2,-44.4,65.1C-57.1,59,-66.6,43.9,-70.1,28.1C-73.5,12.3,-70.9,-4.4,-64.3,-19.7C-57.7,-35,-46.9,-48.9,-33.6,-59.2C-20.4,-69.4,-10.2,-76,1.5,-78C13.3,-80,26.5,-77.6,38.3,-58.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="flex flex-col items-end">
        {/* Floating Emoji or Avatar */}
      
        
        <h3 className="text-lg font-bold text-gray-800 text-right">
          The Stack That Powers It All
        </h3>
        
        <p className="text-sm text-gray-700 mt-1 text-right leading-snug">
          React for UI, Node for logic, JS for life.
        </p>

        <div className="relative mt-4 flex justify-end items-center gap-3 flex-wrap">
  {/* Python */}
  <img src="https://cdn.simpleicons.org/python/000000" alt="Python" className="w-7 h-7 hover:scale-110 transition" />
  {/* TypeScript */}
  <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-7 h-7 hover:scale-110 transition" />
  {/* Node.js */}
  <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="Node.js" className="w-7 h-7 hover:scale-110 transition" />
  {/* Angular */}
  <img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular" className="w-7 h-7 hover:scale-110 transition" />
  {/* React */}
  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-7 h-7 hover:scale-110 transition" />
 
  {/* Tailwind CSS */}
  <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" alt="Tailwind CSS" className="w-7 h-7 hover:scale-110 transition" />
</div>



        {/* Optional Tagline Chip */}
        <div className="mt-4 bg-white/50 text-[11px] px-2 py-1 rounded-full text-gray-800 font-semibold shadow-sm">
          Built for creativity ✨
        </div>
      </div>
      </div>
        {/* Interactive Desktop Section */}
        <div className="sm:mb-16 z-20 animate-fade-in-up delay-300">
          <Desktop />
        </div>         
      </main>
    </div>
  );
};

export default LandingPage;
