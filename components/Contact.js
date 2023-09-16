import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { RiSendPlaneLine  } from 'react-icons/ri';
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from 'react-loader-spinner'
import {motion} from 'framer-motion'

const navLinks = [
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

const initialState = {name: '', email: '', message: ''}

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  const { name, email, message } = formData;
  
  const today= new Date()
  const year= today.getFullYear()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault()

    const mutations = [{
      create: {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
      }
    }]

    fetch(`https://78gvtlsb.api.sanity.io/v2022-03-10/data/mutate/production`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer skfTjT98YpdOx7jCGSxnglDJkp0dqOoicylDhWZ3pySl7HIspdKwX6nDUqSpcQVTbCjDsiO9TDfpoqczD4JqwJknuDf9dKIudbjPWZ4b0Vy958XXi2Yz7klWjAHKf5nCSitMDVOTw3SPZApzy4bcMIEdvxwS3qCWcT5PlFICIROgCy9hMlqh`
      },
      body: JSON.stringify({mutations})
    })
    
    .then(response => response.json())
    .then(result => console.log(result))

    .then(() => {
      setLoading(false);
      setFormData(initialState)
      toast.success('Form successfully submitted')
    })
    .catch(error => console.error(error))
  };

  return (
    <div id='Contact'>
      <h2 className='head-text'>wanna say hello</h2>
      <p className='app__flex contact-bold'>interested in working together ?</p>
      <div className='contact__form-container'>
        <motion.div 
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
          className='admin-contact'
        >
          <div className='admin-contact-card'>
            <AiOutlineMobile />
            <a className='p-text' href='tel:+2347033903922'>+234 (703) 390 3922</a>
          </div>
          <div className='admin-contact-card'>
            <AiOutlineMail /> 
            <a className='p-text' href='mailto: augustine07@gmail.com'>augustinegp07@gmail.com</a>
          </div>
          <ul className='app__flex__justify-align-flex-start column'>
            {navLinks.map((item, index) => (
              <p className={`${router.pathname == item.path ? 'contact__menu_link-hide' : ''} contact__menu_link`}>
                <a target={item.target} key={index} href={item.path}>{item.name}</a>
              </p>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
          transition={{duration: 0.4}}
          className='client__contact-details'
        >
          <form className='contact-form' role="form"  onSubmit={handleSubmit}>
            <div className='line'>
              <input type="text" className='p-text' placeholder='Your Name' autoComplete='off' name='name' required value={name} onChange={handleChange} />
              <input type="text" className='p-text' placeholder='Your Email' autoComplete='off' name='email' required value={email} onChange={handleChange} />
            </div>
            <textarea className='p-text' placeholder='Message' name='message' required value={message} onChange={handleChange} /> 
            <div className='send-button'>
              <button className='button' type='submit'>
                {loading ? 
                <div className='straight-button'>
                  <TailSpin height="20" width="20" radius="1" color="#fff" ariaLabel="loading" wrapperStyle wrapperClass /> 
                  <span>sending</span> 
                </div>
                :
                <>
                  <RiSendPlaneLine />
                  Send
                </>               
                }
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <div className='footer'>
        <div className='contact__social-text app__flex__justify-align-flex-start'>
          <a style={{color: '#00acee'}} href='https://twitter.com/AugustineGods15' target='_blank'>Twitter</a>
          <a className='instagram' href='https://www.instagram.com/godspower_augustine/' target='_blank'>instagram</a>
          <a style={{color: '#171515'}} href='https://github.com/godspower2020' target='_blank'>Github</a>
          <a style={{color: '#0072B1'}} href='https://www.linkedin.com/in/augustine-godspower-523a2b1a4/' target='_blank'>LinkedIn</a>
        </div>
        <p>Copyright &copy; {year} </p>
      </div>
    </div>
  )
}

export default Contact