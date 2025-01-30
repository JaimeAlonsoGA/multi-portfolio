import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { GlobalGameJamGames, ItchGames } from "./games";

const Projects = () => {
    return (
        <div className="flex flex-col items-center">
            <HoverCard>
                <HoverCardTrigger><Button variant="link">@itch.io</Button></HoverCardTrigger>
                <HoverCardContent>
                    <h4 className="text-sm font-semibold">@itch.io</h4>
                    <p className="text-sm">
                        Game Jams and Minigames - Sound design, music and implementation.
                    </p>
                    <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-zinc-500">
                            Joined December 2021
                        </span>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <ItchGames />
            <HoverCard>
                <HoverCardTrigger><Button variant="link">@GlobalGameJam</Button></HoverCardTrigger>
                <HoverCardContent>
                    <h4 className="text-sm font-semibold">@GlobalGameJam</h4>
                    <p className="text-sm">
                        Yearly participation on the Global Game Jam
                    </p>
                    <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-zinc-500">
                            Joined January 2023
                        </span>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <GlobalGameJamGames />
        </div>
    )
}
export default Projects;