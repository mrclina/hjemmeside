import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1 className="text-2xl text-red-600 m-6">Heisann</h1>
    <p className="text-3xl">Jeg heter</p>
    <p className="text-4xl text-pink-400">Marcelina</p>
    <a href="https://echo.uib.no">echo</a>
    <a href="http://localhost:3001/prosjekter">prosjekter</a>
    </div>
  )
}
