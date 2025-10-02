import React, { useRef, useState } from "react";

let InputForm = (props) => {
  // Destructuring props
  let { generate } = props;

  // Handle scroll
  let handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const [formData, setFormData] = useState({
    draft: "",
    mode: "Post",
    tone: "Professional", // default tone
    style: "",
    platform: "X",
  });

  const [isModeOpen, setIsModeOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isToneOpen, setIsToneOpen] = useState(false);

  const modes = ["Post", "Reply", "Outreach"];
  const platforms = ["X", "LinkedIn"];
  const tones = [
    "Professional",
    "Formal",
    "Casual",
    "Friendly",
    "Confident",
    "Persuasive",
    "Motivational",
    "Inspirational",
    "Optimistic",
    "Encouraging",
    "Empathetic",
    "Respectful",
    "Polite",
    "Authoritative",
    "Bold",
    "Assertive",
    "Direct",
    "Informative",
    "Educational",
    "Conversational",
    "Playful",
    "Humorous",
    "Witty",
    "Sarcastic",
    "Edgy",
    "Dramatic",
    "Exciting",
    "Urgent",
    "Neutral",
    "Objective",
    "Critical",
    "Caring",
    "Supportive",
    "Storytelling",
    "Celebratory",
  ];

  // Handle dropdown selects
  const handleSelect = (field, value, close) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    close(false);
  };

  // Handle text inputs
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle generate
  let handleGenerate = () => {
    console.log("Data", formData);
    generate(formData);
    handleScroll();
  };

  // Reusable dropdown arrow
  const DropdownIcon = ({ open }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4b0082"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-100 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <>
      <div className="space-y-6 selection:bg-purple-300 selection:text-black">
        {/* Draft input */}
        <div className="font-[space] border-2 border-purple-400/50 p-0.5 rounded-tl-md rounded-bl-md rounded-tr-md">
          <textarea
            placeholder="Paste or write your draft here..."
            className="  rounded-tl-md rounded-bl-md rounded-tr-md px-4 py-4 w-full transition outline-none min-h-50"
            rows={5}
            value={formData.draft}
            onChange={(e) => handleChange("draft", e.target.value)}
          />
        </div>

        {/* Platform selector */}
        <div className="select-none">
          <div className="flex flex-col text-sm relative w-full">
            <button
              type="button"
              onClick={() => setIsPlatformOpen(!isPlatformOpen)}
              className="group flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-zinc-800 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition font-[space] text-base border-2 border-purple-200"
            >
              <span>{formData.platform}</span>
              <DropdownIcon open={isPlatformOpen} />
            </button>

            <div className="flex justify-center">
              {isPlatformOpen && (
                <ul className="absolute top-full mt-2 w-5/6 bg-white border-2 border-purple-200 shadow-md rounded-lg py-2 z-10 font-[space] px-2 motion-preset-slide-down motion-duration-100">
                  {platforms.map((platform) => (
                    <li
                      key={platform}
                      className={`px-3 my-1 py-2 cursor-pointer rounded-md transition ${
                        platform === formData.platform
                          ? "bg-purple-500 text-white"
                          : "hover:bg-purple-100 hover:text-purple-800"
                      }`}
                      onClick={() =>
                        handleSelect("platform", platform, setIsPlatformOpen)
                      }
                    >
                      {platform}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Mode selector */}
        <div className="select-none">
          <div className="flex flex-col text-sm relative w-full">
            <button
              type="button"
              onClick={() => setIsModeOpen(!isModeOpen)}
              className="group flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-zinc-800 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition font-[space] text-base border-2 border-purple-200"
            >
              <span>{formData.mode}</span>
              <DropdownIcon open={isModeOpen} />
            </button>

            <div className="px-2 flex justify-center">
              {isModeOpen && (
                <div className="w-5/6 absolute top-full mt-2 max-h-56 overflow-hidden rounded-lg border-2 border-purple-200 shadow-md z-10 font-[space] motion-preset-slide-down motion-duration-100">
                  <ul className="max-h-56 overflow-y-auto bg-white py-2 px-2">
                    {modes.map((mode) => (
                      <li
                        key={mode}
                        className={`px-3 my-1 py-2 cursor-pointer rounded-md transition ${
                          mode === formData.mode
                            ? "bg-purple-500 text-white"
                            : "hover:bg-purple-100 hover:text-purple-800"
                        }`}
                        onClick={() =>
                          handleSelect("mode", mode, setIsModeOpen)
                        }
                      >
                        {mode}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tone selector */}
        <div className="select-none">
          <div className="flex flex-col text-sm relative w-full">
            <button
              type="button"
              onClick={() => setIsToneOpen(!isToneOpen)}
              className="group flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-zinc-800 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition font-[space] text-base border-2 border-purple-200"
            >
              <span>{formData.tone}</span>
              <DropdownIcon open={isToneOpen} />
            </button>

            <div className="px-2 flex justify-center">
              {isToneOpen && (
                <div className="w-5/6 absolute top-full mt-2 max-h-56 overflow-hidden rounded-md border-2 border-purple-200 shadow-md z-10 font-[space] motion-preset-slide-down motion-duration-100">
                  <ul className="max-h-56 overflow-y-auto bg-white py-2 px-2">
                    {tones.map((tone) => (
                      <li
                        key={tone}
                        className={`px-3 my-1 py-2 cursor-pointer rounded-md transition ${
                          tone === formData.tone
                            ? "bg-purple-500 text-white"
                            : "hover:bg-purple-100 hover:text-purple-800"
                        }`}
                        onClick={() =>
                          handleSelect("tone", tone, setIsToneOpen)
                        }
                      >
                        {tone}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Style instructions */}
        <div>
          <input
            type="text"
            placeholder="Tweak style, clarity, or impact..."
            className="border-2 border-purple-300 rounded-md px-4 py-3 w-full outline-none bg-white/90 transition font-[space]"
            value={formData.style}
            onChange={(e) => handleChange("style", e.target.value)}
          />
        </div>

        {/* Generate Btn */}
        <div className="pt-2">
          <button
            className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 font-[bricolage] text-white w-full h-11 rounded-md text-lg shadow-md transition select-none"
            onClick={handleGenerate}
          >
            Generate
            <span className="mx-1">
              <i className="ri-pencil-line"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default InputForm;
