import React from 'react'

const Projects = ({ project: {name, year, description} }) => {
  return (
    <div className='projects'>
        <p><span className='name'>{name}</span>, <span>{year}</span></p>
        <p>{description}</p>
    </div>
  )
}

export default Projects