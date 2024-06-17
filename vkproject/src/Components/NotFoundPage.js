import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <Link to='/' className='NotFoundPage'>Home</Link>
      </div>
    </>
  )
}

export default NotFoundPage
