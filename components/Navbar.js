import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
 
const contactLinks = [
  { 
    name: 'Home', 
    path: '/',
    target: ''
  },
  { 
    name: 'My Portfolio',
    path: '/portfolio',
    target: ''
  },
  {
    name: 'My Resume',
    path: '/resume',
    target: '_blank'
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState('app__Navbar')
  const [active, setActive] = useState('app__Navbar-menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  // const [isOpen, setIsOpen] = useState(false),

  const router = useRouter()
  
  useEffect(() => {
    router.pathname == '/' ? setNavbar('app__Navbar app__Navbar-fixed') : setNavbar('app__Navbar')
  }, []);

  const navToggle = () => {
    // show & unshow the nav menu
    active === 'app__Navbar-menu' ? setActive('app__Navbar-menu nav__active') : setActive('app__Navbar-menu') 

    // ToggleIcon
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }

  return (
    <nav className={`${navbar} app__flex__justify-content-space-between`}>

      <div className="app__Navbar-logo app__flex__justify-content-flex-start">
        <Link href='/' legacyBehavior>
          <a>
            <h1 className='blue'>A</h1>
          </a>
        </Link>
      </div>
      
      <div className={`${active}`}> 
        <div className='inner__flex'>
          <ul className='app__flex__justify-align-flex-start'>
            {contactLinks.map((item, index) => (
              <motion.p 
                className={`${router.pathname == item.path ? 'menu_link-hide' : ''} menu_link`}
                whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
                transition={{duration: 0.5}}
              >
                <Link key={index} href={item.path} legacyBehavior>
                  <a target={item.target}>{item.name}</a>
                </Link>
              </motion.p>
            ))}
          </ul> 
          <br />
          <br />
          <br />
          <br />
          <div 
            className='nav__social-text app__flex__justify-align-flex-start'
          >
            <motion.a 
              style={{color: '#00acee'}} 
              href='https://twitter.com/AugustineGods15' target='_blank'
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.6}}
            >
              Twitter
            </motion.a>
            <motion.a 
              className='instagram' href='https://www.instagram.com/godspower_augustine/' 
              target='_blank'
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.8}}
            >
              instagram
            </motion.a>
            <motion.a 
              style={{color: '#171515'}} 
              href='https://github.com/godspower2020' 
              target='_blank'
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 1}}
            >
              Github
            </motion.a>
            <motion.a 
              style={{color: '#0072B1'}} 
              href='https://www.linkedin.com/in/augustine-godspower-523a2b1a4/' 
              target='_blank'
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 1.2}}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
      
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar