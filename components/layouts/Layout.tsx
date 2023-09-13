import { FC } from 'react';
import Head from 'next/head';

import { NavBar } from '../ui';

interface Props {
  children: JSX.Element,
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
          <title>{ title || 'Pokemon App'}</title>
          <meta name="author" content="Rafael Cabanillas" />
          <meta name="description" content="Informacion sobre el pokemon XXXXX" />
          <meta name="keywords" content="XXXXX, pokemon, pokedex" />

          <meta property="og:title" content={ `Informacion sobre ${ title }` } />
          <meta property="og:description" content={ `Esta es la pagia sobre ${ title }` } />
          <meta property="og:image" content={ `${ origin }/img/banner.png` } />
        </Head>

        <NavBar />

        <main>
          { children }
        </main>
    </>
  )
}
