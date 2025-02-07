import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Skills: React.FC = () => {
  return (
    <div className="h-full flex flex-row">
      <Card className="flex flex-col w-full">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>Main tasks I can do very well</CardDescription>
        </CardHeader>
        <CardContent className="h-full text-justify text-balance text-sm">
          <div className="w-full flex flex-col gap-4 xl:flex-row text-balance h-full">
            {skillset.map((item, i) => (
              <div className="flex flex-col w-1/2 h-full border rounded-lg p-4">
                <h1 className="font-semibold">{item.field}</h1>
                <ul className="list-inside list-disc h-full flex flex-col justify-center text-pretty gap-4  ml-4">
                  {item.skills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
                <span className="text-xs flex justify-between gap-2">
                  {item.keywords.map((keyword) => (
                    <Badge variant={"secondary"}>{keyword}</Badge>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const skillset = [
  {
    field: "Software",
    skills: [
      "Develope end-to-end cross-platform apps —web, phone, desktop",
      "Design modern, responsive and user-friendly apps",
      "Create software solutions usign modern flows",
    ],
    keywords: ["Full-stack", "Cross-platform apps", "UX", "Solutions"],
  },
  {
    field: "Audio",
    skills: [
      "Compose, record, mix and master multi-purpose music",
      "Design sound effects and atmospheres",
      "Implement dynamic audio into interactive media",
    ],
    keywords: [
      "Sound designer",
      "Video games",
      "Music producer",
      "Sound engineer",
    ],
  },
];

export default Skills;
