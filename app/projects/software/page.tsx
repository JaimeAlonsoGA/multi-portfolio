import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/components/ui/tag";
import { link } from "fs";
import Link from "next/link";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";



export default function Software() {
    return (
        <section className="w-full flex flex-wrap gap-4 max-h-screen overflow-y-auto scrollbar-hide">
            {projects.map((project, i) => {
                return (
                    <Card key={i} className="flex flex-col gap-2">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap text-justify text-balance text-sm">
                            {project.tags.map((tag, i) => <Tag key={i} label={tag} />)}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="flex flex-row gap-4 items-center">
                                {project.github && (
                                    <a href={project.github} target="_blank" className="flex flex-row gap-1 group items-center">
                                        <p className="text-gray-500 text-xs group-hover:underline">Github</p>
                                        <FaGithub />
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link.url} target="_blank" className="flex flex-row gap-1 group items-center">
                                        <p className="text-gray-500 text-xs group-hover:underline">Website</p >
                                        <p className="text-xs text-gray-500 font-semibold">{project.link.icon}</p >
                                    </a>
                                )}
                            </div>
                            {project.seeMore && (
                                <Link href={`projects/${project.title}`} className="text-xs text-gray-500 font-semibold">. . .</Link>
                            )}
                        </CardFooter>
                    </Card>
                )
            })}
        </section>
    )
}

interface projects {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    link?: {
        url: string;
        icon: React.ReactNode;
    }
    seeMore?: boolean;
}

const appIcon = <PiGooglePlayLogoLight size={16} />
const webIcon = <TbWorld size={16} />

const projects = [
    {
        title: "Mirto Internship",
        description: "Designed and developed end-to-end software solutions for MIRTO Group during my 9-month internship",
        tags: ["react", "javascript", "typescript", "node", "graphql", "express", "tailwindcss"],
        seeMore: true,
    },
    {
        title: "Alchimix",
        description: "Mobile app designed and developed to create custom cocktails with no limits",
        tags: ["react native", "javascript", "expo", "figma"],
        github: "https://github.com/JaimeAlonsoGA/alchimix",
        link: {
            url: "https://play.google.com/store/apps/details?id=com.sonicode.coctelapp&pcampaignid=web_share",
            icon: appIcon
        },
        seeMore: true,
    },
    {
        title: "Visu? Visu!",
        description: "Mobile app designed and developed hand-by-hand with a biologist to help study the visu exam",
        tags: ["react native", "javascript", "expo", "figma"],
        github: "https://github.com/JaimeAlonsoGA/bio-visu",
        seeMore: true,
    },
    {
        title: "Vivilife Landing Page",
        description: "Landing page developed for Vivilife, an app for coaches and communities",
        tags: ["react", "tailwindcss"],
        github: "https://github.com/JaimeAlonsoGA/vivilife_web",
        link: {
            url: "https://vivilife-web.web.app/",
            icon: webIcon
        }
    },
    {
        title: "This website!",
        description: "Yes, I wanted to make my own website from scratch",
        tags: ["typescript", "nextjs", "tailwindcss", "vercel"],
        github: "https://github.com/JaimeAlonsoGA/multi-portfolio",
    },
    {
        title: "Musickeyboard.io",
        description: "My attempt to make a web app to play music with your keyboard",
        tags: ["react", "javascript", "tailwindcss"],
        github: "https://github.com/JaimeAlonsoGA/musickeyboard_web",
        link: {
            url: "https://musickeyboard.web.app/",
            icon: webIcon
        }
    },
    {
        title: "Jaime360",
        description: "My old deprecated portfolio, also made from scratch",
        tags: ["react", "javascript", "tailwindcss", "firebase"],
        github: "https://github.com/JaimeAlonsoGA/portfolio",
        link: {
            url: "https://jaime360.web.app/",
            icon: webIcon
        }
    },
    {
        title: "El Boske, mixing studio",
        description: "Website designed and developed for a music studio in Madrid",
        tags: ["react", "javascript", "tailwindcss", "firebase"],
        github: "https://github.com/JaimeAlonsoGA/studio_web",
        link: {
            url: "https://elboskestudio.com/",
            icon: webIcon
        }
    }
]