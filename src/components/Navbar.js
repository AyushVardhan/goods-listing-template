import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './css/navbar.css';

const PageNavbar = () =>{
    return (
        <Navbar variant="dark" fixed="top">
            <Navbar.Brand href="#home">Boundary Goods</Navbar.Brand>

            <Nav className="ml-auto" style={{marginRight:"2%"}}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Categories</Nav.Link>
                <Nav.Link href="#pricing">Contribute</Nav.Link>
            </Nav>             
            
            <Form inline>
                <FormControl type="text" placeholder="Search item" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>  
        </Navbar>
    );
};

export default PageNavbar;