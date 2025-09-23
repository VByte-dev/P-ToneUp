import React from "react";

let Settings = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-end">
          {/* Setting button */}
          <div className="bg-black w-10 h-10 flex justify-center items-center rounded">
            <i class="ri-settings-3-fill text-xl text-white"></i>
          </div>
        </div>
        {/* Input */}
        <div className="">
          <div className=" bg-purple-100 rounded-lg px-10 py-20 mt-10">
            <input
              type="text"
              placeholder="Enter the openrouter api"
              className="border-2 border-purple-200 rounded-md px-4 py-3 w-full outline-none bg-white/90 transition font-[space]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
