import Link from 'next/link'

export default async function Home() {
    // Passo 3
    return (
        <div>
            <h1>Viva Santana!</h1>
            <Link href="/rota1">Rota1</Link>
            <Link href="/rota2">Rota2</Link>
            <Link href="/novarota">Nova Rota</Link>
            <a href="/novarota/rota3">Rota3</a>
            <Link href="/movies">Filmes</Link>
        </div>
    )
}

// Primeira Página

// Ex. 2

export function Card() {
    return (
        <div>
            <p>Card de Item</p>
        </div>
    )
}

export function Text() {
    return (
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum has been the industry's</b> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        
    )
}