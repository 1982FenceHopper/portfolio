import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Header() {
  return (
    <Card className="z-10 text-balance">
      <CardHeader>
        <CardTitle className="bg-white bg-clip-text text-transparent [text-shadow:_0_0_5px_#ffffff,_0_0_10px_#ffffff]">
          Nashat Yafi
        </CardTitle>
        <CardDescription>
          &#x2022;&nbsp;Full-Stack Software Developer
          <br />
          &#x2022;&nbsp;Machine Learning Enthusiast
          <br />
          &#x2022;&nbsp;Cybersecurity Enthusiast
          <br />
          ...
          <br />
          &#x2022;&nbsp;Also, I&apos;m a simple guy (But I can make fancy
          things)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-2 grid grid-cols-4 gap-2">
          <Link
            href="https://github.com/1982FenceHopper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f] transition-all scale-[1] hover:scale-[1.02]"
          >
            <div className="my-auto mr-1">
              <SiGithub size={24} />
            </div>
            GitHub
          </Link>
          <Link
            href="/resume.pdf"
            download={true}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f] transition-all scale-[1] hover:scale-[1.02]"
          >
            <div className="my-auto mr-1">
              <IoDocumentTextOutline size={24} />
            </div>
            Resume
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
