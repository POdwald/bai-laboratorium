import React from "react";

function Card(props) {
    // Event handlers to prevent text selection and image dragging
    const preventDefault = (event) => {
        event.preventDefault();
    };

    return (
        <div className="card" onDragStart={preventDefault} onContextMenu={preventDefault}>
            <img className='card-image' src={props.imgSrc} alt={props.title} onDragStart={preventDefault} />
            <h2 className='card-title' onDragStart={preventDefault}>{props.title}</h2>
            <p className='card-text' onDragStart={preventDefault}>{props.description}</p>
            <meta httpEquiv="imagetoolbar" content="no"/>
        </div>
    );
}

export default Card;
