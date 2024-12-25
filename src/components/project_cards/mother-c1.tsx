import {
  SiNumpy,
  SiOnnx,
  SiPandas,
  SiPython,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export default function MotherC1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mother C1</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src="/predictions.png"
            alt=""
            className="p-1 border-[4px] rounded-xl"
            width={1920}
            height={1080}
          />
          <div className="mt-2 pb-2 font-bold border-b-[2px]">
            Mother C1 is an LSTM Deep Neural Network that predicts the food
            prices of various countries suffering from food insecurity
            worldwide. One of it&apos;s most prominent (albeit experimental and
            highly alpha) features, is it&apos;s ability to forecast future
            prices currency-agnostically, eliminating the need to convert local
            currencies to a stable exchange (e.g. USD, EUR) prior to forecasting
            future values.
          </div>
          <div className="mt-4 font-bold text-2xl">Technologies Used:</div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPython size={24} />
              </div>
              Python
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPytorch size={24} />
              </div>
              PyTorch
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiPandas size={24} />
              </div>
              pandas
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiNumpy size={24} />
              </div>
              numpy
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiOnnx size={24} />
              </div>
              ONNXRuntime
            </div>
            <div className="inline-flex py-auto gap-1 bg-muted p-2 rounded-lg border-[2px] border-[#6f6f6f]">
              <div className="my-auto mr-1">
                <SiScikitlearn size={24} />
              </div>
              scikit-learn
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
