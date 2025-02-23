import React from 'react'
import './Header.css'
import logo from '../images/SML1995.png'

const Header = () => {
  return (
    <div>
         <img src={logo} alt="Sailor Moon text logo from 1995, says Sailor Moon in white font" />
         <h1>Fan Quiz</h1>
    </div>
   
  )
}

export default Header