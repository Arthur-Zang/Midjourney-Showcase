import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '86vh', background: 'linear-gradient(0deg, rgba(40, 44, 52, 1) 0%, rgba(17, 0, 32, .5) 100%)'}}>
        {props.children}
    </div>
  )
}

export default Scroll