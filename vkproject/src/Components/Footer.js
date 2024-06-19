import React from 'react';
import './Footer.css';

const Footer = () => {
    const presentYear = new Date().getFullYear()
  return (
    <>
      <div className='FooterMain'>
        <p className='FooterPara'>&copy; {presentYear} VKLearners | All Rights Reserved </p>
      </div>
    </>
  )
}

export default Footer
