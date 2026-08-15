export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  heroText: string;
  overview: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  tags: string[];
  accent: string;
  image: string;
  heroImage: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "ai-employee-digital-twin",
    title: "AI Employee Digital Twin",
    category: "Tools",
    description:
      "AI-powered digital employee automating emails, workflows, tasks, and daily productivity.",
    heroText:
      "An AI-powered digital employee designed to streamline repetitive operations and free teams to focus on high-impact work.",
    overview:
      "The AI Employee Digital Twin is a productivity-focused assistant that creates a digital representation of routine work patterns, helping individuals and teams manage communication, execution, and decision support across everyday workflows.",
    problemStatement:
      "Modern teams lose significant time to repetitive tasks such as emails, status updates, scheduling, and operational coordination. These delays create friction, reduce focus, and limit team velocity.",
    solution:
      "The platform centralizes task handling and automates recurring actions by combining AI reasoning with workflow orchestration. It enables proactive assistance for scheduling, communication, and daily execution using context-aware automation.",
    keyFeatures: [
      "AI-led email and workflow automation",
      "Smart task orchestration for day-to-day operations",
      "Context-aware productivity assistance",
      "Opportunities for scalable business process support",
    ],
    techStack: ["MERN", "Gen AI", "N8N", "Prompt Engineering", "Automation"],
    tags: ["MERN", "Gen AI", "N8N"],
    accent: "from-violet-400/30 to-transparent",
    image: "/AI-twin.jpg",
    heroImage: "/Twin.jpg",
    demoUrl: "https://example.com/ai-employee-digital-twin",
  },
  {
    slug: "intervue",
    title: "Intervue",
    category: "Gen AI Full Stack Development",
    description:
      "AI-powered mock interview platform generating personalized questions, feedback, and performance insights",
    heroText:
      "A smart interview platform that helps candidates practice with realistic, adaptive AI-generated scenarios and actionable feedback.",
    overview:
      "Intervue is a Gen AI interview experience designed to simulate realistic technical rounds, provide personalized questioning, and help users improve their preparation with data-driven feedback.",
    problemStatement:
      "Candidates often struggle to practice interviews in a realistic, targeted way. Generic preparation methods lack context, feedback quality, and personalization needed for effective improvement.",
    solution:
      "Intervue blends conversational AI with interview logic to build tailored questions based on the user profile and skill level. It gives structured feedback to improve performance over time.",
    keyFeatures: [
      "Adaptive mock interview questions",
      "AI-based performance review and feedback",
      "Role-specific interview simulation",
      "Continuous improvement through personalized insights",
    ],
    techStack: ["MERN", "Gen AI", "React", "Node.js", "AI Workflows"],
    tags: ["MERN", "Gen AI"],
    accent: "from-cyan-300/25 to-transparent",
    image: "/ai-interview-bot.webp",
    heroImage: "/AI-Interview.jpg",
    demoUrl: "https://intervue-ai-sigma.vercel.app/",
  },
  {
    slug: "ai-virtual-assistant",
    title: "AI Virtual Assistant",
    category: "Full Stack Development",
    description:
      "AI-powered virtual assistant enabling real-time voice interaction, personalization, and intelligent responses.",
    heroText:
      "A conversational assistant that brings real-time interaction, personalized responses, and intelligent task support into a seamless web experience.",
    overview:
      "The AI Virtual Assistant project explores how conversational interfaces can feel natural and useful for users across daily digital interactions. It combines voice-friendly assistance with personalization and responsive UX.",
    problemStatement:
      "Many digital experiences still rely on static interfaces that fail to provide dynamic, helpful, and human-like support in real time. Users need faster, more natural ways to interact with systems.",
    solution:
      "The project creates an AI-powered virtual assistant built for real-time interaction, personalization, and context-aware responses. It helps create meaningful conversations and efficient user experiences.",
    keyFeatures: [
      "Real-time conversational experience",
      "Personalized assistant behavior",
      "Smart response generation and interaction flow",
      "UX-focused integration for web applications",
    ],
    techStack: ["MERN", "AI Assistant", "Prompt Engineering", "Web UX"],
    tags: ["MERN"],
    accent: "from-amber-200/25 to-transparent",
    image: "/virtual.png",
    heroImage: "/Assistant.jpg",
    demoUrl: "https://example.com/ai-virtual-assistant",
  },
];
