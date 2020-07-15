import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './css/jumbotron.css';
import { Row, Col } from 'react-bootstrap';

const TopJumbotron = () =>{
    return (
        <Jumbotron className="head">
            <Row>
                <Col>
                    <h1>A Rising Market</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <p>
                        A simple attempt to spread awareness for our product & goods. 
                        Exploring the quality and market reach with an aim to increase production by masses.
                    </p>
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default TopJumbotron;