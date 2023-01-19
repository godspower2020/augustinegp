import React from 'react'
import { motion } from 'framer-motion';

import{ urlFor } from '../../lib/sanityClient';

const About = ({ about: {imgUrl, title, description} }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale:1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="app__profile-item app__flex"
    >
      <div className='image-color'>
        <img src={urlFor(imgUrl)} alt={title} />
      </div>
      <div className='text-color'>
        <h2 className="bold-text" style={{ marginTop: 20}}>{title}</h2>
        <h2 className="p-text" style={{ marginTop: 10}}>{description}</h2>
      </div>
    </motion.div>
  )
}

export default About