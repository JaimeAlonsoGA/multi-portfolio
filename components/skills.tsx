import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const Skills: React.FC = () => {
    return (
        <div className="h-full flex flex-row">
            <Card className="flex flex-col w-full">
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>Topics of interest and Tools</CardDescription>
                </CardHeader>
                <CardContent className="text-justify text-balance text-sm">
                    <div className="w-full flex flex-col gap-4 xl:flex-row justify-between text-balance">
                        {skills.map((skill, i) =>
                            <div className="border p-4 rounded-lg hover:bg-gray-50 shadow flex flex-col gap-2" key={i}>
                                <h3 className="font-medium text-sm">{skill.skill}</h3>
                                <ul key={i} className="list-inside list-disc text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
                                    {skill.tools.map((tool, j) =>
                                        <li key={tool}>{tool}</li>
                                    )}
                                </ul>
                            </div>
                        )
                        }
                    </div>
                </CardContent>
                <CardFooter className="text-gray-500 font-light text-xs">
                </CardFooter>
            </Card>
        </div>
    )
}

const skills = [
    { skill: "Frontend", tools: ["HTML", "CSS", "JavaScript", "React", "React Native", "Next.js"] },
    { skill: "Backend", tools: ["Node.js", "Express.js", "GraphQL", "Relational Data Bases"] },
    { skill: "Audio", tools: ["Cubase", "VSTs", "Effects", "Wwise", "FMOD", "Microphones", "Instruments"] },
    { skill: "Other", tools: ["Git", "GitHub", "Github Copilot", "VS Code", "Figma", "Unreal Engine 5", "Unity"] }
]

export default Skills