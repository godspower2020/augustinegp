import React from 'react'

const Experiences = ({experience}) => {
  return (
    <li 
      className='company'
      key={experience.year}
    >
      {experience.works.map((work) => (
        <>
          <header>
            <h3 style={{color: work.color}}>{work.company} - <span className='inherent-color'>{work.position}</span></h3>
            <span className='stop'>{experience.year}</span>
          </header> 
          <p className='work-info'>{work.desc}</p>
        </>
      ))}
      <ul 
        className='points'
      >  
        {experience?.points?.map((item, index) => (
          <li key={index} className='huge-dots'>{item}</li>         
        ))}
      </ul>
    </li>
  ) 
}

export default Experiences

