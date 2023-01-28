import React from 'react'
import './index.scss'
import {FaRegHeart} from 'react-icons/fa'
import {BsEmojiSmile,BsSun} from 'react-icons/bs'
const Aboutus = () => {
  return (
    <div className='aboutus'><h1>
        About us</h1>
        <div className='cards'>

<div className="card">
<FaRegHeart className='icon'/>
<h3>
MADE WITH LOVE
</h3>
<p>
Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.
</p>
</div>
<div className="card">
<BsEmojiSmile  className='icon'/>
<h3>
MADE WITH LOVE
</h3>
<p>
Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.
</p>
</div>
<div className="card">
<BsSun  className='icon'/>
<h3>
MADE WITH LOVE
</h3>
<p>
Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.
</p>
</div>
            </div>
            </div>
  )
}

export default Aboutus