import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5vw;
  width: 100%;
  background-color: #ffe8d4f2;
  color: #2c1204;
  font-size: 1.1vw;

  z-index: 1;
`;

export const Logo = styled.a`
  width: 25vw;
  margin-top: 5px;
  display: flex;

  img {
    width: 5vw;
  }
`;

export const Chick = styled.img`
  height: 3vw;
`;

export const PhoneNumber = styled.div`
  width: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;



  svg {
    width: 1vw;
  }

  a {
    svg {
      fill: #2c1204;
      width: 2vw;
    }
    
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-left: 1.5vw;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #2c1204;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }
`;

export const DropdownItem = styled(NavItem)`
  margin: 0;
  padding: 1vw 2vw;
  white-space: nowrap;
  &:hover {
    background-color: #e9ccb1;
  }
`;

export const DropdownLink = styled(NavLink)`
  font-weight: bold;
`;

export const Dropdown = styled(NavMenu)`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 2vw 0;
  display: none;
  z-index: 2;
  left: -2vw;
  background-color: #f6d7be;
`;

export const NavItemDropdown = styled(NavItem)`
  position: relative;

  &:hover ${Dropdown} {
    display: block;
  }
`;

