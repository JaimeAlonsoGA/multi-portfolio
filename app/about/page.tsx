import { Separator } from "@/components/ui/separator";
import Tag from "../../components/ui/tag";
import Title from "@/components/ui/title";
import { TimelinePhone, Timeline } from "@/components/timeline";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Diplomas from "@/components/diplomas";
import Summary from "@/components/summary";
import Skills from "@/components/skills";
import Skill from "@/components/skills";

export default function About() {
  return (
    <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center max-w-full md:max-w-4xl">
      <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-end md:justify-between">
        <Title title="About" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <span className="font-semibold">. . .</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="about/qaa">Q&A</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full flex flex-wrap md:flex-row gap-2 justify-between">
        {tags.map((tag, i) => (
          <div key={tag} className="flex flex-row gap-2">
            <Tag label={tag} />
          </div>
        ))}
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        orientation="vertical"
        className="hidden xl:flex"
      >
        <CarouselContent className="-mt-1 h-[380px]">
          <CarouselItem>
            <Timeline />
          </CarouselItem>
          {skillset.map((item, i) => (
            <CarouselItem key={i} className="h-full flex flex-row">
              <Skill skillset={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <div className="xl:hidden flex flex-col gap-8">
        <TimelinePhone />
      </div>
    </section>
  );
}

const tags = [
  "Software",
  "Applications",
  "Cross-platform",
  "Sound Design",
  "Music Production",
  "Interactive Media",
];

const skillset = [
  {
    field: "Software",
    skills: [
      "Develope end-to-end cross-platform apps —web, phone, desktop",
      "Design modern, responsive and user-friendly apps",
      "Create software solutions usign modern flows",
    ],
    keywords: [
      "Full-stack",
      "Cross-platform apps",
      "UX",
      "Solutions",
      "Development",
    ],
    about: "De-coding the future with the lastest techs",
  },
  {
    field: "Audio",
    skills: [
      "Compose, record, mix and master multi-purpose music",
      "Design sound effects and atmospheres",
      "Implement dynamic audio into interactive media",
    ],
    keywords: [
      "Sound design",
      "Video games",
      "Music production",
      "Sound engineering",
    ],
    about: "adios",
  },
] as Skillset[];

export interface Skillset {
  field: string;
  skills: string[];
  keywords: string[];
  about: string;
}
