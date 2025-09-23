import React from "react";
import { useNavigate } from "react-router-dom";

let LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 sm:px-12">
      
      {/* Hero Heading */}
      <h1 className="text-5xl sm:text-6xl font-[space] text-gray-900 text-center mb-6">
        Welcome to Your Next Adventure
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl font-[bricolage] text-gray-600 text-center max-w-xl mb-10">
        Build, create, and explore your ideas with lightning speed. Start your journey now.
      </p>

      {/* CTA Button */}
      <button
        className="px-8 py-4 rounded-lg font-[space] text-white text-lg sm:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/app")}
      >
        Launch App
      </button>

      {/* Footer */}
      <div className="mt-20 text-gray-400 text-sm font-[bricolage] text-center">
        © 2025 YourName. All rights reserved.
      </div>
    </div>
  );
};

export default LandingPage;
