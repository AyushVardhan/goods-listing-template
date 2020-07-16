import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Container } from 'react-bootstrap';

const categories = ['Automobiles', 'Shopping Portals', 'Electronics','Stationary',
    'Cosmetics', 'Daily Use & self care', 'Beverages', 'Textiles', 'Apparels', 'Watches',
    'Chocolates & Ice-creams', 'Snacks Item & Water', 'Cooking essentials'];

const ProductCard = () => {
    return (
        <Card style={{ width: '18rem', marginTop:"10%"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>        
    );
};


const ProductCategories = () => {
    return(
        <Container>
            <Row style={{marginTop:"5%"}}>
                <div class="col-12 col-sm-4 col-md-3">
                    <h1>Automobiles</h1>
                </div>
            </Row>

            <Row className="justify-content-center mt-5">
                <div className="d-none d-sm-block col-2">
                    <ProductCard/>
                </div>
                <div className="d-none d-sm-block col-2">
                    <ProductCard/>
                </div>  
                <div className="d-none d-sm-block col-2">
                    <ProductCard/>
                </div>  
                <div className="d-none d-sm-block col-2">
                    <ProductCard/>
                </div> 
                <div className="d-none d-sm-block col-2">
                    <ProductCard/>
                </div>                 
            </Row>       

        </Container>
    );
};

export default ProductCategories;