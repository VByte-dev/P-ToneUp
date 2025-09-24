import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * ToneUpSection — balanced SaaS hero
 * - fluid/clamped heading to avoid stacking
 * - subtle background blob for premium feel
 * - centered section, left-aligned list items for readability
 * - compact CTA
 *
 * Make sure to place fonts in /public/fonts and add the @font-face CSS (see snippet).
 */
const ToneUpSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 sm:px-12 py-20 overflow-hidden">
      {/* subtle background layer (soft radial + svg blob) */}
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

      {/* content container - constrained so lines wrap nicely */}
      <div className="w-full flex flex-col items-center text-center max-w-4xl my-4">
        {/* Fluid heading using clamp: min, preferred (vw), max */}
        <h1
          className="max-w-3xl w-full font-[bricolage] text-gray-900 leading-[1.04]"
          style={{
            fontSize: "clamp(2.25rem, 5.2vw, 4.25rem)",
          }} /* ~36px → ~68px */
        >
          Transform your drafts into perfect content
        </h1>

        <p className="mt-12 max-w-2xl w-full text-base sm:text-lg md:text-xl font-[bricolage] text-gray-600 leading-relaxed">
          ToneUp is your AI writing companion - instantly turn rough ideas into
          polished, ready-to-post content tailored for every platform.
        </p>
      </div>

      {/* points — centered container, items are left-aligned for readability */}
      <ul className="mt-4 max-w-xl w-full mx-auto flex flex-col gap-4 px-2 bg-amber-50 p-8 rounded-xl border-2 border-amber-100">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg"></span>
          <span className="text-gray-700 text-lg sm:text-xl font-[space]">
            • Generate engaging posts instantly from simple drafts.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg"></span>
          <span className="text-gray-700 text-lg sm:text-xl font-[space]">
            • Customize tone, style, and platform so every post fits perfectly.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg"></span>
          <span className="text-gray-700 text-lg sm:text-xl font-[space]">
            • Get smarter suggestions with interactive AI improvements.
          </span>
        </li>
      </ul>

      {/* CTA */}
      <div className="mt-12">
        <button
          aria-label="Launch ToneUp"
          onClick={() => navigate("/app")}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-[bricolage] text-white text-sm sm:text-base md:text-base bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md hover:scale-105 transition-transform duration-200"
        >
          Launch ToneUp
        </button>
      </div>

      {/* Footer */}
      <div className="mt-28 text-amber-900 font-base font-[bricolage] ">
        <a
          href="https://vbyte-dev.vercel.app"
          className="flex justify-center items-center gap-2"
          target="_blank"
        >
          {" "}
          <h1>Crafted by VByte</h1>
          <i class="ri-heart-3-fill hover:rotate-45 transition-transform duration-100"></i>
        </a>
      </div>
    </section>
  );
};

export default ToneUpSection;
