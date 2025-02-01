import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import portrait from "@/public/images/cat.png";
import Link from "next/link";

const Summary: React.FC = () => {
  return (
    <div className="h-full flex flex-row justify-between">
      <Card className="basis-3/5">
        <CardHeader>
          <CardTitle>Note</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="text-justify text-balance text-sm">
          <p className="flex text-balance">
            As a dual professional, it may seem that my skills are divided and have no individual value.
            In reality, my mastery of both software and audio is what makes me unique, and I have proven expertise in both.
            <br />
            <br />
            Also, through my studies, I have discovered how much there is yet to discover and the constant process of growth and innovation that comes with passion.
            <br />
            <br />
            Mastering one field is valuable—bridging two is powerful.
          </p>
        </CardContent>
        <CardFooter className="text-gray-500 font-light text-xs">
          <span>If you already have some questions, go to the <Link className="hover:underline" href="./qaa">Q&A</Link> section.</span>
        </CardFooter>
      </Card>
      <Card className="flex basis-2/6 items-center justify-center">
        <CardContent className="text-justify text-sm">
          <Image src={portrait} alt="Portrait" width={150} height={150} className="rounded-xl " />
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;