import React from 'react'
import { Link } from 'react-router-dom'
import Contact from "./Contact";
import './Services.css';
import dataAnalytics from '../Images/dataAnalytics.jpg';
import dataEngineering from '../Images/dataEngineering.jpg';
import webDevelopment from '../Images/webDevelopment.jpg';
import Header from './Header';


const Services = () => {
  return (
    <>
      <Header />
      <div className='container servicesMain'>
        <div className='row'>
          <div className='ServiceDiv'>
            <h1 className='ServiceDivHeading'>Services</h1>
          </div>
          <div className='col-4 col-4 col-4 serviceCards'>
            <div className='serviceImagesDiv'>
              <Link to='/dataanalytics' className='serviceImagesLink' ><img src={dataAnalytics} className='serviceImages' alt='img' /></Link>
            </div>
            <div className='serviceImagesDiv'>
              <Link to='/dataengineering' className='serviceImagesLink' ><img src={dataEngineering} className='serviceImages' alt='img' /></Link>
            </div>
            <div className='serviceImagesDiv'>
              <Link to='/webdevelopment' className='serviceImagesLink' ><img src={webDevelopment} className='serviceImages' alt='img' /></Link>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Services
