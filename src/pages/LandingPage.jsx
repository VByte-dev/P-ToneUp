import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-amber-50 px-6 sm:px-12 py-24 overflow-hidden select-none">
      {/* Background: radial gradient + abstract blob */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#fbf8ff,_#f8fafc)] opacity-80"></div>
        <svg
          className="absolute right-0 bottom-0 w-[48rem] max-w-none opacity-20 translate-x-24 translate-y-24"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g transform="translate(300,300)">
            <path
              d="M120,-180C160,-140,180,-80,190,-10C200,60,200,120,160,160C120,200,60,220,0,230C-60,240,-120,230,-160,200C-200,170,-220,120,-220,70C-220,20,-200,-30,-170,-80C-140,-130,-100,-170,-60,-200C-20,-230,20,-260,80,-240C140,-220,80,-220,120,-180Z"
              fill="#a78bfa"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col items-center text-center max-w-4xl my-6">
        {/* Heading */}
        <h1
          className="max-w-3xl w-full font-[tiemposLight] text-gray-900 leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
        >
          From Rough Drafts to{" "}
          <span className="font-[tiemposLightItalic] text-purple-700">
            Polished
          </span>{" "}
          Posts in Seconds
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-xl w-full text-base sm:text-lg md:text-xl font-[tiemposLight] text-gray-700 leading-relaxed">
          ToneUp is your AI writing companion. Craft engaging posts,
          professional replies, and persuasive outreach without overthinking the
          words.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-14">
        <button
          aria-label="Launch ToneUp"
          onClick={() => navigate("/app")}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-[tiemposLight] text-white text-sm sm:text-base bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 hover:shadow-purple-300/40 transition-all duration-200"
        >
          Launch ToneUp
        </button>
      </div>

      {/* Footer */}
      <div className="mt-28 text-amber-900 font-base font-[bricolage] ">
        <a
          href="https://vbyte-dev.vercel.app"
          className="flex justify-center items-center gap-1 hover:gap-3 transition-all duration-200"
          target="_blank"
        >
          <span>Crafted by VByte</span>
          <i class="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
