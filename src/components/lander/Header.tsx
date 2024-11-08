import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";

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
    </Card>
  );
}
