import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Helmet} from "react-helmet";
import './index.scss'
const Details = () => {
const [data, setData] = useState([])
const navigate= useNavigate()
    const {_id} = useParams()

    useEffect(() => {
      
    axios.get(`http://localhost:8000/cosmetics/${_id}`)
 .then((res)=>setData(res.data))
    }, [_id])
   
    
const handleDelete=(obj)=>{
    axios.delete(`http://localhost:8000/cosmetics/${obj._id}`)
   navigate('/')
}
  return (
    
 <>

    <div className='details'>
    <Helmet>
                <meta charSet="utf-8" />
                <title>{data.name}</title>

            </Helmet>
<div className="card">

    <img src={data.image} alt="" />
    <p>{data.name}</p>
    <p className='price'>$ {data.price}</p>
    <div className="buttons">
        <button onClick={()=>navigate('/')}>back to home</button>
        <button onClick={()=>handleDelete(data)}>delete</button>
    </div>
</div>

</div>
 </>
  )
}

export default Details