import React, { useRef } from "react";

let Output = ({ outputText }) => {
  const editableRef = useRef(null);

  const handleCopy = () => {
    if (editableRef.current) {
      navigator.clipboard.writeText(editableRef.current.innerText);
      console.log("Copied:", editableRef.current.innerText);
    }
  };

  return (
    <div className="border-2 bg-purple-50 border-purple-400/50 rounded-md relative cursor-text min-h-100">
      {/* Output text */}
      <div
        contentEditable
        suppressContentEditableWarning={true}
        ref={editableRef}
        className="p-4 mb-14 font-[space] outline-none min-h-[100px] whitespace-pre-wrap break-words"
      >
        {outputText}
      </div>

      {/* Copy button */}
      <div className="absolute bottom-2 px-2 w-full">
        <button
          className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 font-[bricolage] text-white w-full h-11 rounded-md text-lg shadow-md transition"
          onClick={handleCopy}
        >
          Copy
          <span className="mx-1">
            <i className="ri-clipboard-line"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Output;
