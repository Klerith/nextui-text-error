import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

export const Layout: FC = ({ children }) => {
  return (
    <>
        <Head>
            <title>name - Pokemon App</title>
        </Head>

        <Navbar />
    
        <main style={{
            padding: '20px'
        }}>
            { children }
        </main>
    </>
  )
};
