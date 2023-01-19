import React from 'react'
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Experiences = ({experience}) => {
  return (
    <motion.div className='app__skills-exp-item'>
      <div className='app__skills-exp-year'> 
          <p className='bold-text'>{experience.startYear}</p>
      </div>
      <motion.div className='app__skills-exp-works'>
          {experience?.startYearWorks?.map((work) => ( 
            <>
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className='app__skills-exp-work' 
                data-tip
                data-for={work.name}
                key={work._id}
              >
                <p className='big__p-text'>{work.company}</p>
                <p className='text'>{work.position}</p>
              </motion.div>
              {/* <ReactTooltip
                id={work.name}
                effect='solid'
                arrowColor='#fff'
                className='skills-tooltip'
              >
                <p style={{color: work.color}}>{work.desc}</p>
              </ReactTooltip> */}
              {/* <p id="my-element" data-tooltip-content={work.desc}>
              </p> */}
            </>
          ))}
      </motion.div>
    </motion.div>
  )
}

export default Experiences