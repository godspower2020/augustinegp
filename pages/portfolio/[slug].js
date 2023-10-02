import React, {useState} from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link'
import Head from 'next/head'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import{ client, urlFor } from '../../lib/sanityClient';
import { Navbar, Contact } from '../../components'

const PortfolioDetails = ({ portfolio: {isAvailable, description, projectLink, companyNeeds, problemsFaced, solutionOne, solutionTwo, conclusion, company, slug, works, title, imgUrl}}) => {
  const [index, setIndex] = useState(0)

  const handleClick = (i) => {
    setIndex(i);
  }

  return (
    <div className='grey-bg'>
      <Head>
        <title>{slug.current} - Augustine's Portfolio</title>
      </Head>
      <Navbar />
      {isAvailable ? 
      <div>
        <div className="back app__flex__justify-content-flex-start">
          <Link href="/portfolio" legacyBehavior>
            <a>
              <HiOutlineArrowNarrowLeft />
            </a>
          </Link>
          <h2>{title}</h2>
        </div>
        <div className='portfolio-detail-container'>
          <div>
            <div className="portfolio-detail-image">
              <div className='slide' onClick={() => handleClick(index === 0 ? imgUrl.length - 1 : index - 1)}>
                <FiArrowLeft />
              </div>
              <img 
                className="portfolio-detail-img" 
                src={urlFor(imgUrl && imgUrl[index])} 
              />
              <div className='slide' onClick={() => handleClick(index === imgUrl.length - 1 ? 0 : index + 1)}>
                <FiArrowRight />
              </div>
            </div>
            <div className="small-images-container">
              {imgUrl?.map((item, i) => (
                <motion.div 
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale:1.08 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          
          <div className='desc-client-works-website'>
            <div className="details-text-company-works">
              <div className="details-text">
                <p>{description}</p>
                <p>{companyNeeds}</p>
                <p>{problemsFaced}</p>
                <p>{solutionOne}</p>
                <p>{solutionTwo}</p>
                <p>{conclusion}</p>
              </div>
              <div className="details-company-works">
                <p className="details-company"><span>Client</span> <br /> {company}</p>
                <div className="details-works">
                  <span>Work</span> <br />
                  {works?.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="project__code-link">
              <span className='bold'>Website</span>
              <p>Visit <span><a target='_blank' href={projectLink}>{title}</a></span></p>
            </div>
          </div>
        </div>
      </div>
      :
      <div>
        <div className="back app__flex__justify-content-flex-start">
          <Link href="/portfolio" legacyBehavior>
            <a>
              <HiOutlineArrowNarrowLeft />
            </a>
          </Link>
          <h2>{title}</h2>
        </div>
        <div className='coming__soon app__flex'>
          <p>Coming Soon...</p>
        </div>
      </div>
      }
      <Contact />
    </div>
  ) 
}

export const getStaticPaths = async () => {
  const query = `*[_type == "portfolios"] {
    slug {
      current
    }
  }`;
  const portfolios = await client.fetch(query);

  const paths = portfolios.map((portfolio) => ({
    params: {
      slug: portfolio.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: {slug} }) => {
  const query = `*[_type == "portfolios" && slug.current == '${slug}'][0]`;
  const portfolio = await client.fetch(query);

  return {
    props: { portfolio }
  }
}

export default PortfolioDetails