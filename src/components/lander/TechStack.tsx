import {
  SiBun,
  SiBurpsuite,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiHuggingface,
  SiMetasploit,
  SiNextdotjs,
  SiNodedotjs,
  SiOnnx,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiZsh,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function TechStack() {
  const stacks = {
    typescript: {
      icon: <SiTypescript size={32} />,
      text: "TypeScript",
      delay: 2,
    },
    nextjs: {
      icon: <SiNextdotjs size={32} />,
      text: "Next.js",
      delay: 3.5,
    },
    python: {
      icon: <SiPython size={32} />,
      text: "Python",
      delay: 2.5,
    },
    fastapi: {
      icon: <SiFastapi size={32} />,
      text: "FastAPI",
      delay: 2.15,
    },
    pytorch: {
      icon: <SiPytorch size={32} />,
      text: "PyTorch",
      delay: 1,
    },
    pandas: {
      icon: <SiPandas size={32} />,
      text: "pandas",
      delay: 1.5,
    },
    hf: {
      icon: <SiHuggingface size={32} />,
      text: "Hugging Face",
      delay: 1.5,
    },
    onnx: {
      icon: <SiOnnx size={32} />,
      text: "ONNX Runtime",
      delay: 1.1,
    },
    cpp: {
      icon: <SiCplusplus size={32} />,
      text: "C++",
      delay: 2,
    },
    csharp: {
      icon: <TbBrandCSharp size={32} />,
      text: "C#",
      delay: 3.25,
    },
    react: {
      icon: <SiReact size={32} />,
      text: "React",
      delay: 3,
    },
    express: {
      icon: <SiExpress size={32} />,
      text: "Express.js",
      delay: 4,
    },
    node: {
      icon: <SiNodedotjs size={32} />,
      text: "Node.js",
      delay: 1.5,
    },
    bun: {
      icon: <SiBun size={32} />,
      text: "Bun",
      delay: 2.75,
    },
    supabase: {
      icon: <SiSupabase size={32} />,
      text: "Supabase",
      delay: 3.25,
    },
    postgres: {
      icon: <SiPostgresql size={32} />,
      text: "PostgreSQL",
      delay: 2.75,
    },
    html: {
      icon: <SiHtml5 size={32} />,
      text: "HTML",
      delay: 3.75,
    },
    css: {
      icon: <SiCss3 size={32} />,
      text: "CSS",
      delay: 1.25,
    },
    docker: {
      icon: <SiDocker size={32} />,
      text: "Docker",
      delay: 4.25,
    },
    git: {
      icon: <SiGit size={32} />,
      text: "Git",
      delay: 1.75,
    },
    msf: {
      icon: <SiMetasploit size={32} />,
      text: "Metasploit",
      delay: 4.5,
    },
    burp: {
      icon: <SiBurpsuite size={32} />,
      text: "Burp Suite",
      delay: 2.5,
    },
    gcp: {
      icon: <SiGooglecloud size={32} />,
      text: "Google Cloud",
      delay: 1.5,
    },
    zsh: {
      icon: <SiZsh size={32} />,
      text: "Zsh",
      delay: 1,
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages and Tools I use</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid space-y-4">
          {Object.entries(stacks).map(([index, { icon, text, delay }]) => (
            <div className="flex items-center" key={index}>
              <div className="flex-shrink-0 my-auto">{icon}</div>
              <div className="flex-grow mx-2 my-auto relative overflow-hidden">
                <div className="max-h-[1px] border-[1px] border-[#252525] rounded-full" />
                <div
                  className="glowing-dot absolute top-1/2 -left-[10%] w-2 h-2 bg-white rounded-full animate-flowDot transform -translate-y-1/2"
                  style={{ animationDelay: `${delay}s` }}
                />
              </div>
              <div className="flex-shrink-0 my-auto">
                <span className="ml-auto font-bold text-lg">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
