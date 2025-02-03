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
    { q: "About yourself and your professional experience?", a: "Since 2015 in music production, since 2022 in sound design for interactive media and 2023 in software development." },
    { q: "Why I decided to study cross-plarform application developemnt after an audio related education?", a: "I wanted to expand my skillset and create my own applications." },
    { q: "Do I spezialice in audio applications?", a: "No, I spezialice in cross-platform applications and audio and music for Interactive media" },
    { q: "Can I perform as a technical sound designer or audio programmer?", a: "Yes, I can also implement audio using middleware applications." },
    { q: "I which area would I like to work most?", a: "I can eather developing cross-platforms applications or producing and implementing audio and music for interactive media" },
    { q: "What does cross-platform applications and interactive media means?", a: "Examples of these are web or phone applications and video games." },
    { q: "What I think is my most valuable skill?", a: "My restless ambition to improve and learn " },
]

export default QuestionsAndAnswers;