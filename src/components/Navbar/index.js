import React, {useEffect, useState,useRef} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import { Dropdown } from '../Dropdown';
import Menu from "../menu";

import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink
 } from './NavbarElements';

 

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav]= useState(false);

  const changeNav=()=>{
    if(window.scrollY >= 80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',changeNav);
  },[])

  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  Dropdown(dropdownRef, closeHoverMenu); // Call the hook 
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>PrintFusion</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'
                ref={dropdownRef}
                onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >Bemutatkozás</NavLinks>
                {isMenuDropDownOpen && <Menu />}
              </NavItem>
              <NavItem>
                <NavLinks to='tools'
                 //use mouseover event to show dropdown
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >Eszközeink</NavLinks>
                {isMenuDropDownOpen && <Menu />}
              </NavItem>
              <NavItem>
                <NavLinks to='products'
                ref={dropdownRef}
                onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >Termékeink</NavLinks>
                {isMenuDropDownOpen && <Menu />}
              </NavItem>
              <NavItem>
                <NavLinks to='services'
                ref={dropdownRef}
                onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >Utómunkák</NavLinks>
                {isMenuDropDownOpen && <Menu />}
              </NavItem>
              <NavItem>
                <NavLinks to='join'
                ref={dropdownRef}
                onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >Csatlakozz</NavLinks>
                {isMenuDropDownOpen && <Menu />}
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;
