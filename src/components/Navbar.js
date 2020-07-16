import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './css/navbar.css';

const PageNavbar = () =>{
    return (
        <Navbar collapseOnSelect variant="dark" fixed="top" expand="lg">
            
            <Navbar.Brand href="#home">Boundary Goods</Navbar.Brand>
            <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
          
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{marginRight:"2%"}}>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#categories">Categories</Nav.Link>
                    <Nav.Link href="#contribute">Contribute</Nav.Link>
                </Nav> 
                <Form inline>
                    <FormControl type="text" placeholder="Search item" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>                  
            </Navbar.Collapse>
            
        </Navbar>
    );
};

export default PageNavbar;