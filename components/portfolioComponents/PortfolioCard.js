import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

import{ urlFor } from '../../lib/sanityClient';

const PortfolioCard = ({portfolio: {isMyPortfolio, heroImg, name, appleColor, projectLink, subProjectLink, slug, title, tags}, index}) => {
  return (
    <motion.div 
        whileInView={{ opacity: 1 }}
        whileHover={{ scale:1.02 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className='app__work-item'
        key={index}
    >
        <div className='colorful__apple-dots'>
            <div style={{backgroundColor: appleColor}}></div>
            <div style={{backgroundColor: appleColor}}></div>
            <div style={{backgroundColor: appleColor}}></div> 
        </div>
        
        <Link href={isMyPortfolio ? subProjectLink : `/portfolio/${slug.current}`} legacyBehavior>
            <a>
                <div className='app__work-img app__flex'>
                    <img 
                        src={urlFor(heroImg)}
                        alt={name}
                    />
                </div>
            </a>
        </Link>
        
        <div className='app__work-content app__flex'>
            <div className='app__work-tag app__flex'></div>
            <div className='separate-tags'>
                {tags?.map((item, index) => (
                    <span className='p-text normal-spacing-port-card' key={index}>{item} </span>
                ))}
            </div>
        </div>
        <h4 className=''>{title}</h4>
        <a href={projectLink} target="_blank" rel="noreferrer"><h5 className=''>{subProjectLink}</h5></a>
    </motion.div>
  )
}

export default PortfolioCard