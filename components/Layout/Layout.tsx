import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
  }
`;

interface IProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<IProps> = ({
  children,
  title = 'Gościnni - Znajdź swoje miejsce',
}) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title ? `${title} | Gościnni` : title}</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
