import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
          <a href='https://twitter.com/AugustineGods15' target='_blank'><BsTwitter /></a>  
      </div>
      <div>
          <a href='https://www.instagram.com/godspower_augustine/' target='_blank'><BsInstagram /></a>    
      </div>
      <div>
          <a href='https://github.com/godspower2020' target='_blank'><BsGithub /></a>    
      </div>
      <div>
          <a href='https://www.linkedin.com/in/augustine-godspower-523a2b1a4/' target='_blank'><BsLinkedin /></a>    
      </div>
    </div>
  )
}

export default SocialMedia