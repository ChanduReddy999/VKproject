import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from "./Contact";
import './Services.css';
import dataAnalyticsServiceImg from '../Images/dataAnalyticsServiceImg.jpg';
import dataEngineeringServiceImg from '../Images/dataEngineeringServiceImg.png';
import webDevelopmentServiceImg from '../Images/webDevelopmentServiceImg.png';
import Header from './Header';
import Technologies from './Technologies';
import Footer from './Footer';
import DocumentTitle from './DocumentTitle/DocumentTitle';

const Services = () => {
  const serviceDescriptions = ['Harness the power of data with our advanced analytics solutions. Turn raw data into useful insights to make smarter decisions and improve your business. Use data visualization and predictive tools to stay ahead of the competition. Enhance your strategies with clear, data-driven insights.', 'We ensure data integrity and optimize data flows to enhance your analytics and business intelligence. Utilizing advanced ETL processes, data integration, and cloud technologies, we empower data-driven decision-making to boost your business performance.', "Welcome to our web development hub, where we transform aspiring coders into proficient web developers. Our mission is to provide you with the skills, knowledge, and confidence needed to create dynamic, responsive, and visually appealing websites. Whether you're a complete beginner or looking to enhance your existing skills, our comprehensive courses and resources are designed to cater to all learning levels."]
  const [currentDescription, setCurrentDescription] = useState('');

  const handleDescriptionChange = (index) => {
    setCurrentDescription(serviceDescriptions[index]);
  };

  DocumentTitle('VKLearnings')

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
                <img src={dataAnalyticsServiceImg} className='serviceImages1' alt='img' onClick={() => handleDescriptionChange(0)} />
              </div>
              <Link to='/dataanalytics' className='navigationToPages' ><h2>DATA ANALYTICS</h2></Link>
            </div>
            <div className='serviceImagesDiv'>
              <div className='serviceImagesSubDiv'>
                <img src={dataEngineeringServiceImg} className='serviceImages2' alt='img' onClick={() => handleDescriptionChange(1)} />
              </div>
              <Link to='/dataengineering' className='navigationToPages' ><h2>DATA ENGINEERING</h2></Link>
            </div>
            <div className='serviceImagesDiv'>
              <div className='serviceImagesSubDiv'>
                <img src={webDevelopmentServiceImg} className='serviceImages3' alt='img' onClick={() => handleDescriptionChange(2)} />
              </div>
              <Link to='/webdevelopment' className='navigationToPages' ><h2>WEB DEVELOPMENT</h2></Link>
            </div>
          </div>
          <div id='descriptionPara' className='descriptionParagraph'>
            <p>{currentDescription}</p>
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
