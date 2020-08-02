import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Introduction = () => {
    return(
        <Container>
            <Row className="justify-content-center mt-5 mb-5" style={{fontSize:"20px", textAlign:"center", color:"grey"}}>
            An OnLine portal built on ReactJ as a dynamic and collaborative solution that allows users to explore & promote
            local products through the portal, track progress for region and share ideas or discuss on space. This site is 
            created for demonstrative purposes only and does not offer any real products or services.
            </Row>
        </Container>
    );
};

export default Introduction;