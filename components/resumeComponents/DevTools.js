import React from 'react'

import{ urlFor } from '../../lib/sanityClient';

const DevTools = ({devTool: {icon, name}}) => {
  return (
    <div className='dev-tool'>
        <img src={urlFor(icon)} alt={name} />
    </div>
  )
}

export default DevTools