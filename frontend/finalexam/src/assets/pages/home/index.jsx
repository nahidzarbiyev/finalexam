import React from 'react'
import Aboutus from '../../components/aboutus'
import Contact from '../../components/contact'
import Devoted from '../../components/devoted'
import OurPruducts from '../../components/ourproducts'
import SliderComponent from '../../components/sliderComponent'
import {Helmet} from "react-helmet";
const Home = ({favorite,setFavorite }) => {
  return (
    <>
 <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                
            </Helmet>
    <SliderComponent/>
    <Aboutus/>
    <Devoted/>
    <OurPruducts favorite={favorite} setFavorite={setFavorite}/>
    <Contact/>
    </>
  )
}

export default Home