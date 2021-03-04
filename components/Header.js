import React from 'react';
import { Container, FormControl, Navbar, NavLink } from 'react-bootstrap';
import logo from '../public/logo.png';
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'


const StyledNavLink = styled(Nav.Link)`
  
  color: black !important;;
  

  &:hover {
    color: brown !important;
  }
  &:active {
    font-weight: bold !important;
  }
  
`;



function Header() {
    return (
        <>
        <Navbar   collapseOnSelect expand="lg" style={{backgroundColor: "#ffead6"}} variant="dark">
{/* <Container> */}
    <Navbar.Brand href="/">
        <img
            src='/logo.png'

            className="d-inline-block align-top"
            alt="Метлайн"
            width="300"
        />
    </Navbar.Brand >

    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mx-auto">
    <Nav.Item>
        <Link href="/" passHref>
            <StyledNavLink>Главная</StyledNavLink>
        </Link>

    </Nav.Item>
    <Nav.Item>
        <Link href="/about" passHref>
            <StyledNavLink>О компании</StyledNavLink>
        </Link>
    </Nav.Item>
    <Nav.Item>
        <Link href="/production" passHref>
            <StyledNavLink>Продукция</StyledNavLink>
        </Link>
    </Nav.Item>
    <Nav.Item>
        <Link href="/offers" passHref>
            <StyledNavLink>Пациентам</StyledNavLink>
        </Link>
    </Nav.Item>
    <Nav.Item>
        <Link href="/contacts" passHref>
            <StyledNavLink>Где купить</StyledNavLink>
        </Link>
    </Nav.Item>

</Nav>
    </Navbar.Collapse>

        </Navbar>

        </>
     
    );
  }
  
  export default Header;