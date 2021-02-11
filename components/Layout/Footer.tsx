import React from 'react';
import {
  NavGrid,
  NavGridItem,
  NavLink,
  NavList,
  NavListItem,
  NavSubTitle,
  StyledFooter,
} from '../../styles/components/Footer';

const Footer = () => {
  return (
    <StyledFooter className='py-12 px-4'>
      <h1 className='text-2xl'>
        <i className='fab fa-instagram text-4xl mb-2'></i>
        <br />
        Zajrzyj na naszego <b>Instagrama</b>
      </h1>
      <h2 className='text-lg opacity-75 mt-2'>Zainspiruj się razem z nami!</h2>
      <hr className='mx-4 my-8' />
      <NavGrid>
        <NavGridItem>
          <NavSubTitle>Wczasowicze</NavSubTitle>
          <NavList>
            <NavListItem>
              <NavLink href='/'>Pomoc</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Płatności</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Regulamin</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Kontakt</NavLink>
            </NavListItem>
          </NavList>
        </NavGridItem>
        <NavGridItem>
          <NavSubTitle>Właściciele</NavSubTitle>
          <NavList>
            <NavListItem>
              <NavLink href='/'>Oferta</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>System rezerwacji</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Zarządzanie obiektem</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Kontakt</NavLink>
            </NavListItem>
          </NavList>
        </NavGridItem>
        <NavGridItem>
          <NavSubTitle>Informacje</NavSubTitle>
          <NavList>
            <NavListItem>
              <NavLink href='/'>Regulamin</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Polityka prytwatności</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href='/'>Wsparcie</NavLink>
            </NavListItem>
          </NavList>
        </NavGridItem>
      </NavGrid>

      <hr className='mx-4 my-8' />

      <p>
        Masz pytanie? Zadzwoń na <b>500 600 700</b>, lub napisz na{' '}
        <b>bok@goscinni.pl</b>
      </p>

      <input
        type='text'
        className='bg-transparent text-xl text-white placeholder-white mt-6 px-4 py-2 border-b'
        placeholder='Wpisz swój adres email'
      />
      <button className='bg-white text-black rounded px-2 py-1 ml-2'>
        Zapisz
      </button>

      <p className='mt-8 opacity-75'>
        Zapisując się do naszego newslettera będziesz otrzymywać powiadomienia o
        zniżkach i najpopularniejszych kierunkach podróży.
      </p>

      <hr className='mx-4 my-8' />

      <p>
        Wszelkie prawa zastrzeżone przez {new Date().getFullYear()} Gościnni Sp.
        z.o.o.
      </p>
      <p className='mt-8'>Dumnie wspierane przez Softwise</p>
    </StyledFooter>
  );
};

export default Footer;
