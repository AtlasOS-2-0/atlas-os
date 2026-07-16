import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `
You are Atlas OS AI Architect.

Return your answer ONLY in this format:

FILE: filename.ext
<file content>

FILE: another_file.ext
<file content>

Do not use markdown.
Do not explain anything.
Only return files.
`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      response:
        data.choices?.[0]?.message?.content ||
        "No response generated.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        response: "AI request failed.",
      },
      {
        status: 500,
      }
    );
  }
}