import React from "react";
import './Footer.css';
import myImages from '../../logo/share.png'

const Footer = () => {
    return (
        <div className="container d-flex flex-direction-row align-items-center justify-content-center">

            <a href="/">
                <img className='images-style' src={myImages} alt="Button Icon" />
            </a>

        </div>
    )
}

export default Footer;
