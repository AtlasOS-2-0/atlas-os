import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log(
  "Gemini Key Loaded:",
  !!process.env.GEMINI_API_KEY
);
    const { prompt } = await req.json();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Atlas OS AI Architect.
Generate concise software engineering responses.

User Request:
${prompt}`,
                },
              ],
            },
          ],
        }),
      }
    );

const data = await response.json();

console.log("Gemini Status:", response.status);
console.log("Gemini Response:", JSON.stringify(data, null, 2));
    const aiResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Atlas AI could not generate a response.";

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        response: "AI request failed.",
      },
      { status: 500 }
    );
  }
}