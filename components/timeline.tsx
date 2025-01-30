import { BriefcaseBusiness, Car, GraduationCap, MapPin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "./ui/carousel";
import Link from "next/link";

export const Timeline: React.FC = () => {
    const startYear = 2020;
    const years = 6;
    const yearWidth = 132;

    return (
        <div className="hidden w-full xl:flex flex-col">
            <Card>
                <CardHeader>
                    <CardTitle>Works and studies</CardTitle>
                    <CardDescription>For more details hover over the lines</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row">
                        {Array.from({ length: years }, (_, i) => (
                            <div key={i} style={{ width: `${yearWidth}px` }} className="font-[family-name:var(--font-geist-mono)] text-sm text-center border-x mb-4">
                                {startYear + i}
                            </div>
                        ))}
                    </div>
                    {timeline.map((item, k) => {
                        const duration = item.to - item.from;
                        const width = duration * yearWidth;
                        const marginLeft = (item.from - startYear) * yearWidth;
                        const Icon = item.tag === "e" ? GraduationCap : BriefcaseBusiness;
                        return (
                            <HoverCard key={k}>
                                <div style={{ width: `${width}px`, marginLeft: `${marginLeft}px` }}>
                                    <HoverCardTrigger className="group flex flex-row items-center py-1">
                                        <div className="flex flex-row items-center gap-1">
                                            <Icon className="w-4" />
                                            <p>●</p>
                                        </div>
                                        <span className="border w-full group-hover:border-2" />
                                        <p>●</p>
                                    </HoverCardTrigger>
                                </div>
                                <HoverCardContent>
                                    <div className="flex justify-between space-x-4">
                                        {/* <Avatar>
                                    <AvatarImage src="https://github.com/vercel.png" />
                                    <AvatarFallback>VC</AvatarFallback>
                                    </Avatar> */}
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">@{item.milestone}</h4>
                                            <p className="text-sm">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center pt-2">
                                                <MapPin className="mr-2 h-4 w-4 opacity-70" />{" "}
                                                <span className="text-xs text-muted-foreground text-gray-500 font-light">
                                                    {item.where}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        );
                    })}
                </CardContent>
                <CardFooter className="flex flex-row justify-between items-end">
                    <p className="text-xs text-gray-500 font-light">Personal or non-professional education/work is not shown here. For more info download Resume or go to <Link className="hover:underline" href="../projects">Projects</Link></p>
                    <Button>
                        Resume
                    </Button>
                </CardFooter>
            </Card>
        </div >
    );
};

export const TimelinePhone = () => {
    return (
        <div className="w-full flex flex-col xl:hidden gap-8">
            {timeline.map((item, k) => {
                const Icon = item.tag === "e" ? GraduationCap : BriefcaseBusiness;
                return (
                    <div key={k} className="flex flex-col gap-2 items-start">
                        <span className="text-xs">{item.from} - {item.to}</span>
                        <div className="flex flex-row items-center gap-2">
                            <Icon className="w-4" />
                            <span>{item.milestone}</span>
                        </div>
                        <span className="text-xs">{item.description}</span>
                        <div className="flex items-center pt-2">
                            <MapPin className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground text-gray-500 font-light">
                                {item.where}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

/*tags:
    e: studies
    g: graduation
    w: work
*/

const timeline = [
    { from: 2020, to: 2022, milestone: "Sound Engineering and Music Production", where: "Abbey Road Institute Amsterdam", description: "Enrolled on Abbey Road Institue Amsterdam to learn Sound Engineering and Music Production", tag: "e" },
    { from: 2022, to: 2024, milestone: "Sound Engineer", where: "Hey Mickey!", description: "Worked on Hey Mickey! as Sound Engineer supervising private events", tag: "w" },
    { from: 2023, to: 2026, milestone: "Cross-platform Application Development", where: "University Francisco De Victoria", description: "Enrolled on Universidad Francisco De Victoria to learn Cross-platform Application Development", tag: "e" },
    { from: 2024, to: 2026, milestone: "Full-stack Software Developer", where: "MIRTO Group", description: "Worked on MIRTO Group designing and developing end-to-end software solutions", tag: "w" },
]