import React from 'react'
import './index.scss'
const Footer = () => {
  return (
<footer>
<div className='footer'>
<div className="logo"><img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-2-96x96.png" alt="" /></div>
<ul>
    <li>ABOUT</li>
    <li>FAQ</li>
    <li>PRODUCTS</li>
    <li>TERMS</li>
    <li>POLICY</li>
</ul>
<ul>
    <li>INSTAGRAM</li>
    <li>TWITTER</li>
    <li>FACEBOOK</li>
    <li>PINTEREST</li>
    <li>BLOG</li>
</ul>


    <div className="input">
    <h4>
    SUBSCRIBE TO OUR NEWSLETTER
    </h4>
        <input type="text" placeholder='your email' /> <button>Send</button>
    </div>

</div>
</footer>
  )
}

export default Footer