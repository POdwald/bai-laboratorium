import React from "react";
import Card from "./Card.jsx";

function Gallery() {
    const preventDefault = (event) => {
        event.preventDefault();
    };

    return (
        <div className="gallery" onContextMenu={preventDefault}>
            <Card imgSrc='./src/assets/jinx1.jpg' title='Kocur' description='yhgaetkrobyhty' />
            <Card imgSrc='./src/assets/jinx2.jpg' title='Kocur2' description='haertjioartghopjirt' />
            <Card imgSrc='./src/assets/jinx3.png' title='Kocur3' description='
                Lorem ipsum dolor sit amet.'
            />
        </div>
    );
}

export default Gallery;
