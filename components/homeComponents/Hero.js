import React from 'react'

const Hero = ({heroItem: {color, name}}) => {
  return (
    <>
        <span className="hero-text" style={{color: color}}> #{name}, </span>
    </>
  )
}

export default Hero