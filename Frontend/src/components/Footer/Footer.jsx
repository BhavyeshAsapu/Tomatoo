import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Tomato is your premier online food delivery system, designed to bring the culinary delights of your favorite local restaurants right to your doorstep. We understand your craving for convenience and variety, which is why our platform makes Browse menus, placing orders, and tracking deliveries incredibly simple and efficient. With Tomato, you can explore a diverse range of cuisines and dishes, all available for fast and reliable delivery, ensuring a fresh and delicious meal is always just a few clicks away.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 931-343-7008</li>
                        <li>contact@Tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com -  All Rights Reserved.</p>
        </div>
    )
}

export default Footer