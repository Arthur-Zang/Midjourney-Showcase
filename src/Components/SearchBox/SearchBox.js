import React from 'react'
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div>
        <input type="search" placeholder="search images" onChange={searchChange} />
    </div>
    
  )
}

export default SearchBox