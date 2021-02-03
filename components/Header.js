import React from 'react';
import { Container, FormControl, Navbar, NavLink } from 'react-bootstrap';
import logo from '../public/logo.png';
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'


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
        <Link href="/">
            <Nav.Link href="/" style={{color: 'black'}}>Главная</Nav.Link>
        </Link>

    </Nav.Item>
    <Nav.Item>
        <Link href="/about">
            <Nav.Link href="/about"  style={{color: 'black'}}>О компании</Nav.Link>
        </Link>
    </Nav.Item>
    <Nav.Item>
        <Link href="/production">
            <Nav.Link href="/production" style={{color: 'black'}}>Продукция</Nav.Link>
        </Link>
    </Nav.Item>
    <Nav.Item>
        <Link href="/offers">
            <Nav.Link href="/offers" style={{color: 'black'}}>Пациентам</Nav.Link>
        </Link>
    </Nav.Item>
    <Nav.Item>
        <Link href="/contacts">
            <Nav.Link href="/contacts" style={{color: 'black'}}>Где купить</Nav.Link>
        </Link>
    </Nav.Item>

</Nav>
    </Navbar.Collapse>

        </Navbar>

        </>
     
    );
  }
  
  export default Header;