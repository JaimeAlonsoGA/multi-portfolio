import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const Skills: React.FC = () => {
    return (
        <div className="h-full flex flex-row">
            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="text-justify text-balance text-sm">
                </CardContent>
                <CardFooter className="text-gray-500 font-light text-xs">
                </CardFooter>
            </Card>
        </div>
    )
}

export default Skills