const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const portfolioContext = `
Muzamil Niaz is a software engineer specializing in JavaScript, TypeScript, React, Next.js, Redux, Tailwind CSS, Node.js, ASP.NET, ASP.NET MVC, REST APIs, SQL Server, MongoDB, Three.js, Git, Docker, and Figma.

Experience:
- Buch International Hospital: leads frontend engineering for a hospital management system with 16+ clinical and administrative modules, 250+ screens, React, TanStack Query, Tailwind CSS, and ASP.NET Core APIs.
- TechScope: React software engineer working on responsive products, interfaces, and web application architecture.
- Atrule Technologies: software engineering, reusable UI, responsive systems, collaboration, and code review.
- Soft Infinity: frontend interfaces, UX collaboration, and browser performance.

Representative work includes Placed.today recruitment tools, TechScope's training and talent platform, Quality Shop marketplace, AtRule remote developer hub, AtCommerce e-commerce, WynShop retail order management PWA, VERO event management, landing pages, NopCommerce stores, and UI/UX designs.

Contact: muzamilniaz.pro@gmail.com, WhatsApp/phone +92 316 6844292.
`;

const instructions = `
You are the portfolio assistant for Muzamil Niaz. Be warm, concise, practical, and honest.

Use only the supplied portfolio facts when discussing Muzamil. Never invent employers, results, clients, qualifications, availability, testimonials, or project details. If a fact is unknown, say that it is not listed and direct the visitor to contact Muzamil.

For a visitor's project idea:
1. Briefly explain a sensible way to build it.
2. Give a realistic ballpark cost in USD and timeline.
3. State the assumptions and the biggest variables affecting price.
4. Clearly say it is a planning estimate, not a final quote.
5. Mention recurring hosting, third-party, payment, messaging, or AI usage costs when relevant.
6. Ask at most two useful follow-up questions when the scope is too vague.

Do not promise that Muzamil personally accepts a timeline or price. Do not claim an estimate is exact. Avoid markdown tables and keep answers under 300 words.

Portfolio facts:
${portfolioContext}
`;

const getOutputText = (response) => {
  if (response.output_text) return response.output_text;

  return (response.output || [])
    .flatMap((item) => item.content || [])
    .filter((item) => item.type === "output_text")
    .map((item) => item.text)
    .join("\n")
    .trim();
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });
  if (!process.env.OPENAI_API_KEY) return json(503, { error: "AI is not configured" });

  try {
    const body = JSON.parse(event.body || "{}");
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const input = messages
      .filter((message) => ["user", "assistant"].includes(message.role))
      .slice(-10)
      .map((message) => ({
        role: message.role,
        content: String(message.content || "").slice(0, 2000),
      }));

    if (!input.length) return json(400, { error: "A message is required" });

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.5",
        instructions,
        input,
        max_output_tokens: 700,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI request failed", data?.error?.message || response.status);
      return json(502, { error: "The AI service could not answer" });
    }

    const reply = getOutputText(data);
    if (!reply) return json(502, { error: "The AI returned an empty answer" });

    return json(200, { reply });
  } catch (error) {
    console.error("Chat function failed", error);
    return json(500, { error: "Unable to process the chat request" });
  }
};
