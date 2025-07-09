// Ex. 1 e 2
export default async function Home({searchParams}) {
    // Passo 3
    const {titleSearchKey = 'guardian', yearSearch = '1999'} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=c9facd29&s=${titleSearchKey}&y=${yearSearch}`)
    const data = await res.json()

    return (
        <div>
            <div>
                {data.Search.map((m) => <div key={m.imdbID}><img src={m.Poster}/> <br/>{m.Title} -- {m.Year}</div>)}
            </div>
        </div>
    )
}

/*function transformar(elemento) {
    return (<div>{elemento.Title} -- {elemento.Year}</div>)
}*/