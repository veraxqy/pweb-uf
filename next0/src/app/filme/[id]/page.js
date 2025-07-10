// Ex. 1
// Passo 3
'use client'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
export default function Filme(){
    const { id } = useParams()
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=c9facd29&i=${id}`, fetcher)
    if (error) return <div>Falha na requisição</div>
    if (!data) return <div>Carregando...</div>
    return (
        <div>
            <h1>{data.Title}</h1>
            <p>{id}</p>
            <img src={data.Poster}/>
            <p>{data.Year}<br/>{data.Type}</p>
        </div>
    )
}
// Passo 2
async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}