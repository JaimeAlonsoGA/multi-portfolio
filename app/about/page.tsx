import { Separator } from "@/components/ui/separator";
import Tag from "../../components/ui/tag";
import Title from "@/components/ui/title";
import { TimelinePhone, Timeline } from "@/components/timeline";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";
import Diplomas from "@/components/diplomas";
import Summary from "@/components/summary";
import Skills from "@/components/skills";

export default function About() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center max-w-full md:max-w-4xl">
            <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-end md:justify-between">
                <Title title="About" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="hover:text-black flex items-center gap-1">
                                    Home
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage><span className="font-semibold">. . .</span></BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="about/qaa">Q&A</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="text-pretty font-[family-name:var(--font-geist-mono)]">
                <p className="text-xs">I am a multidisciplinary professional with a growing passion for creating modern cross-platform software applications and captivating audio experiences for interactive media.</p>
            </div>
            <div className="w-full flex flex-wrap md:flex-row gap-2 justify-between">
                {tags.map((tag, i) =>
                    <div key={tag} className="flex flex-row gap-2">
                        {i !== 0 && <Separator orientation="vertical" className="hidden xl:flex" />}
                        <Tag label={tag} />
                    </div>)}
            </div>
            <Carousel opts={{ align: "start", loop: true }} orientation="vertical" className="hidden xl:flex">
                <CarouselContent className="-mt-1 h-[380px]">
                    <CarouselItem >
                        <Timeline />
                    </CarouselItem>
                    <CarouselItem>
                        <Skills />
                    </CarouselItem>
                </CarouselContent >
                <CarouselNext />
            </Carousel >
            <div className="xl:hidden flex flex-col gap-8">
                <TimelinePhone />
                <Skills />
            </div>
        </main >
    )
}

const tags = [
    "Software",
    "Applications",
    "Cross-platform",
    "Sound Design",
    "Music Production",
    "Interactive Media",
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
