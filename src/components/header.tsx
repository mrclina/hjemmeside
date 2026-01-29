import Link from "next/link";
import { ModeToggle } from "./ui/darkmode_button";


export default function Header() {
    return (
        <div className="flex justify-between p-6 border-b-2 mb-20 bg-secondary">
            <Link href="/" className="font-extrabold">Hjem</Link>
            <div className="flex justify-center"><Link href="https://en.wikipedia.org/wiki/Emmanuel_Macron" className="bg-fuchsia-300 p-2 border-2 rounded-2xl font-bold">Link</Link></div>
            <a href="/prosjekter" className="font-extrabold">Prosjekter</a>
            <a href="https://www.imdb.com/chart/top/" className="font-extrabold flex justify-end">Filmer</a>
            <ModeToggle/>
        </div>
    )
}
