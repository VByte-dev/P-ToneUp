import React, { useRef, useState } from "react";

// Components
import InputForm from "../components/editor/InputForm";
import Output from "../components/editor/Output";

let Editor = () => {
  let [outputText, setOutputText] = useState(
    "⚡ This box is hungry. Drop a draft and click generate!"
  );
  let [prevOutput, setPrevOutput] = useState(outputText);

  // Loading states shown while generating content
  const loadingPlaceholders = [
    "⚡ Thinking hard…",
    "🤔 Brewing some ideas...",
    "💡 Generating brilliance...",
    "🛠️ Crafting your content...",
    "⌛ Almost there…",
    "🚀 Launching your thoughts...",
    "🎨 Painting words…",
    "🧠 Flexing neural muscles...",
    "📜 Polishing your draft...",
    "⚙️ Crunching creativity...",
    "🔥 Cooking up magic...",
    "✨ Summoning inspiration...",
    "📝 Tidying your text…",
    "🎯 Targeting the perfect tone…",
    "🔮 Predicting the best words...",
  ];

  let placeholder =
    loadingPlaceholders[Math.floor(Math.random() * loadingPlaceholders.length)];

  // Handles text generation request
  let handleGenerate = async (v) => {
    setOutputText((prevV) => {
      setPrevOutput(prevV);
      return placeholder;
    });

    // Builds the AI prompt strictly based on user selections
    let buildPrompt = ({ draft, mode, platform, style, tone }) => {
      // Optional constraints
      let tonePart = tone ? `Use a ${tone} tone.` : "";
      let stylePart = style ? `Follow these style instructions: ${style}` : "";

      // Mode-specific instructions
      let modePart = "";
      switch (mode) {
        case "Post":
          modePart = `
- Transform the draft into a polished standalone post designed for maximum engagement.  
- Use platform-friendly formatting (hashtags, line breaks, emojis if natural).  
- Make it scannable and attention-grabbing.  
`;
          break;

        case "Reply":
          modePart = `
- Rewrite it into a natural, engaging reply.  
- Keep it conversational and concise.  
- Directly address the original post/comment context.  
- Avoid hashtags (they are uncommon in replies).  
`;
          break;

        case "Outreach":
          modePart = `
- Rewrite it into a personalized outreach message (like a DM).  
- Keep it professional, genuine, and human.  
- Encourage a response or connection.  
- Do NOT use hashtags, emojis, or formatting meant for public posts.  
`;
          break;

        default:
          modePart = "- Refine the draft into a polished piece of writing.";
      }

      // Final prompt
      return `
You are an expert social media content creator.  
Your task is to take the following draft and rewrite it into a polished **${mode}** optimized for **${platform}**.  

Draft:  
"""  
${draft}  
"""

Guidelines:  
- Only follow the selected options (mode, platform, tone, style).  
- Do NOT infer or change mode/platform/style from the draft text.  
- Preserve the original idea, but improve clarity, flow, and engagement.  
- Avoid looking like it was made by AI.
${modePart}  
${tonePart}  
${stylePart}  
`;
    };

    try {
      const response = await puter.ai.chat(buildPrompt(v), {
        model: "gpt-5-nano",
      });

      const text = response.message?.content || response.toString();

      setOutputText((prevV) => text);
      console.log("Generated Data", text);
    } catch (error) {
      console.error(error);
      setOutputText((prevV) => "❌ Something went wrong. Please try again.");
    }
  };

  // use-as-draft - Move generated output back into the draft
  let [generatedVal, setGeneratedVal] = useState();
  let handleUseAsDraft = (outputV) => {
    setGeneratedVal(outputV);
  };

  return (
    <>
      <div>
        {/* Input section */}
        <div className="mt-30 mb-20 mx-8 sm:mx-14 md:mx-20 lg:mx-80 xl:mx-106 2xl:mx-120">
          <InputForm generate={handleGenerate} generatedVal={generatedVal} />
        </div>

        {/* Output section */}
        <div className="my-20 mx-8 sm:mx-14 md:mx-20 lg:mx-80 xl:mx-106 2xl:mx-120">
          <Output
            outputText={outputText}
            prevOutput={prevOutput}
            handleUseAsDraft={handleUseAsDraft}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
