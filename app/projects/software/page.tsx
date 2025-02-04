import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Software() {
    return (
        <section>
            <Card className="flex flex-col max-w-sm">
                <CardHeader>
                    <CardTitle>CSV to Excel</CardTitle>
                    <CardDescription>Node program that converts a given csv into an Excel table</CardDescription>
                </CardHeader>
                <CardContent className="text-justify text-balance text-sm">
                </CardContent>
            </Card>
        </section>
    )
}