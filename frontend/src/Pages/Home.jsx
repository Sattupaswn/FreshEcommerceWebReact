import React, { useContext, useEffect } from 'react'
import Hero from '../Components/Hero';
import LatestCollection from '../Components/LatestCollection';
import { ShopContext } from '../Context/ShopContext';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';
import NewsLetterBox from '../Components/NewsLetterBox';

const Home = () => {
  const Product= useContext(ShopContext);
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home;