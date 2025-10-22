import { Divide, FileVideo } from "lucide-react";

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=d5fabfee"

export async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data

}

const url2 = "https://www.omdbapi.com/?apikey=70a7bd85&s=superman&page=1"

export async function getFilm() {
    const res = await fetch(url2);
    const film = await res.json();
    return film
}