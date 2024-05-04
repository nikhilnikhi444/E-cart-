import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const WishlistArray = useSelector((state)=>state.wishlistReducer)
    console.log(WishlistArray);

    const CartArray = useSelector((state)=>state.cartReducer)
    console.log(CartArray);

    return (
        <>
            <Navbar expand="lg" className="bg-primary w-100 mb-5" style={{position:'fixed',top:'0px',zIndex:'1'}} >
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><Navbar.Brand className='text-light'><FontAwesomeIcon icon={faOpencart} bounce className='me-2' /><b> E-CART</b></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link ><Link to={'/wishlist'}><button className='btn btn-outline-light'><FontAwesomeIcon icon={faHeart} style={{ color: "#ee1b30", }} className='me-2' />Wishlist <Badge bg="secondary" className='ms-2'>{WishlistArray.length}</Badge></button></Link>
                            </Nav.Link>

                            
                            <Nav.Link ><Link to={'/cart'}><button className='btn btn-outline-light'><FontAwesomeIcon icon={faCartPlus} style={{ color: "#FFD43B", }} className='me-2' />Cart <Badge bg="secondary" className='ms-2'>{CartArray.length}</Badge></button></Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header