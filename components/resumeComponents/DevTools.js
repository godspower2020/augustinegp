import React from 'react'

import{ urlFor } from '../../lib/sanityClient';

const DevTools = ({devTool: {icon, name, color}}) => {
  return (
    <div className='dev-tool'>
        <img src={urlFor(icon)} alt={name} />
        <p style={{color: color}}>{name}</p>
    </div>
  )
}

export default DevTools