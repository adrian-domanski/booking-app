import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 65px;

  #admin-menu-trigger:hover #admin-menu-dropdown {
    display: block !important;
  }
`;

interface MenuLinkProps {
  isActive?: boolean;
  isScrolledTop?: boolean;
}

export const MenuLink = styled.a.attrs(
  ({ isActive, isScrolledTop }: MenuLinkProps) => ({
    className: `${
      isActive
        ? isScrolledTop
          ? 'bg-themeDarker !text-white'
          : 'bg-theme !text-white'
        : ''
    } cursor-pointer text-gray-100 text-center md:px-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
  })
)<MenuLinkProps>``;
