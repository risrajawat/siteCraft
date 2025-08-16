import * as dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const ai = new GoogleGenAI({});
const History = [];

async function chatting(prompt) {
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

  console.log("\n");
  console.log(response.text);
}

const downloadCode = () => {
  const zip = new JSZip();
  for (const [filename, content] of Object.entries(generatedCode.code || {})) {
    zip.file(filename, content);
  }
  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "website.zip");
  });
};

async function main() {
    await chatting();
}

await main();
