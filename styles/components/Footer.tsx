import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #7c72d0;
  color: #fff;
  text-align: center;

  hr {
    border-color: #beb9e8;
    opacity: 0.5;
  }
`;

export const NavGrid = styled.section``;

export const NavGridItem = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const NavSubTitle = styled.h3.attrs({
  className: 'text-2xl mb-3 uppercase',
})``;

export const NavList = styled.ul.attrs({ className: 'leading-8' })``;

export const NavListItem = styled.li``;

export const NavLink = styled.a.attrs({
  className: 'text-lg opacity-80 hover:opacity-100 transition-opacit',
})``;
