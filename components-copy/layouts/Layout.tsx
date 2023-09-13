import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
    children: JSX.Element,
    title?: string
}

export const Layout: FC<Props>= ({ children, title, }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App" }</title>
            <meta name="author" content="Rafael Cabanillas" />
            <meta name="description" content="Información sobre el pokémon NOMBRE" />
            <meta name="keywords" content="NOMBRE, pokémon, pokedex" />
        </Head>

        <Navbar />

        <main style={{
            padding: '0 20px'
        }} >
            { children }
        </main>

    </>
  )
}
