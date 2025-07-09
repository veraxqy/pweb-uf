import Form from "next/form"
import Home from "../movies/page"
export default async function MovieForm({searchParams}){
    return (
        // Ex. 1 e 2
        <div>
            <Form method="GET">
                <label htmlFor="idTitleSearchKey">Título</label>
                <input id="idTitleSearchKey" name="titleSearchKey"/>
                <label htmlFor="idYearSearch">Ano</label>
                <input id="idYearSearch" name="yearSearch"/>
                <button type="submit">Pesquisar</button>
            </Form>
            {searchParams?.titleSearchKey && (
                <Home searchParams={searchParams}/>
            )}
        </div>
    )
}