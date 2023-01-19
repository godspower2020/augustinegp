import React, { useState } from 'react'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';

import{ urlFor } from '../../lib/sanityClient';

const Testimonials = ({testimonials}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

    const test = testimonials[currentIndex];

  return (
    <>
        <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imgurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
            <p className='p-text'>{test.feedback}</p>
            <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
            </div>
            </div>
        </div>

        <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
            </div>
        </div>
    </>
  )
}

export default Testimonials