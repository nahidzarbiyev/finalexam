import React from 'react'
import './index.scss'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='text'>
        <h2>CONTACT US</h2>
        <span>To get special offers to your email</span>
        <p>
        Amsterdam CA 90291
        </p>
        <p>
        email@site.com
        </p>
        <p>
        +1 (234) 56-78
        </p>
        <p>
        @natural.cosmetic
        </p>
        </div>
        <div className="input">
            <form action="">
                <div className='inputs'><input type="text" placeholder='name*'/> <input type="text" placeholder='Email*' /></div>
                <textarea name="" id="" cols="20" rows="5" placeholder='Message'></textarea>
                <button>SEND MESSAGE</button>
            </form>
        </div>
    </div>
  )
}

export default Contact