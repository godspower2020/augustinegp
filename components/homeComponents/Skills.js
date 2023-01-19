import React from 'react'
import { motion } from 'framer-motion';

import{ urlFor } from '../../lib/sanityClient';

const Skills = ({skill: {bgColor, icon, name} }) => {
  return (
    <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__skills-item app__flex'
        key={name}
        >
        <div className='app__flex' style={{backgroundColor: bgColor}}>
            <img src={urlFor(icon)} alt={name} />
        </div>
        <p className='p-text'>{name}</p>
    </motion.div>
  )
}

export default Skills