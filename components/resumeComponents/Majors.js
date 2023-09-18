import React from 'react'

const Majors = ({ major: {degree, major, year, school, location} }) => {
  return (
    <div>
        <p>{degree}</p>
        <p>{major}</p>
        <p>{year}</p>
        <p>{school}</p>
        <p>{location}</p>
    </div>
  )
}

export default Majors