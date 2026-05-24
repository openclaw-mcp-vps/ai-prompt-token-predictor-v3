import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Token Predictor – Know Your Costs Before You Run",
  description: "Calculate exact token usage and costs for prompts across OpenAI, Anthropic, and more before execution. Save money, ship faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e9f4a961-0301-48bc-818f-a63561530e3d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
