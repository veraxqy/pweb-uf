// Passo 3
'use client'
import useSWR from 'swr'
import Link from 'next/link'
export default function Movies2(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=c9facd29&s=guardian`, fetcher)
    if (error) return <div>Falha na requisição</div>
    if (!data) return <div>Carregando...</div>
    return (
        <div>
            {data.Search.map((m) => <div key={m.imdbID}><Link href={`/filmes2/${m.imdbID}`}>{m.Title}</Link></div>)}
        </div>
    )
}
// Passo 2
async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}