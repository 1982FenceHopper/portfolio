import {
  SiExpress,
  SiPython,
  SiTypescript,
  SiFastapi,
  SiPandas,
} from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export default function OpenACHES() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>OpenACHES</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src="/openaches.png"
            alt=""
            className="p-1 border-[4px] rounded-xl"
            width={1920}
            height={1080}
          />
          <div className="mt-2 pb-2 font-bold border-b-[2px]">
            OpenACHES is a centralized, locally hostable syntactical-proxy
            server for accessing all data relevant to humanitarian and societal
            events. Humanitarian organizations tend to implement APIs with a ton
            of routes that require encoding tokens, putting in tons of query
            parameters and etc. So this project aims to ease that by providing
            simple and easy-to-remember API routes with very few query
            parameters, along with doing JSON data manipulation to aggregate all
            results partaining to a specific platform.
          </div>
          <div className="mt-4 font-bold text-2xl">Technologies Used:</div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiTypescript size={24} />
              </div>
              TypeScript
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiExpress size={24} />
              </div>
              Express.js
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPython size={24} />
              </div>
              Python
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiFastapi size={24} />
              </div>
              FastAPI
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPandas size={24} />
              </div>
              pandas
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
