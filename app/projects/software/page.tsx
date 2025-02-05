import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/components/ui/tag";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";


export default function Software() {
    return (
        <section>
            <Card className="flex flex-col max-w-sm">
                <CardHeader>
                    <CardTitle>CSV to Excel</CardTitle>
                    <CardDescription>Node program that converts a given csv into an Excel table</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap text-justify text-balance text-sm">
                    <Tag label="node" />
                    <Tag label="javascript" />
                    <Tag label="excel" />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <span className="flex flex-row gap-1 group">
                        <a href="" className="text-gray-500 text-xs group-hover:underline">Github</a>
                        <FaGithub />
                    </span>
                    <Link href={`projects/id`} className="text-xs text-gray-500 font-semibold">. . .</Link>
                </CardFooter>
            </Card>
        </section>
    )
}