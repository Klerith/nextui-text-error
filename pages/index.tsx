import { NextPage, GetStaticProps } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';

import { Layout } from '../components/layouts/Layout';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

  // console.log(pokemons);

  return (
    <Layout title="Listado de Pokémons">
        
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map( pokemon => (
              <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
              // <Grid xs={6} sm={3} md={ 2 } xl={1} key={ pokemon.id }>
              //   <Card hoverable clickable>
              //     <Card.Body css={{ p: 1 }}>
              //       <Card.Image 
              //         src={ pokemon.img }
              //         width="100%"
              //         height={ 140 }
              //       />
              //     </Card.Body>
              //     <Card.Footer>
              //       <Row justify='space-between'>
              //         <Text transform='capitalize'>{ pokemon.name }</Text>
              //         <Text>#{ pokemon.id }</Text>
              //       </Row>
              //     </Card.Footer>
              //   </Card>
              // </Grid>
            ))
          }
        </Grid.Container>


    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons = data.results.map( (poke, i) => ({
    ...poke,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`,
    id: i + 1
  }))

  return {
    props: {
      pokemons
    }
  }
}


export default Home;
