import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SpinnerComponent from '../spinner'
import './index.scss'
import {AiFillEye,AiFillHeart} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const OurPruducts = ({favorite,setFavorite }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
      
    axios.get(`http://localhost:8000/cosmetics/`)
    .then((res)=>setData(res.data))
    setLoading(false)
    }, [])


    //search


    const handleSearch =(e)=>{
        axios.get(`http://localhost:8000/cosmetics/`)
        .then((res)=>{
            let filtereddata = res.data.filter((el)=>el.name.toLowerCase().includes(e.target.value))
            setData(filtereddata)
        })
    }



    //sort

const handleSort=()=>{
setToggle(!toggle)
if (!toggle) {
   let sortdata =  data.sort((a,b)=>a.price-b.price)
   setData(sortdata)
}
else{
    axios.get(`http://localhost:8000/cosmetics/`)
    .then((res)=>setData(res.data))
}
}

// delete data from server and UI


const handleDelete=(obj)=>{
    axios.delete(`http://localhost:8000/cosmetics/${obj._id}`)
    let uptadeData = data.filter((el)=>el._id!==obj._id)
    setData(uptadeData)
}

//add wishlist and remove from wishlist
const handleFavorite =(obj)=>{

    let addFavorite = favorite.find((el)=>el._id=== obj._id)
    if (!addFavorite) {
        setFavorite([...favorite, obj])
    }
    else{
      let filteredFavorite =  favorite.filter((el)=>el._id!== obj._id)
      setFavorite(filteredFavorite)
    }
    console.log(favorite);

     if (favorite) {
        
     }
}
  return (
    <div className='ourproducts'>
        <h1>
        OurPruducts</h1>
        <div className='filtering'>
            <input type="text"  placeholder='Search by name' onChange={(e)=>handleSearch(e)}/>
            <button onClick={()=>handleSort()}>
               {
                (toggle)
                ?
                "sort by price"
                :
                "remove"
               } 
            </button>
        </div>
        <div>
            <div className="cards">
                {
                   loading
                   ?
                   <SpinnerComponent/>
                   :
                   <>
                   {
                    data?.map((el)=>{
                        return(
                         <div className="card">
                            <img src={el.image} alt="" />
                            <div className='child'>
                                <p>
                                    {el.name}
                                </p>
                                <span>$ {el.price}</span>
                                <div className="icons">
                                    <span><Link to={`/details/${el._id}`}><AiFillEye/></Link></span>
                                    <span onClick={()=>handleDelete(el)}><BsTrash/></span>
                                    <span onClick={()=>handleFavorite(el)}><AiFillHeart/></span>
                                </div>
                            </div>
                         </div>
                        )
                    })
                   }
                   </>
                }
            </div>
        </div>
        </div>
  )
}

export default OurPruducts