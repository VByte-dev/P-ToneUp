import React, { useEffect, useRef, useState } from "react";

let Output = ({ outputText, prevOutput, handleUseAsDraft }) => {
  const editableRef = useRef(null);

  let [output, setOutput] = useState(outputText);

  // Handle copy
  const handleCopy = () => {
    if (editableRef.current) {
      navigator.clipboard.writeText(editableRef.current.innerText);
      setCopyInd(true);
    }
  };

  // Handle scroll
  let handleTScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle copy indicator
  let [copyInd, setCopyInd] = useState(false);

  useEffect(() => {
    setCopyInd(false);
  }, [output]);
  let handleInput = () => setCopyInd(false);

  // Handle Undo Redo
  let [isUndo, setIsUndo] = useState(false);
  let handleUndo = () => {
    setOutput(prevOutput);
    setIsUndo(true);
  };
  let handleRedo = () => {
    setOutput(outputText);
    setIsUndo(false);
  };

  // Handle use-as-draft
  let onUseAsDraft = () => {
    handleUseAsDraft(output);
    handleTScroll();
  };

  useEffect(() => {
    setOutput(outputText);
  }, [outputText]);

  return (
    <div className="border-2 bg-purple-50 border-purple-400/50 rounded-md relative cursor-text min-h-100 selection:bg-purple-300 selection:text-black">
      {/* Tools */}
      <div className="flex m-2 justify-end gap-2">
        {/* Undo */}
        <button
          className="bg-purple-100 w-8 h-8 flex justify-center items-center rounded-lg p-4 border-2 border-purple-200 hover:bg-purple-200 active:bg-purple-200"
          onClick={handleUndo} title="Undo"
        >
          <i className="ri-arrow-go-back-line text-purple-800"></i>
        </button>
        {/* Redo */}
        <button
          className="bg-purple-100 w-8 h-8 flex justify-center items-center rounded-lg p-4 border-2 border-purple-200 hover:bg-purple-200 active:bg-purple-200"
          onClick={handleRedo} title="Redo"
        >
          <i className="ri-arrow-go-forward-line text-purple-800"></i>
        </button>
        {/* Use as draft */}
        <button
          className="bg-purple-100 w-8 h-8 flex justify-center items-center rounded-lg p-4 border-2 border-purple-200 hover:bg-purple-200 active:bg-purple-200"
          onClick={onUseAsDraft} title="Use as draft"
        >
          <i className="ri-pencil-fill text-purple-800"></i>
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
