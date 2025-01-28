'use client'

import { IoMdPlay } from "react-icons/io";
import { IoStopSharp } from "react-icons/io5";
import { Button } from "./ui/button";

const Header: React.FC = () => {
    return (
        <header className="flex flex-row absolute w-full top-0 items-center p-4">
            {/* <div className="relative mr-auto text-gray-500 text-sm">
                <p>Spain</p>
            </div> */}
            <div className="flex flex-col relative ml-auto items-center">
                <Button variant="outline" >
                    <IoMdPlay />
                </Button>
                <a href="" className="text-xs text-gray-500 hover:underline">Soundbank</a>
            </div>
        </header>
    )
}

export default Header;