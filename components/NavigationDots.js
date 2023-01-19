import React, { useState } from 'react'
import {Link} from 'react-scroll'

const navDots = [
  { 
    name: 'Hero',
    // tabindex:'0'
  },
  // {
  //   name: 'Spotlights',
  // },
  {
    name: 'Experiences',
    // tabindex:'1'
  },
  {
    name: 'Testimonial',
    // tabindex:'2'
  },
  { 
    name: 'Contact',
    // tabindex:'3'
  },
];

const NavigationDots = () => {
  // const [active, setActive] = useState('app__navigation-dot')

  const animateActiveDot = () => {
    // active === 'app__navigation-dot' ? setActive('app__navigation-dot app__navigation-dot-active') : setActive('app__navigation-dot')
  }

  return (
    <div className='app__navigation'>
        {navDots.map((item, index) => (
          <div className='flex-dots'>
            <span>{item.name}</span>
            <Link
              onClick={animateActiveDot}
              to={item.name}
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={0} 
              key={item + index}
            />
          </div>
        ))}
    </div>
  )
}

export default NavigationDots