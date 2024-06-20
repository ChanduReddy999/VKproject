import React from 'react'
import { Link } from 'react-router-dom'
import Contact from "./Contact";
import './Services.css';
import dataAnalyticsServiceImg from '../Images/dataAnalyticsServiceImg.jpg';
import dataEngineeringServiceImg from '../Images/dataEngineeringServiceImg.png';
import webDevelopmentServiceImg from '../Images/webDevelopmentServiceImg.png';
import Header from './Header';
import Technologies from './Technologies';
import Footer from './Footer';


const Services = () => {
  return (
    <>
      <Header />
      <div className='VKIntroduction'>
        <p className='VKIntroductionPara'>Unleash Your <br /> Potential with Us</p>
      </div>
      <div className='container servicesMain'>
        <div className='row'>
          <div className='ServiceDiv'>
            <h1 className='ServiceDivHeading'>Services</h1>
          </div>
          <div className='col-4 col-4 col-4 serviceCards'>
            <div className='serviceImagesDiv'>
              <div className='serviceImagesSubDiv'>
                <Link to='/dataanalytics' className='serviceImagesLink' ><img src={dataAnalyticsServiceImg} className='serviceImages1' alt='img' /></Link>
              </div>
              <p className='aboutCourse'>Harness the power of data with our advanced analytics solutions. Turn raw data into useful insights to make smarter decisions and improve your business. Use data visualization and predictive tools to stay ahead of the competition. Enhance your strategies with clear, data-driven insights</p>
            </div>
            <div className='serviceImagesDiv'>
              <div className='serviceImagesSubDiv'>
              <Link to='/dataengineering' className='serviceImagesLink' ><img src={dataEngineeringServiceImg} className='serviceImages2' alt='img' /></Link>
              </div>
              <p className='aboutCourse'>We ensure data integrity and optimize data flows to enhance your analytics and business intelligence. Utilizing advanced ETL processes, data integration, and cloud technologies, we empower data-driven decision-making to boost your business performance</p>
            </div>
            <div className='serviceImagesDiv'>
              <div className='serviceImagesSubDiv'>
              <Link to='/webdevelopment' className='serviceImagesLink' ><img src={webDevelopmentServiceImg} className='serviceImages3' alt='img' /></Link>
              </div>
              <p className='aboutCourse'>We ensure data integrity and optimize data flows to enhance your analytics and business intelligence. Utilizing advanced ETL processes, data integration, and cloud technologies, we empower data-driven decision-making to boost your business performance</p>
            </div>
          </div>
        </div>
      </div>
      <Technologies />
      <Contact />
      <Footer />
    </>
  )
}

export default Services
