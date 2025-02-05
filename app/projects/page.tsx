import Featured from "@/components/featured";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Projets() {
    return (
        <section className="flex flex-col gap-4 row-start-2 items-center sm:items-start justify-center max-w-full md:max-w-4xl">
            <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-end md:justify-between">
                <div className="flex flex-col-reverse md:flex-col items-start gap-4">
                    <div className="flex flex-row gap-8 text-sm text-gray-500 text-left">
                        <Link href="projects/software">Software</Link>
                        <Link href="projects/audio">Audio</Link>
                    </div>
                    <Title title="Projects" />
                </div>
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
                                        <BreadcrumbLink href="/about">About</BreadcrumbLink>
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
            <Featured />
        </section >
    )
}