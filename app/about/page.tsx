import { Separator } from "@/components/ui/separator";
import Tag from "../../components/ui/tag";
import Title from "@/components/ui/title";
import Timeline from "@/components/timeline";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
            <span className="w-full flex flex-row items-end justify-between">
                <Title title="About" />
                <Button variant={"link"} >
                    Q&A
                    {/* <IoIosArrowRoundForward /> */}
                </Button>
            </span>
            <span className="max-w-xl text-wrap text-justify font-[family-name:var(--font-geist-mono)]">
                <p className="text-xs">I’m a multidisciplinary professional with a growing passion for creating modern cross-platform applications and captivating audio experiences.</p>
            </span>
            <div className="flex flex-row gap-2">
                {tags.map((tag, i) =>
                    <div key={tag} className="flex flex-row gap-2">
                        {i !== 0 && <Separator orientation="vertical" />}
                        <Tag label={tag} />
                    </div>)}
            </div>
            <Timeline />
        </main>
    )
}

const tags = [
    "Applications",
    "Sound Design",
    "Music Production",
    "Interactive Audio",
]


// < Carousel opts = {{ loop: true }} className = "flex flex-col w-full max-w-xl break-words justify-center items-center" >
//             <CarouselContent>
//                 <CarouselItem>
//                     <div className="flex flex-row gap-4">
//                         <Image src={diploma} alt="Diploma" width={200} height={200} />
//                         <p className="text-xs">2020-2022 Advanced Diploma on <span className="font-semibold">Sound Engineerind and Music Production</span> on Abbey Road Institute Amsterdam</p>
//                     </div>
//                 </CarouselItem>
//                 <CarouselItem>
//                 </CarouselItem>
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//         </Carousel >
