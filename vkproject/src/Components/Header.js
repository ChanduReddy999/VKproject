import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Images/logo.jpg';

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-4 col-4 col-4 HeaderMain'>
                <div className='HeaderSubDiv1'>
                    <img src={Logo} alt='logo' className='HeaderLogo' />
                    <h1 className='HeaderH1'>VKLearnings</h1>
                </div>
                <div className='HeaderSubDiv2'>
                    <Link to='/whoweare' className='HeaderLinks'>Who We Are</Link>
                    <Link to='/whatwedo' className='HeaderLinks'>What We Do</Link>
                    <a href='#contact' className='HeaderLinks'>Reach Us</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
