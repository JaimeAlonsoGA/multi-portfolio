'use client'

import Button from "./ui/button";
import { IoMdPlay } from "react-icons/io";
import { IoStopSharp } from "react-icons/io5";

const CTA: React.FC = () => {
    return (
        <div className="flex flex-row justify-between">
            <Button label="Projects" src="/email.svg" style="primary" IconOff={IoMdPlay} IconOn={IoStopSharp} />
            <Button label="Sound" src="/email.svg" IconOff={IoMdPlay} IconOn={IoStopSharp} />
        </div>
    )
}

export default CTA;