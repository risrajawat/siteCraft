import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
const History = [];

export async function generateWebsite(prompt) {
  try {
    History.push({
      role: "user",
      parts: [{ text: prompt }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: History,
      config: {
        systemInstruction: `
        You are an expert React + Tailwind developer.
        Generate **functional React components** (JSX) with Tailwind CSS based on the user's prompt.
        Rules:
        1. Code must be clean, responsive, modular.
        2. Use Tailwind classes directly (no external CSS files).
        3. Include semantic HTML elements (header, main, footer etc).
        4. Do not add explanations, only return JSX code.
        
        Example:
        {
          "commands": ["npm create vite@latest", "cd website", "npm install tailwindcss @tailwindcss/vite"],
          "code": {
            "src/App.js": "import React from 'react';\\nexport default function App(){ return <div>Hello</div> }",
            "src/index.css": "@import "tailwindcss";
            "vite.config.js": "import tailwindcss from '@tailwindcss/vite",\\nexport default { plugins: [tailwindcss()] };
          }
        }
          
        User Prompt: ${prompt}
          
        `,
      },
    });
    History.push({
      role: "model",
      parts: [{ text: response.text }],
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
