import React from 'react'

import {Link ,useLocation} from "react-router-dom"

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return <>
    <footer className={
      isHomePage ? 'homePage_footer otherPage_footer': 'otherPage_footer'}>
      
        <div className='container'>
          <h4>LUXURY RENTALS</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga expedita ea magnam. Quae dolores minus vero ipsa quos unde atque?</p>
          <ul>
            <li>
             <Link to={'/'} ></Link>
            </li>
            <li>
             <Link to={'/termsandconditions'} >Terms And Conditions</Link>
            </li>
            <li>
             <Link to={'/contact'} >Contact</Link>
            </li>
          </ul>
        </div>

        <div className='container'>
          <h4>Connect with us</h4>
            <p>+000 000 000 0</p>
            <p>vm@gmail.com</p>
            <p>Thank  For the visit</p>
        </div>

    </footer>
    
  </>;
  
}

export default Footer
