import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const Featured: React.FC = () => {
    return (
        <div>
            <h2 className="text-sm font-[family-name:var(--font-geist-mono)] mb-4 text-center">2025's Featured</h2>
            <div className="w-full flex flex-row justify-between gap-4">
                <Card className="flex flex-col w-full">
                    <CardHeader>
                        <CardTitle>MIRTO Back Office / Intranet</CardTitle>
                        <CardDescription>Designed and created end-to-end software solutions during my 9-months intership at MIRTO Group</CardDescription>
                    </CardHeader>
                    <CardContent className="text-justify text-balance text-sm">
                    </CardContent>
                </Card>
                <Card className="flex flex-col w-full">
                    <CardHeader>
                        <CardTitle>Interactive Media Demo Reel</CardTitle>
                        <CardDescription>Topics covered in this video are: sound design, music production and audio implementation</CardDescription>
                    </CardHeader>
                    <CardContent className="text-justify text-balance text-sm">
                        <iframe className="rounded-xl max-w-sm" width="560" height="315" src="https://www.youtube-nocookie.com/embed/uMCGGwNkLDA?si=L-WBtEcXoN3UnH7o&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Featured;