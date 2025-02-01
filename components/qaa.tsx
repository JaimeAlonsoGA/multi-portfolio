'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const QuestionsAndAnswers = () => {
    return (
        <Accordion type="single" collapsible className="flex flex-col w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>About yourself and your professional experience?</AccordionTrigger>
                <AccordionContent>
                    Since 2015 in music production, since 2022 in sound design for interactive media and 2023 in software development.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>What haven't I done yet?</AccordionTrigger>
                <AccordionContent>
                    I have yet to work on a commercial interactive media project.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What have I done?</AccordionTrigger>
                <AccordionContent className="break-words">
                    Developed and published multi-platform applications for companies and personal projects. Produced music for streaming platforms. Designed & implemented sound and music for non-cmmercial interactive media.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Do I have any other skills?</AccordionTrigger>
                <AccordionContent>
                    Yes! I've built my own projects as an entrepreneur, I have experience in design using Figma, and I also play the cello in an orchestra and sing in a choir.                                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>What do you think about yourself?</AccordionTrigger>
                <AccordionContent>

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>Can I collaborate remotely?</AccordionTrigger>
                <AccordionContent>
                    Absolutely! I’ve collaborated with developers worldwide, delivering high-quality sound assets, music and implementation remotely.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

// Can you tell me about yourself and your professional experience ?
//     What are your biggest strengths and weaknesses ?
//         Why do you want to work at this company ?
//             What are some of your key career achievements ?
//                 Do you have experience working in a team or remotely ?

export default QuestionsAndAnswers;