import React, { useRef, useState } from "react";

// Components
import InputForm from "../components/editor/InputForm";
import Output from "../components/editor/Output";

let Editor = () => {
  let [outputText, setOutputText] = useState(
    "⚡ This box is hungry. Drop a draft and click generate!"
  );

  // Loading placeholder
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

  // Handle text generation
  let handleGenerate = async (v) => {
    // console.log(v);
    setOutputText(placeholder);

    // Build prompt function
    let buildPrompt = ({ draft, mode, platform, style, tone }) => {
      let tonePart = tone ? `Use a ${tone} tone.` : "";
      let stylePart = style ? `Follow these style instructions: ${style}` : "";

      // Mode-specific instructions
      let modePart = "";
      switch (mode) {
        case "Post":
          modePart = `
- Transform it into a polished standalone post designed for maximum engagement.  
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

      return `
You are an expert social media content creator.  
Your task is to take the following draft and rewrite ${draft} into a polished **${mode}** optimized for **${platform}**.  

Guidelines:  
- Preserve the original idea, but improve clarity, flow, and engagement.
- Avoid looking like it was made by AI
- ${modePart}  
- ${tonePart}  
- ${stylePart}  
`;
    };

    // Fetching response
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey);

    try {
      let fData = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b:free",
          messages: [
            {
              role: "user",
              content: buildPrompt(v),
            },
          ],
        }),
      });

      let data = await fData.json();
      let text = data.choices[0].message.content;
      setOutputText(text);
      console.log("Generated Data", text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {/* Input form */}
        <div className="mt-30 mb-20 mx-8 sm:mx-14 md:mx-20 lg:mx-80 xl:mx-106 2xl:mx-120">
          <InputForm generate={handleGenerate} />
        </div>
        <div className="my-20 mx-8 sm:mx-14 md:mx-20 lg:mx-80 xl:mx-106 2xl:mx-120">
          <Output outputText={outputText} />
        </div>
      </div>
    </>
  );
};

export default Editor;
