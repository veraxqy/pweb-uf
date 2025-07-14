'use client'
import Form from "next/form"
import { useState } from "react";
import './estilo.css'

export default function Home(){
    // Ex. 1
    const [searchKey, setSearchKey] = useState("")
    const [resultMovies, setResultMovies] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleAction(formData){
        const titleSearchKey = formData.get("titleSearchKey")
        const httpsRes = await fetch(`http://www.omdbapi.com/?apikey=c9facd29&s=${titleSearchKey}`)
        const jsonRes = await httpsRes.json()
        setResultMovies(jsonRes.Search || [])
        setLoading(false)
    }
    return (
        <div className="container">
            <MovieForm handleAction={handleAction} loading={loading} searchKey={searchKey} setSearchKey={setSearchKey}/>
            <MovieTable movies={resultMovies}/>
        </div>
    )
}

export function MovieForm({handleAction, loading, searchKey, setSearchKey}){
    return (
        <Form action={handleAction} className="formulario">
            <label htmlFor="idTitleSearchKey" className="block text-lg font-semibold">Título</label>
            <input id="idTitleSearchKey" className="border border-gray-300 px-3 py-2 rounded w-full" name="titleSearchKey" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
            <button type="submit" disabled={loading} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{loading ? 'Carregando...' : 'Pesquisar'}</button>

        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <table className="tabela">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Ano</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((m) => (
                    <tr key={m.imdbID}>
                        <td>{m.Title}</td>
                        <td>{m.Year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}