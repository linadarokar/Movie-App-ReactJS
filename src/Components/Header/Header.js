import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
 
    const navData = [
        {name:'Home', link:'/'},
        {name:'Upcoming Movies', link:'/Upcoming'},
        {name:'Top Rated ', link:'/TopRated'},
        {name:'Popular', link:'/Popular'},
        {name:'Search', link:'/Search'}
      
    ]
  
  return (
    <>
        <header  className='header'>
            <Navbar  bg="light"  expand="lg">
                <Container fluid>
                    <Navbar.Brand >MovieDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {
                            navData.map((item)=>{
                                return (
                                    <Nav key={item.name}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Nav> 
                                )
                            })
                        }
                        </Nav>
                     
                    
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            
        </header>
    
    </>
  )
}

export default Header;