import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Contribute = () => {
    return(
        <footer style={{backgroundColor:"#FF7043",margin:"0px auto",padding:"20px 0px;"}}>
            <Row>
                <Col className="ml-5 mt-5">
                    <h5>Our Address</h5>
                    <address style={{fontSize:"15px"}}>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                             +852 1234 5678<br/>
                    </address>
                </Col>

                <Col className="mt-5">
                    <div className="row justify-content-center" style={{color:"white", fontSize:"15px"}}>
                        <div className="col-auto">
                            <p>© Copyright 2020 Boundary Goods</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    );
};

export default Contribute;