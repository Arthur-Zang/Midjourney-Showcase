import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import './Card.css'

const Card = ({name, prompts, id, image}) => {
    return (
        <div className = "container">
            <div className = "details">
                <LazyLoadImage className = "image" alt="images" src={image} />
                <h2>
                {name}
                </h2>
                <p className = "description">
                {prompts}
                </p>
            </div>
        </div>
    )
}

export default Card