import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaFacebookF,FaTwitter} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FiInstagram} from 'react-icons/fi'
import './index.scss'
const Header = () => {
  const [toggle, setToggle] = useState(true)

  const handletoggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div className='header'>
<nav>
    <div className="logo">
        <Link to={'/'}> <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png" alt="" />NATURAL COSMETICS
</Link>
    </div>
    <ul className='list'>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={`/about-us`}>ABOUT US</NavLink></li>
        <li><NavLink to={'/shop'}>SHOP</NavLink></li>
        <li><NavLink to={'/add-cosmetics'}>ADD COSMETICS</NavLink></li>
        <li><NavLink to={'/wishlist'}> WISHLIST</NavLink></li>
        <li><div className="icons"> <FaFacebookF/> <FaTwitter/> <FiInstagram/> </div></li>
       
    </ul>
    
    <RxHamburgerMenu className='burger'onClick={()=>handletoggle()}/>
    {
      (toggle)
      ?
      null
      :
      <ul className='mobile'>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={`/about-us`}>ABOUT US</NavLink></li>
        <li><NavLink to={'/shop'}>SHOP</NavLink></li>
        <li><NavLink to={'/add-cosmetics'}>ADD COSMETICS</NavLink></li>
        <li><NavLink to={'/wishlist'}> WISHLIST</NavLink></li>
        <li><div className="icons"> <FaFacebookF/> <FaTwitter/> <FiInstagram/> </div></li>
       
    </ul>
    }
</nav>
    </div>
  )
}

export default Header