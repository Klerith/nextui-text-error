import { FC } from 'react';
import Head from 'next/head';
import { Grid } from '@nextui-org/react';

import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
  pokemonName?: string;
  pokemonImg?: string;
}

export const Layout: FC<Props> = ({ children, title, pokemonName, pokemonImg }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Fernando Herrera" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
            <meta name="robots" content="index, follow" />

            {
              pokemonName && (
                <>
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:site" content="@fernando_her85" />
                  <meta name="twitter:title" content={`Información sobre este pokémon ${ pokemonName }`} />
                  <meta name="twitter:description" content={ `Ver los sprites de ${ pokemonName }` } />
                  <meta name="twitter:image" content={ pokemonImg } />
                </>
              )
            }

        </Head>

        <Navbar />
    
        <main style={{
            padding: '0px 20px'
        }}>
            
          { children }
            
        </main>
    </>
  )
};
