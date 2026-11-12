export function TechBadge({ name }) {
  const techColors = {
    TypeScript: "bg-[#3178c6] text-white",
    JavaScript: "bg-[#f7df1e] text-black",
    Python: "bg-[#3776ab] text-white",
    Go: "bg-[#00add8] text-white",
    "C++": "bg-[#00599c] text-white",
    "C#": "bg-[#68217a] text-white",
    Java: "bg-[#ed8b00] text-white",
    Dart: "bg-[#0175c2] text-white",
    PHP: "bg-[#777bb4] text-white",
    "Next.js": "bg-[#000000] text-white",
    React: "bg-[#81e1fc] text-white",
    "Tailwind CSS": "bg-[#06b6d4] text-white",
    Flutter: "bg-[#02569b] text-white",
    Wails: "bg-[#000000] text-white",
    Unity: "bg-[#000000] text-white",
    "Express.js": "bg-[#000000] text-white",
    Firebase: "bg-[#ffca28] text-black",
    MySQL: "bg-[#4479a1] text-white",
    Linux: "bg-[#000000] text-white",
    Flask: "bg-[#000000] text-white",
    "OpenRouter API": "bg-[#000000] text-white",
    "Canvas REST API": "bg-[#e34f26] text-white",
    "OpenAI API": "bg-[#412991] text-white",
    "Gemini API": "bg-[#4285f4] text-white",
    "Twelve Data API": "bg-[#ff6b35] text-white",
    "Discord.py": "bg-[#000000] text-white",
    "A* Algorithm": "bg-[#f59e0b] text-white",
    "Nagel-Schreckenberg Model": "bg-[#4b7dcc] text-white",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[name] || "bg-gray-500/15 text-gray-400"}`}
    >
      {name}
    </span>
  );
}
