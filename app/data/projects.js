import MonochromeSwitcher from "../../assets/monoswitcher.png"
import Mumei from "../../assets/mumei.png";
import CityRushHour from "../../assets/city-rush-hour.png";
import CoinPulse from "../../assets/Coin-pulse-alt.png";

const projects = [
    {
        projname: "Monochrome-Switcher",
        imgsource: MonochromeSwitcher,
        link: "https://github.com/Luc1l1us/monochrome-switcher",
        projdesc: "Building a multi-model AI orchestration platform that enables users to interact with up to five LLMs simultaneously through a unified, tab-based interface with normalized API handling and concurrent response streaming.",
        techbadges: [
            "Go",
            "React",
            "Wails",
            "OpenRouter API",
            "Gemini API",
            "Linux",
        ],
    },
    {
        projname: "Mumei",
        imgsource: Mumei,
        link: "https://github.com/Luc1l1us/MumeiBot",
        projdesc: "Developed a Python-based Discord bot integrating the OpenAI API and the Instructure Canvas REST API to enable AI-driven conversations, automated moderation, and real-time assignment tracking.",
        techbadges: [
            "Python",
            "Discord.py",
            "OpenAI API",
            "Canvas REST API",
        ],
    },
    {
        projname: "City Rush Hour",
        imgsource: CityRushHour,
        link: "https://github.com/Luc1l1us/CapstoneProject",
        projdesc: "Built a high-fidelity traffic simulation in Unity that integrates A* pathfinding, behavioral traffic modeling, and real-world congestion scenarios to create dynamic, lifelike vehicle systems.",
        techbadges: [
            "C#",
            "Unity",
            "A* Algorithm",
            "Nagel-Schreckenberg Model",
        ],
    },
    {
        projname: "Coin Pulse",
        imgsource: CoinPulse,
        link: "https://github.com/Luc1l1us/Forex_app",
        projdesc: "Developed a scalable cryptocurrency tracking app powered by Flutter and Flask, utilizing Firebase and the TwelveData API to provide real-time price updates and portfolio analytics.",
        techbadges: [
            "Flutter",
            "Python",
            "Flask",
            "Firebase",
            "Twelve Data API",
        ],
    },
]

export default projects;