import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, } from '@nextui-org/react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';

import { localFavorites } from '../../utils';


const favoritePokemons = localFavorites.pokemons();

const FavoritesPage = () => {

    // const [favoritePokemons, setFavoritePokemons] = useState( localFavorites.pokemons() ); // Error por la parte del renderizado
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]); // Error por la parte del renderizado

    // const { theme } = useTheme();
    const router = useRouter();

    const onFavoriteClicked = ( id: number ) => {
        router.push(`/pokemon/${ id }`)
    }

    useEffect(() => {
      setFavoritePokemons( localFavorites.pokemons() );    
    }, []);
    


    return (
        <Layout title='Pokemons Favoritos'>

            {
                favoritePokemons.length === 0 
                ?  (<NoFavorites />)
                : (
                    <Grid.Container gap={2} direction='row' justify='flex-start'>
                    {
                        favoritePokemons.map( id => (
                            <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
                                <Card hoverable clickable css={{ padding: 10}} onClick={ () => onFavoriteClicked(id) }>
                                    <Card.Body css={{ p: 1 }}>
                                        <Card.Image 
                                            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg` }
                                            width="100%"
                                            height={ 140 }
                                        />
                                    </Card.Body>
                                </Card>
                            </Grid>
                        ))
                    }
                    </Grid.Container>
                )
            }

            {/* <NoFavorites /> */}

            {/* <Container css={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}>
                <h1 style={{ color: theme?.colors.gray600.value }}>No hay favoritos</h1>
                <Image 
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                    width={250}
                    height={250}
                    css={{
                        opacity: 0.1
                    }}
                />
            </Container> */}

        </Layout>
    )
};

export default FavoritesPage;
