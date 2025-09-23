export default async function handler(req, res) {
  try {
    // Forward request to OpenRouter
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // stored in Vercel Env
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "API request failed" });
  }
}
