import { Skillset } from "@/app/about/page";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Skill: React.FC<{ skillset: Skillset }> = ({ skillset }) => {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader>
        <CardTitle>{skillset.field}</CardTitle>
        <CardDescription>{skillset.about}</CardDescription>
      </CardHeader>
      <CardContent className="h-full text-justify text-balance text-sm">
        <div className="flex flex-col w-full h-full rounded-lg p-2">
          <ul className="list-inside h-full flex flex-col justify-center text-pretty gap-4  ml-2">
            {skillset.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <CardFooter className="text-xs flex justify-between gap-2">
            {skillset.keywords.map((keyword) => (
              <Badge variant={"secondary"}>{keyword}</Badge>
            ))}
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skill;


