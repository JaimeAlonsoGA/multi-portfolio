export const ReclaimTheSurface = () => <iframe className="rounded-md max-w-64 hover:max-w-xl" src="https://itch.io/embed/1436926" width="552" height="167"><a href="https://rubikow.itch.io/reclaim-the-surface">Reclaim The Surface by Rubikow, Matt Kimball, Jaco van Hemert, kellythekraken, SpudTatterson, Pasha Pichugin, Reed, Jaime Alonso, Talizar</a></iframe>

export const SuckedSouls = () => <iframe className="rounded-md max-w-64 hover:max-w-xl" src="https://itch.io/embed/1550071" width="552" height="167"><a href="https://thekaoser.itch.io/suck-souls">Sucked Souls by TheKaoser, Jaime Alonso, Bakina</a></iframe>

export const TheGiftOfFire = () => <iframe className="rounded-md max-w-64 hover:max-w-xl" height="167" src="https://itch.io/embed/1478318" width="552"><a href="https://mkimball.itch.io/gift-of-fire">The Gift of Fire by Matt Kimball, Rubikow, Dusk, A. I. Maniac, Jaco van Hemert, Jaime Alonso, 🐉kaijujube🐉</a></iframe>

export const TimeKeeper = () => <iframe className="rounded-md max-w-64 hover:max-w-xl" height="167" src="https://itch.io/embed/1480089" width="552"><a href="https://threeraccoonsgames.itch.io/timekeeper">Timekeeper by Three Raccoons, Ant Vanden, TheKaoser, Flat White Canvas, Ash, Jaime Alonso, Sfapun</a></iframe>


import Image from 'next/image';
import bubble from "../public/images/bubble-delirium.png";
import getem from "../public/images/getem.jpg";

export const ItchGames = () => {
    return (
        <div className="flex flex-wrap">
            <SuckedSouls />
            <TimeKeeper />
            <TheGiftOfFire />
            <ReclaimTheSurface />
        </div>
    )
}

export const GlobalGameJamGames = () => {
    return (
        <div className='flex flex-wrap'>
            <div className='border rounded-md p-3'>
                <Image src={bubble} alt="bubble-delirium" width={200} height={200} />
            </div>
            <div className='border rounded-md p-3'>
                <Image src={getem} alt="bubble-delirium" width={200} height={400} />
            </div>
        </div>
    )
}