import React, { useContext,useState, useEffect } from 'react';
import './Navbar.Module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TfiShoppingCartFull } from "react-icons/tfi";
import { LuSearch } from "react-icons/lu";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import logo from "./Assets/logo.png";
import { Cart } from './Cart';
import { ShopContext } from './ShopContext';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Renamed for clarity

    const { cartItems } = useContext(ShopContext);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const totalQuantity = Object.values(cartItems).reduce((a, b) => a + b, 0);

    return (
        <Navbar expand="lg" className={`cart ${scrolled ? "scrolled" : ""}`}>
            <Container>
                <Navbar.Brand href="#home" className='heaven'>
                    <img src={logo} alt="Logo"/>
                    <span>Ecom</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/shop" className={activeLink === 'shop' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('shop')}>Shop</Nav.Link>
                        <Nav.Link href="/feature" className={activeLink === 'feature' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('feature')}>Feature</Nav.Link>
                        <Nav.Link href="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="/blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <InputGroup className="search-input-group">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2"><LuSearch /></InputGroup.Text>
                        </InputGroup>
                        <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='social-icon'>
                            <span className='iconStyle'><TfiShoppingCartFull /></span>
                            <div className='dot'>{totalQuantity}</div>  
                        </div>
                        <a href="#contact"><button className='vvd'>Register</button></a>
                        <a href="#contact"><button className='vvd'>LogIn</button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
            {
                isSidebarOpen &&  <div className='mainCart'>
                    <Cart onClose={() => setIsSidebarOpen(false)} /> {/* Pass a callback to close the sidebar */}
                </div>
            }
        </Navbar>
    );
};
