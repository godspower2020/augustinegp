import React from 'react'
import Head from 'next/head'
import { AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai';

import{ client } from '../lib/sanityClient';
import { DevTools, TechStack, TechnicalSkills, OtherTechStacks, Experiences } from '../components/resumeComponents';

const Resume = ({techStacks, technicalSkills, devTools, otherTechStacks, experiences}) => {
  return (
    <div id='resume'>
      <Head>
        <title>My Resume - skills & experiences</title>
      </Head>
      <div className='app__flex__justify-align-flex-start resume app__whitebg'>
        {/* <aside>
            <a href='https://www.linkedin.com/in/augustine-godspower-523a2b1a4/' target='_blank'>
              <AiFillLinkedin />
            </a>
            <a href=''>
              <AiOutlineDownload /> download
            </a>
        </aside> */}
        <div className='main__content app__flex__justify-align-flex-start'>
          <div className='tech__stack'>
            <div className='apex apex-with-margin-on-small'>
                <div className='info__links lh-1-5 mb-2'>
                  {/* <a href='http://augustine.dev'>augustine.dev</a> */}
                  <p>Warri, Nigeria</p>
                  <p><a href='mailto: augustine07@gmail.com'>augustinegp07@gmail.com</a></p>
                  <p><a href='phone: +2347033903922'>+234 (703) 390 3922</a></p>
                </div>
                  <div className='lh-1-5 mb-2'>
                    <h3 style={{ wordWrap: 'breakWord' }}>Core Technology:</h3>
                    {techStacks.map((techStack) => <TechStack key={techStack._id} techStack={techStack} /> )}
                  </div>
                  <div className='lh-1-5 mb-2'>
                    <h3 style={{ wordWrap: 'breakWord' }}>Technical Skills:</h3>
                    {technicalSkills.map((technicalSkill) => <TechnicalSkills key={technicalSkill._id} technicalSkill={technicalSkill} /> )}
                  </div>
            </div>
            <div className='apex'>
                <div className='lh-1-5 mb-2'>
                  <h3>Tools:</h3>
                  {devTools?.map((devTool) => <DevTools key={devTool._id} devTool={devTool} />)}
                </div>
                <div className='lh-1-5 mb-2'>
                  <h3>Others:</h3>
                  {otherTechStacks.map((otherTechStack) => <OtherTechStacks key={otherTechStack._id} otherTechStack={otherTechStack} /> )}
                </div>
            </div>
          </div>
          <div className='app__flex__justify-align-flex-start experiences'>
            <div className='name__stack mb-5'>
              <h1 className='mb-0-5'>AUGUSTINE <br/> GODSPOWER</h1>
              <h2>Frontend Engineer | UI/UX Designer | Cryptoprenure</h2>
              <p className='some-margins'>Frontend Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products providing a satisfactory user experience with no issues, errors, or downtime.</p>
            </div>
            {/* <hr /> */}
            <div className='experience__stack'>
              <h2>Experiences</h2>
              <p className='small-margin'>I’ve worked on a handful of web projects over the past 6 years, some of which were for the following organizations:</p>
          
              <ul className='companies'>
                {experiences?.map((experience) => <Experiences key={experience._id} experience={experience} /> )}
              </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "techStacks"]';
    const techStacks = await client.fetch(query);

    const technicalSkillsquery = '*[_type == "technicalSkills"]';
    const technicalSkills = await client.fetch(technicalSkillsquery);

    const devToolsQuery = '*[_type == "devTools"]';
    const devTools = await client.fetch(devToolsQuery);

    const otherTechStacksQuery = '*[_type == "otherTechStacks"]';
    const otherTechStacks = await client.fetch(otherTechStacksQuery);
  
    const experiencesQuery = '*[_type == "experiences"]';
    const experiences = await client.fetch(experiencesQuery);
  
    return {
      props: { techStacks, technicalSkills, devTools, otherTechStacks, experiences }
    }

  }

export default Resume