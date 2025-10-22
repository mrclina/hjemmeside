import { getData, getFilm } from "@/lib/trening";
import { Link } from "lucide-react";

export default async function Prosjekt() {
    
    const film = await getData();
    return (
        <div>
            <div className="flex justify-start"><a href="https://www.imdb.com/chart/top/"
            className="text-2xl m-5">Mine fav filmer</a></div>
            <h1>Her er mine prosjekter</h1>
            <p>{film.Plot}</p>
            <img src={film.Poster} alt="" />
            <p className="mb-20">{film.Awards}</p>

            <div className="mb-100"><a href="https://www.godt.no/" className='text-2xl font-bold p-5'>Nettside med oppskrifter</a></div>

        </div>
    )
    const data = await getFilm();
    return (
        <div>

        </div>
    )


}
