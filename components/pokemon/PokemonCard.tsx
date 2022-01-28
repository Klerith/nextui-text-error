import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter();

  // const onClick = () => {
  //   router.push(`/pokemon/${ pokemon.id }`);
  // }

  return (
    <Grid xs={6} sm={3} md={ 2 } xl={1}>
          <Link href={`/name/${ pokemon.name }`}>
            <Card hoverable clickable>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image 
                    src={ pokemon.img }
                    width="100%"
                    height={ 140 }
                    />
                </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{ pokemon.name }</Text>
                <Text>#{ pokemon.id }</Text>
                </Row>
            </Card.Footer>
            </Card>
        </Link>
    </Grid>
  )
};
