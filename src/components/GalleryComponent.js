import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderGalleryItem({ gallery }) {
    return (
        <Card>
            <CardImg width="100%" src={gallery.image} alt={gallery.name} />
            <CardImgOverlay>
                <CardTitle>{gallery.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Gallery(props) {

    const gallery = props.gallery.map(gallery => {
        return (
            <div key={gallery.id} className="col-md-5 m-1">
                <RenderGalleryItem gallery={gallery} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {gallery}
            </div>
        </div>
    );
}

export default Gallery;