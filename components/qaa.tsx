'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const QuestionsAndAnswers = () => {
    return (
        <Accordion type="single" collapsible className="flex flex-col w-full min-w-full">
            {questionsAndAnswers.map((qa, i) =>
                <AccordionItem value={`item-${i}`} key={i} className="w-full">
                    <AccordionTrigger>
                        {qa.q}
                    </AccordionTrigger>
                    <AccordionContent>
                        {qa.a}
                    </AccordionContent>
                </AccordionItem>
            )}
        </Accordion>
    )
}

const questionsAndAnswers = [
    { q: "How would you describe yourself with a few tags", a: "Entrepreneur, creative, international, positive, peripheral-minded, apprentice, persistent" },
    { q: "Why did I decide to study cross-platform application development after an audio-related education?", a: "I believe that coding is the language of today, and I wanted to speak in my own words." },
    { q: "Do I specialize in audio software applications?", a: "No, I specialize in cross-platform applications and creating and implementing audio and music into interactive media." },
    { q: "Can I work as a technical sound designer or audio programmer?", a: "Yes, I can implement audio using middleware solutions like Wwise and FMOD." },
    { q: "In which area would I most like to work?", a: "Both fields are drops of honey for me." },
    { q: "What do I mean by cross-platform applications and interactive media?", a: "Cross-platform applications include web, mobile, and standalone apps, while interactive media refers to experiences like video games." },
    { q: "What do I consider my most valuable skill?", a: "My relentless ambition to continually improve and learn." },
    { q: "What is my total experience?", a: "I started producing music in 2015, began exploring interactive media in 2021, and ventured into software development in 2023." },
]

export default QuestionsAndAnswers;