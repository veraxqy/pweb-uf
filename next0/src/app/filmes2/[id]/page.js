export default async function Filme({ params }){
    const { id } = params;
    const res = await fetch(`http://www.omdbapi.com/?apikey=c9facd29&i=${id}`);
    const data = await res.json()

    if (!data || data.Response === "False") {
        return <div>Filme não encontrado</div>
    }

    return (
        <div>
            <h1>{data.Title}</h1>
            <p>{id}</p>
            <img src={data.Poster}/>
            <p>{data.Year}<br/>{data.Type}</p>
        </div>
    )
}