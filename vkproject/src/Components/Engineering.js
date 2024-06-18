import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Engineering.css'
import dataEngineering from '../Images/dataEngineering.jpg';


const Engineering = () => {
  return (
    <>
      <div className='EngineeringPage'>
        <img src={dataEngineering} alt='dataEngineeringImg' className='dataEngineeringPageImg' />
      </div>
      <div className='EngineeringPageArrow'>
        <Link to='/' className='leftArrowEngPage'><FontAwesomeIcon icon={faArrowLeft} /></Link>
      </div>
    </>
  )
}

export default Engineering
