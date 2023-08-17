import React from 'react';
import myImage from '../../logo/logo.jpeg'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container d-flex align-items-center'>
      <img className='col-2 img-fluid image-style' src={myImage} alt="Example" />
      <p className="mb-0 ms-3">Suvaye Dictionary</p>
    </div>
  )
}

export default Navbar;
