import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Wishlist from '../components/wishlist'
import AddProducts from '../pages/addproducts'
import Details from '../pages/details'
import Home from '../pages/home'
import Error from '../pages/error'
const Routing = () => {
  const [favorite, setFavorite] = useState([])
  return (
   <>
   <Routes>
<Route path='/' element={<Home favorite={favorite} setFavorite={setFavorite} />}/>
<Route path='/details/:_id' element={<Details/>}/>
<Route path='/wishlist' element={<Wishlist favorite={favorite} setFavorite={setFavorite}/>}/>
<Route path='/add-cosmetics' element={<AddProducts />}/>
<Route path='*' element={<Error/>}/>
   </Routes>
   </>
  )
}

export default Routing