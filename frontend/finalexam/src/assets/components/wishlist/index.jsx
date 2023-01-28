import React from 'react'
import './index.scss'
import {AiFillHeart} from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom'

import {Helmet} from "react-helmet";


const Wishlist = ({favorite,setFavorite }) => {
    const navigate = useNavigate()
    const removefavorite =(obj)=>{
        let filteredfavorite = favorite.filter((el)=>el._id!==obj._id)
        setFavorite(filteredfavorite)
      
    }

  return (
    <div className='wishlist'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>

            </Helmet>
        {
            favorite.length === 0 
            ?
            <div className='empty'>
                <p>
                
you do not have a favorite product
                </p>
            </div>
            :
            <>
            {
            favorite.map((el)=>{
                return(
                    <div className="card">
                        <img src={el.image} alt="" />
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                        <span className='icon' onClick={()=>removefavorite(el)}><AiFillHeart/></span>
                    </div>
                )
            })
        }
            </>
        }
    </div>
  )
}

export default Wishlist