import React from "react";
import { Logo, Nav, NavItemDropdown, NavMenu, NavLink, Dropdown, DropdownItem, NavItem, DropdownLink } 
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
      <Logo href="/">CHUDO-CHADO</Logo>
      <NavMenu>
        <NavItemDropdown>
          <NavLink href="#">Courses</NavLink>
          <Dropdown>
            <DropdownItem>
              <DropdownLink href="/english">English</DropdownLink>
            </DropdownItem>
            <DropdownItem>
              <DropdownLink href="/early">Early Development</DropdownLink>
            </DropdownItem>
            <DropdownItem>
              <DropdownLink href="/preschool">Pre-School</DropdownLink>
            </DropdownItem>
          </Dropdown>
        </NavItemDropdown>
        <NavItem>
          <NavLink href="/gallery" onClick={handleGalleryStorage}>Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contacts</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};
  
export default Navbar;