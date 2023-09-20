import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Slider from "react-slick";
import { useRouter } from "next/router";
import {motion} from 'framer-motion'

import{ client } from '../lib/sanityClient';
import { Hero, About, Skills, Experiences, Testimonials } from '../components/homeComponents'
import { Navbar, Contact, NavigationDots, SocialMedia } from '../components'

const Home = ( {classNames, heroTitles, heroItems, abouts, skills, experience, testimonials} ) => {
  
  // const hero = [
  //   { 
  //     title: 'Frontend Developer.', 
  //     color: '#313bac',
  //   },
  //   { 
  //     title: 'UI/UX Engineer.',
  //     color: 'green', 
  //   },
  //   {
  //     title: 'Designer.',
  //     color: 'red',   
  //   }
  // ];

  // const [heroTitle, setHeroTitle] = useState(hero[0].title)
  // const [animateHeroTitle, setAnimateHeroTitle] = useState({ y: 0, opacity: 1 }) 

  // useEffect(() => {
  //   const heroTitleSlider = () => {
  //     for(let i = 0; i < hero.length; i++){
  //       setInterval(() => {
  //         setHeroTitle(hero[i].title)
  //         // setAnimateHeroTitle([{y: 100, opacity: 0}])
  //       }, 3000);
  //     }
  //   }

  //   setHeroTitle(heroTitleSlider())
  // }, [])
  // // const [activeTitle, setActiveTitle] = useState({})
  // // const [showActiveTitle, setShowActiveTitle] = useState(false)

  // useEffect(() => {
  //   setTitle(hero)
  //   // setActiveTitle(hero[0])
  //   setAnimateTitle([{y: 100, opacity: 0}])

  //   const scrollText = (hero) => {
  //     for(let i = 0; i < hero.length; i++){
        
  //       setTimeout(() => {
  //         // setShowActiveTitle(true)
  //         setTitle(hero)
  //         setAnimateTitle([{y: 0, opacity: 1}])

  //         setTimeout(() => {
  //           // setShowActiveTitle(false)
  //           setAnimateTitle([{y: 0, opacity: 0}])
  //         }, 1000)
  //       }, 1000)
  //     }
  //   }
  // scrollText(hero)
  // }, [])

  // const settings = {
  //   className: "center app__profiles app__flex__align-items-flex-start",
  //   centerMode: true,
  //   infinite: false,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // };
  
  return (
    <div id='home' className='home'>
      <Head>
        <title>Augustine Godspower | Frontend Developer & UI/UX expert</title>

        {/* Google Analytics tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${`process.env.NEXT_PULIC_GOOGLE_ANALYTICS`}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', ${`process.env.NEXT_PULIC_GOOGLE_ANALYTICS`});
          `}
        </Script>
      </Head>
      <div id='noscroll' className={`app ${classNames}`}>
        <Navbar />
        <SocialMedia />
        {/* <NavigationDots /> */}
        <div id="Hero" className='app__container'>
          <div className='app__wrapper app__flex'>
            <div className="app__header app__flex">
              <div
                className="app__header-info app__flex"
              >
                <div className="app__header-badge app__flex__justify-align-flex-start">
                  <div className="div-margin hero__animated-text">
                      {/* {title?.map((item, index) => 
                      <motion.p 
                      className="p-text line"
                      animate={animateTitle}
                    > 
                    {item}
                    </motion.p>)} */}
                    {/* <motion.h1 
                      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      animate={animateHeroTitle}
                    > 
                      {heroTitle}
                    </motion.h1> */}
                    <motion.h1 
                      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      Frontend Developer.
                    </motion.h1>
                  </div>
                  <motion.div 
                    className="div-margin hero__text-div"
                    whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
                    transition={{duration: 0.9}}  
                  >
                    <div className='no-wrap'>Talk about:</div> 
                    <span>
                      <p>{heroItems?.map((heroItem) => <Hero key={heroItems._id} heroItem={heroItem} /> )}</p>
                    </span>
                  </motion.div>
                  <motion.div 
                    className="div-margin hero__static-text"
                    whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
                    transition={{duration: 1.3}}  
                  >
                    <p>i enjoy providing great unique solutions to businesses and brands, while creating the next app, pushing beyond boundaries.</p>
                  </motion.div>
                </div>
              </div>
              <motion.div
              whileInView={{opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildern: 0.5 }}
              className="app__header-img app__flex__justify-align-flex-end"
              >
                <img src="profile.png" alt="profile_bg" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* <div id="Spotlights" className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9, delayChildren: 0.5}}
              className={`${classNames} app__flex`}
            >
              <div>
                <h2 className='head-text'>Spotlight</h2>
                  <div className="app__profiles app__flex__align-items-flex-start">
                    {abouts?.map((about) => <About key={about._id} about={about} /> )}
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div id='Quota' className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
                whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
                transition={{duration: 0.9}}
                className={`${classNames} app__flex`}
              >
              <div className='spatial'>
                <h2 className='head-text'>6 years an Engineer </h2>
                <p>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.

Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.

Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored at providing fast, automated VAT Registration / filings & Returns solutions for multi-channel sellers across Europe.

Prior to hellotax, I was Senior frontend engine</p>
              </div>
              <div className='spatial'>
              <p>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.

Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.

Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored at providing fast, automated VAT Registration / filings & Returns solutions for multi-channel sellers across Europe.

Prior to hellotax, I was Senior frontend engine</p>
              </div>
            </motion.div>
          </div>
        </div> */}
        <div id='Experiences' className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.4}}
              className='percent-88-container app__flex'
            >
              <div>
                <h2 className='head-text'>Skills & Experience</h2>
                <div className='app__skills-container'>
                  <motion.div className='app__skills-list'>
                    {skills?.map((skill) => <Skills key={skill._id} skill={skill} /> )}
                  </motion.div>
                  <motion.div className='app__skills-exp'>
                    {experience?.map((experience) => <Experiences key={experience.startYear} experience={experience} /> )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* <div id='Testimonial' className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9}}
              className={`${classNames} app__flex`}
            >
              <div>
                <h2 className="head-text">My Clients</h2>
                {testimonials.length && ( <Testimonials key={testimonials._id} testimonials={testimonials} /> )}
              </div>
            </motion.div>
          </div>
        </div> */}
        <Contact />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "heroTitles"]';
  const heroTitles = await client.fetch(query);

  const heroItemsQuery = '*[_type == "heroItems"]';
  const heroItems = await client.fetch(heroItemsQuery);

  const aboutQuery = '*[_type == "abouts"]';
  const abouts = await client.fetch(aboutQuery);

  const skillsQuery = '*[_type == "skills"]';
  const skills = await client.fetch(skillsQuery);

  const experiencesQuery = '*[_type == "experiences"]';
  const experience = await client.fetch(experiencesQuery);

  const testimonialsQuery = '*[_type == "testimonials"]';
  const testimonials = await client.fetch(testimonialsQuery);

  return {
    props: { heroTitles, heroItems, abouts, skills, experience, testimonials }
  }
}

export default Home