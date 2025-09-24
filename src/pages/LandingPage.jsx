import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 sm:px-12 py-20 overflow-hidden">
      {/* Background: radial gradient + abstract blob */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#fbf8ff,_#f8fafc)] opacity-70"></div>
        <svg
          className="absolute right-0 bottom-0 w-[48rem] max-w-none opacity-20 transform translate-x-24 translate-y-24"
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

      {/* Content wrapper */}
      <div className="w-full flex flex-col items-center text-center max-w-4xl my-4">
        {/* Heading */}
        <h1
          className="max-w-3xl w-full font-[tiemposLight] text-gray-900 leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          Turn Your Ideas into{" "}
          <span className="font-[tiemposLightItalic] text-amber-950">
            Polished, Share-Ready Content
          </span>
        </h1>

        {/* Supporting description */}
        <p className="mt-10 max-w-2xl w-full text-base sm:text-lg md:text-xl font-[tiemposLight] text-gray-700 leading-relaxed">
          ToneUp is your AI-powered writing companion. Instantly refine rough
          drafts into captivating posts, professional replies, and persuasive
          outreach messages - perfectly tailored for X, LinkedIn, Instagram, and
          more.
        </p>
      </div>

      {/* Feature list */}
      <ul className="mt-8 max-w-xl w-full mx-auto flex flex-col gap-5 px-4 bg-amber-50 p-8 rounded-2xl border-2 border-amber-100 shadow-sm">
        <li className="flex items-start gap-3">
          <span className="mt-1 text-amber-950 text-xl font-bold">✓</span>
          <span className="text-gray-700 text-lg sm:text-xl font-[space]">
            Instantly transform simple drafts into engaging, professional posts.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 text-amber-950 text-xl font-bold">✓</span>
          <span className="text-gray-700 text-lg sm:text-xl font-[space]">
            Customize tone, style, and platform for maximum audience impact.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 text-amber-950 text-xl font-bold">✓</span>
          <span className="text-gray-700 text-lg sm:text-xl font-[space]">
            Receive intelligent AI suggestions for posts, replies, and outreach.
          </span>
        </li>
      </ul>

      {/* CTA */}
      <div className="mt-12">
        <button
          aria-label="Launch ToneUp"
          onClick={() => navigate("/app")}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-[tiemposLight] text-white text-sm sm:text-base bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Launch ToneUp
        </button>
      </div>

      {/* Footer credit */}
      <div className="mt-32 text-amber-900 font-base font-[bricolage]">
        <a
          href="https://vbyte-dev.vercel.app"
          className="flex justify-center items-center gap-2"
          target="_blank"
        >
          <span>Crafted by VByte</span>
          <i className="ri-heart-3-fill hover:rotate-45 transition-transform duration-150"></i>
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
