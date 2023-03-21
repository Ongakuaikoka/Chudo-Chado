import React from "react";

import chick from '../logos/chick_logo.png';
import {ReactComponent as ChudoChadoCentre} from '../logos/chudo-chado-centre.svg';
import {ReactComponent as Phone} from '../logos/phone.svg';
import {ReactComponent as Vk} from '../logos/vkSVG.svg';
import {ReactComponent as Instagram} from '../logos/instagram.svg';
import { Logo, Chick, Nav, NavItemDropdown, NavMenu, NavLink, Dropdown, DropdownItem, NavItem, DropdownLink, PhoneNumber } 
    from "../css//NavbarElements";

const Navbar = () => {
  const handleGalleryStorage = () => {
    localStorage.removeItem('selectedAlbum');
    localStorage.removeItem('albumView');
    localStorage.removeItem('isModalOpen');
    localStorage.removeItem('photos');
    localStorage.removeItem('currentPhoto');
    localStorage.removeItem('albums');
  };
  return (
    <Nav>
      <Logo  id="nav_logo" href="/">
        <img src={chick}></img>
        <ChudoChadoCentre/>
        {/* <Chick src={chick} alt='logo'></Chick> */}
      </Logo>
      
      <NavMenu>
        <NavItemDropdown>
          <NavLink href="#">Программы</NavLink>
          <Dropdown>
            <DropdownItem>
              <DropdownLink href="/english">Английский язык</DropdownLink>
            </DropdownItem>
            <DropdownItem>
              <DropdownLink href="/early">Раннее развитие </DropdownLink>
            </DropdownItem>
            <DropdownItem>
              <DropdownLink href="/preschool">Дошкольная подготовка</DropdownLink>
            </DropdownItem>
          </Dropdown>
        </NavItemDropdown>
        <NavItem>
          <NavLink href="/">Летний лагерь</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Преподаватели</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/gallery" onClick={handleGalleryStorage}>Фотогалерея</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">О нас</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Контакты</NavLink>
        </NavItem>
      </NavMenu>
      <PhoneNumber>
        <Phone />
        <p>214-24-86</p>
        <a href="https://vk.com/chudochado_nsk" target="_blank" rel="noreferrer"><Vk /></a>
        <a href="https://www.instagram.com/chudochadonsk/" target="_blank" rel="noreferrer"><Instagram /></a>
      </PhoneNumber>
    </Nav>
  );
};
  
export default Navbar;