import React from 'react';
import { Row, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

const categories = ['Automobiles', 'Electronics', 'Daily Use & self care',
                    'Apparels', 'Watches'];

const utils = {
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)
};

const AutomobileComponent = () => {
    return(
        <Container>
            <Row style={{marginTop:"5%", paddingTop:"20px"}}>
                <div class="col-12 col-sm-4 col-md-3">
                    <h1>Automobiles</h1>
                </div>
            </Row>

            <Row className="justify-content-center mt-5">
                {utils.range(1,5).map(n => 
                    <div className="d-none d-sm-block col-2">
                        <ProductCard key={n}/>
                    </div>
                )}
            </Row>       
        </Container>
    );
};

const ElectronicsComponent = () => {
    return(
        <Container>
            <Row style={{marginTop:"5%"}}>
                <div class="col-12 col-sm-4 col-md-3">
                    <h1>Electronics</h1>
                </div>
            </Row>

            <Row className="justify-content-center mt-5">
                {utils.range(1,5).map(n => 
                    <div className="d-none d-sm-block col-2">
                        <ProductCard key={n}/>
                    </div>
                )}
            </Row>       
        </Container>
    );
};

const DailyUseSelfCareComponent = () => {
    return(
        <Container>
            <Row style={{marginTop:"5%"}}>
                <div class="col-12 col-sm-4 col-md-3">
                    <h1>Daily Use & self care</h1>
                </div>
            </Row>

            <Row className="justify-content-center mt-5">
                {utils.range(1,5).map(n => 
                    <div className="d-none d-sm-block col-2">
                        <ProductCard key={n}/>
                    </div>
                )}
            </Row>       
        </Container>
    );
};

const ApparelComponent = () => {
    return(
        <Container>
            <Row style={{marginTop:"5%"}}>
                <div class="col-12 col-sm-4 col-md-3">
                    <h1>Apparels</h1>
                </div>
            </Row>

            <Row className="justify-content-center mt-5">
                {utils.range(1,5).map(n => 
                    <div className="d-none d-sm-block col-2">
                        <ProductCard key={n}/>
                    </div>
                )}
            </Row>       
        </Container>
    );
};

const WatchesComponent = () => {
    return(
        <Container className="mb-5">
            <Row style={{marginTop:"5%"}}>
                <div class="col-12 col-sm-4 col-md-3">
                    <h1>Watches</h1>
                </div>
            </Row>

            <Row className="justify-content-center mt-5">
                {utils.range(1,5).map(n => 
                    <div className="d-none d-sm-block col-2">
                        <ProductCard key={n}/>
                    </div>
                )}
            </Row>       
        </Container>
    );
};

const ProductCategories = () => {
    return(
        <>
            <AutomobileComponent/>
            <ElectronicsComponent/>
            <DailyUseSelfCareComponent/>
            <ApparelComponent/>
            <WatchesComponent/>
        </>
    );
};

export default ProductCategories;