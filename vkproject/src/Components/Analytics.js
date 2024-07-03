import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Analytics.css';
import dataAnalytics from '../Images/dataAnalytics.jpg';

import DocumentTitle from './DocumentTitle/DocumentTitle';


const Analytics = () => {
  DocumentTitle('VKL Analytics Page')
  return (
    <>
      <div className='AnalyticsPage'>
        <img src={dataAnalytics} alt='dataAnalyticsImg' className='dataAnalyticsPageImg' />
      </div>
      <div className='AnalyticsPageArrow'>
        <Link to='/' className='leftArrowAnalyticsPage'><FontAwesomeIcon icon={faArrowLeft} /></Link>
      </div>
    </>
  )
}

export default Analytics