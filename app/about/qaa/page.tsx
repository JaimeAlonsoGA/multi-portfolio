import QuestionsAndAnswers from "@/components/qaa";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Title from "@/components/ui/title";

export default function Qaa() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
            <span className="w-full flex flex-row items-end justify-between">
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
                            <BreadcrumbLink href="/about">About</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage><span className="font-semibold">. . .</span></BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </span>
            <QuestionsAndAnswers />
        </main>
    )
}

