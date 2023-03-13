import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #232f3e;
  color: #fff;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-left: 20px;
`;

export const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #f0c14b;
  }
`;

export const DropdownItem = styled(NavItem)`
  margin: 0;
  padding: 10px 20px;
  background-color: #232f3e;
`;

export const DropdownLink = styled(NavLink)`
  font-weight: bold;
`;

export const Dropdown = styled(NavMenu)`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  z-index: 1;
`;

export const NavItemDropdown = styled(NavItem)`
  position: relative;

  &:hover ${Dropdown} {
    display: block;
  }
`;

