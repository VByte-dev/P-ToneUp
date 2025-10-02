import React, { useEffect, useRef, useState } from "react";

let Output = ({ outputText, prevOutput }) => {
  const editableRef = useRef(null);

  let [output, setOutput] = useState(outputText);

  // Copy indicator
  let [copyInd, setCopyInd] = useState(false);

  const handleCopy = () => {
    if (editableRef.current) {
      navigator.clipboard.writeText(editableRef.current.innerText);
      setCopyInd(true);
    }
  };

  // Handle copy indicator
  useEffect(() => {
    setCopyInd(false);
  }, [output]);
  let handleInput = () => setCopyInd(false);

  // Handle Undo Redo
  let handleUndo = () => {
    setOutput(prevOutput);
  };
  let handleRedo = () => {
    setOutput(outputText);
  };

  useEffect(() => {
    setOutput(outputText);
  }, [outputText]);

  return (
    <div className="border-2 bg-purple-50 border-purple-400/50 rounded-md relative cursor-text min-h-100 selection:bg-purple-300 selection:text-black">
      {/* Undo Redo buttons */}
      <div className="flex m-2 justify-end gap-2">
        <button
          className="bg-purple-100 w-8 h-8 flex justify-center items-center rounded-lg p-4 border-2 border-purple-200 hover:bg-purple-200 active:bg-purple-200"
          onClick={handleUndo}
        >
          <i className="ri-arrow-go-back-line text-purple-800"></i>
        </button>
        <button
          className="bg-purple-100 w-8 h-8 flex justify-center items-center rounded-lg p-4 border-2 border-purple-200 hover:bg-purple-200 active:bg-purple-200"
          onClick={handleRedo}
        >
          <i className="ri-arrow-go-forward-line text-purple-800"></i>
        </button>
      </div>
      {/* Output text */}
      <div
        contentEditable
        suppressContentEditableWarning={true}
        ref={editableRef}
        onInput={handleInput}
        className="p-4 mb-14 font-[space] outline-none min-h-[100px] whitespace-pre-wrap break-words"
      >
        {output}
      </div>

      {/* Copy button */}
      <div className="absolute bottom-2 px-2 w-full select-none">
        <button
          className={`flex justify-center items-center bg-gradient-to-r font-[bricolage] text-white w-full h-11 rounded-md text-lg shadow-md transition ${
            copyInd
              ? " from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              : "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
          }`}
          onClick={handleCopy}
        >
          {copyInd ? "Copied" : "Copy"}
          <span className="mx-1">
            <i className="ri-clipboard-line"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Output;
