import React from 'react'

const VersionControl = ({versionControl}) => {
  return (
    <div className=''>
        <p style={{color: versionControl.color}}>{versionControl.name}</p>
    </div>
  )
}

export default VersionControl