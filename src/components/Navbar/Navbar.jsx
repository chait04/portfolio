import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener(`resize`, showButton);

  return (
    <>
      <IconContext.Provider value={{ color: `#fff` }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Chaitanya
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/about'>About</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/projects'>Projects</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>Blogs 😂</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Button fontBig primary>
                      Blogs 😂
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
