import QuestionsAndAnswers from "@/components/qaa";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Title from "@/components/ui/title";

export default function Qaa() {
    return (
        <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center max-w-full md:max-w-4xl md:w-full">
            <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-end md:justify-between">
                <Title title="Q&A" />
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
                            <BreadcrumbPage><p className="font-semibold">. . .</p></BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <QuestionsAndAnswers />
        </section>
    )
}

