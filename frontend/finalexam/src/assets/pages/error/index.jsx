import React from 'react'
import {FaRegSadCry} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './index.scss'
const Error = () => {
    const navigate= useNavigate()
  return (
    <div className='error'>
      <span>404 not found</span>
      <FaRegSadCry className='icon'/>
      <p>Sorry, we couldn't find the page you were looking for.</p>

      <button onClick={()=>navigate('/')}>back to home</button>
    </div>
  )
}

export default Error
