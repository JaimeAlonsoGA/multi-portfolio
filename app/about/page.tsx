import { Separator } from "@/components/ui/separator";
import Tag from "../../components/ui/tag";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import diploma from "../../public/images/diploma.webp";

export default function About() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
            <div className="flex flex-row gap-2">
                {tags.map((tag, i) =>
                    <div key={tag} className="flex flex-row gap-2">
                        {i !== 0 && <Separator orientation="vertical" />}
                        <Tag label={tag} />
                    </div>)}
            </div>
            <Carousel className="flex flex-col w-full max-w-xl break-words justify-center items-center">
                <CarouselContent>
                    <CarouselItem>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Years of experience</AccordionTrigger>
                                <AccordionContent>
                                    Since 2015 in music production, 2022 in sound design.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>What I haven't done</AccordionTrigger>
                                <AccordionContent>
                                    Work as an employee at a game development studio and release a commercial game.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" >
                                <AccordionTrigger>What I have done</AccordionTrigger>
                                <AccordionContent className="break-words">
                                    Design, produce and implement sound and music for minigames and game jam games.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex flex-row gap-4">
                            <Image alt="" src={diploma} width={200} height={200} />
                            <p className="text-xs">2020-2022 Advanced Diploma on Sound Engineerind and Music Production on Abbey Road Institute Amsterdam</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    )
}

const tags = [
    "Video Games",
    "Sound Design",
    "Music Production",
    "Interactive Audio",
]

