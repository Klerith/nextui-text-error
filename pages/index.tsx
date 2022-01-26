import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts/Layout';


const Home: NextPage = () => {
  return (
    <Layout>
        <Button color="gradient">
          Click me
        </Button>
    </Layout>
  )
}

export default Home;
