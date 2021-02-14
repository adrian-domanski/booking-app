import styled from 'styled-components';
import { Separator } from './utils';
import tw from 'twin.macro';

export const StyledFooter = styled.footer`
  background-color: #7c72d0;
  color: #fff;
  text-align: center;

  hr {
    border-color: #beb9e8;
    opacity: 0.5;
  }
`;

export const NavGrid = tw.section`lg:grid lg:grid-cols-3 lg:gap-8`;

export const NavGridItem = styled.div`
  &:not(:first-child) {
    @media screen and (max-width: 1024px) {
      margin-top: 2rem;
    }
  }
`;

export const NavSubTitle = styled.h3.attrs({
  className: 'text-2xl mb-3 uppercase lg:text-left',
})``;

export const NavList = styled.ul.attrs({ className: 'leading-8' })``;

export const NavListItem = tw.li`lg:text-left`;

export const NavLink = tw.a`text-lg opacity-80 hover:opacity-100 transition-opacity`;

export const FooterSeparator = tw(Separator)`my-12`;
