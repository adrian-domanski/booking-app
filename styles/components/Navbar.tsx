import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 65px;
`;

interface MenuLinkProps {
  isActive?: boolean;
}

export const Ass = styled.a<{ color: string }>``;

export const MenuLink = styled.a.attrs(({ isActive }: MenuLinkProps) => ({
  className: `${
    isActive ? 'bg-theme' : ''
  } text-gray-100 text-center md:px-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
}))<MenuLinkProps>``;
