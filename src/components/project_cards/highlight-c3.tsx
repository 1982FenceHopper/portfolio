import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiOnnx,
  SiTypescript,
  SiReact,
  SiPython,
} from "react-icons/si";

export default function HighlightC3() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Highlight C3</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src="/highlight_cthree.png"
            alt=""
            className="p-1 border-[4px] rounded-xl"
            width={1920}
            height={1080}
          />
          <div className="mt-2 pb-2 font-bold border-b-[2px]">
            This project aims to better understand global crises by analysing
            current statically available data from the United Nations Food And
            Agriculture Organization and dynamically performing predictive
            analysis on the given data to predict future outcomes, as well as
            using AI to better summarize content for audiences with limited
            technical knowledge, so that everyone has a chance to get a better
            understanding on what is going on around the world, which allows
            them to make a greater impact.
          </div>
          <div className="mt-4 font-bold text-2xl">Technologies Used:</div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiNextdotjs size={24} />
              </div>
              Next.js
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiExpress size={24} />
              </div>
              Express.js
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPostgresql size={24} />
              </div>
              PostgreSQL
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiOnnx size={24} />
              </div>
              ONNX Runtime
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiTypescript size={24} />
              </div>
              TypeScript
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiReact size={24} />
              </div>
              React.js
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPython size={24} />
              </div>
              Python
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
