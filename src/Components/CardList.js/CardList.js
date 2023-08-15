import React from 'react'
import Card from '../Card/Card.js'
import './CardList.css'

const CardList = ({images}) => {
  return (
    <div className = "card-list">
      {images.map((user, i) => {
        return (
        <Card 
            key={i} 
            id={images[i].id} 
            name={images[i].name} 
            prompts={images[i].prompt}
            image={images[i].image}
        />
        );
    })}
    </div>
  )
}

export default CardList