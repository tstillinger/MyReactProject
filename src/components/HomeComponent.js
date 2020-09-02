import React from 'react';
import { Card, CardText, CardBody, } from 'reactstrap';

function RenderBanner() {
    return (
        <Card>
            <CardBody>
                <CardText>Fireplaces * Lightposts * Planter Boxes * Brick Veneer * Firepits * Patio Designs * Chimney Repair </CardText>
            </CardBody>
        </Card>
    )
}

function Home() {
    return (
        <React.Fragment>
        <div className="container">
            <div className="row align-items-center my-5">
                <div className="col-lg-7">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src="/assets/images/IMAG0774.jpg" />
                </div>
                <div className="col-lg-5">
                    <h1 className="Font-font-weight-white">Special T Enterprises</h1>
                    <p>
                        Locally Owned and operated in the Spokane WA area.  Family run business specializing in small to medium masonry projects and repairs.
                    </p>
                </div>
            </div>
        </div>
    <RenderBanner></RenderBanner>
    </React.Fragment>
    );
}

export default Home;   
