import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Webdev.css';
import webDevelopment from '../Images/webDevelopment.jpg';

import DocumentTitle from './DocumentTitle/DocumentTitle';

const Webdev = () => {
  DocumentTitle('VKL Web Development Page')

  return (
    <>
      <div className='WebDevelopmentPage'>
        <img src={webDevelopment} alt='WebDevelopmentImg' className='WebDevelopmentPageImg' />
      </div>
      <div className='WebDevelopmentPageArrow'>
        <Link to='/' className='leftArrowWebPage'><FontAwesomeIcon icon={faArrowLeft} /></Link>
      </div>
    </>
  )
}

export default Webdev




