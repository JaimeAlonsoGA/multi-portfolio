import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import abbey from "@/public/images/abbey.webp";
import dam from "@/public/images/dam.png";

const Diplomas: React.FC = () => {
    return (
        <div className="hidden w-full xl:flex flex-row justify-between gap-4">
            {diplomas.map((diploma, i) =>
                <Card key={i}>
                    <CardHeader>
                        <CardTitle>{diploma.subject}</CardTitle>
                        <CardDescription>{diploma.diploma}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="flex flex-row gap-4">
                            <Image src={diploma.image} alt="Diploma" width={diploma.width} height={diploma.height} />
                        </div>
                    </CardContent>
                    {/* <CardFooter className="flex flex-row justify-between items-end">
                        <Button>
                            Resume
                        </Button>
                    </CardFooter> */}
                </Card>
            )}
        </div >
    )
}

const diplomas = [
    { subject: "Sound Engineerind and Music Production", diploma: "Advanced Diploma", image: abbey, width: 120, height: 120 },
    { subject: "Cross-platform Application Development", diploma: "Higher Education", image: dam, width: 250, height: 100 },
]

export default Diplomas;