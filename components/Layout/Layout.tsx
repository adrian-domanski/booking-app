import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 65px;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker-popper {
    z-index: 100;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
    overflow-x: hidden;

    @media screen and (min-width: 1024px) {
      /* background-image: url("/img/bg.jpg");
      background-repeat: no-repeat;
      background-position-y: 825px; */
    }
  }
`;

const PageWrapper = styled.div`
  &.mousedown *:focus {
    outline: 0;
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
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out' },
    });
    tl.from('#g-header > *', {
      y: 50,
      opacity: 0,
      stagger: 0.5,
    });

    // Title lines
    gsap.utils.toArray('.g-titleLine').forEach((titleLine: HTMLElement) => {
      const tl = gsap.timeline({
        defaults: { duration: 1, transformOrigin: 'center', delay: 0.5 },
        scrollTrigger: {
          trigger: titleLine,
        },
      });
      tl.from(titleLine, { opacity: 0, top: 50 });
    });

    // Section titles
    gsap.utils
      .toArray('.g-sectionTitle')
      .forEach((sectionTitle: HTMLElement) => {
        const tl = gsap.timeline({
          defaults: { duration: 1, transformOrigin: 'center' },
          scrollTrigger: {
            trigger: sectionTitle,
          },
        });
        tl.from(sectionTitle, { opacity: 0, top: 50 });
      });
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setMouseDown(true);
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') {
        setMouseDown(false);
      }
    });
  }, []);

  return (
    <PageWrapper className={`${mouseDown ? 'mousedown' : ''}`}>
      <GlobalStyles />
      <Head>
        <title>{title ? `${title} | Gościnni` : title}</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossOrigin='anonymous'
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;
