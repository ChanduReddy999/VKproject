import React from 'react'
import './Engineering.css'
import dataEngineering from '../Images/dataEngineering.jpg';


const Engineering = () => {
  return (
    <>
      <div className='EngineeringPage'>
        <img src={dataEngineering} alt='dataEngineeringImg' className='dataEngineeringPageImg' />
      </div>
    </>
  )
}

export default Engineering
