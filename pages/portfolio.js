import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { motion } from 'framer-motion';

import{ client } from '../lib/sanityClient';
import { Navbar, SocialMedia, Contact } from '../components'
import { PortfolioCard } from '../components/portfolioComponents';

const Portfolio = ({portfolios}) => {
    const [filterPortfolio, setFilterPortfolio] = useState([])
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 }) 

    useEffect(() => {
      setFilterPortfolio(portfolios)
    }, [])

    const handlePortfolioFilter = (item) => {
      setActiveFilter(item)
      setAnimateCard([{y: 100, opacity: 0}])

      setTimeout(() => {
        setAnimateCard([{y: 0, opacity: 1}])

        if(item === 'All') {
            setFilterPortfolio(portfolios)
        } else {
            setFilterPortfolio(portfolios.filter((portfolio) => portfolio.tags.includes(item)))
        }
      }, 500);
    }

  return (
    <div id='portfolio'>
      <Head>
        <title>My Portfolio - works</title>

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
      <div className='app'>
        <Navbar />
          <h5 className='head-text add-top-margin'>MY PORTFOLIO</h5>

          <div className="app__work-filter">
            {['All', 'e-commerce', 'UI/UX', 'Web-App'].map((item, index) => (
              <div
                key={index}
                onClick={() => handlePortfolioFilter(item)}
                className={`app__work-filter-item app__flex ${activeFilter === item ? 'item-active' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>

          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className='app__work-portfolio'
          >
            {filterPortfolio.map((portfolio, index) => <PortfolioCard key={portfolio._id} portfolio={portfolio} index={index} /> )}
          </motion.div>

          <Contact />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "portfolios"]';
    const portfolios = await client.fetch(query);
  
    return {
      props: { portfolios }
    } 
  }

export default Portfolio