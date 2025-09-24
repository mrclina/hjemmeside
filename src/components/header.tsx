import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between p-6 border-b-2 mb-20">
            <Link href="/" className="font-extrabold">Hjem</Link>
            <a href="/prosjekter" className="font-extrabold">Prosjekter</a>
        </div>
    )
}
