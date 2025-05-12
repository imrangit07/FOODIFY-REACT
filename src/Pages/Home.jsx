import React, { useState } from 'react'
import Layout from '../Layout'
import Carousels from './Carousels'
import GetItems from '../Components/GetItems'
import SwiperSection from '../Components/SwiperSection'
// import Details from './Details'

import '../CSS/Details.css';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(true);

  return (
    <>
      {/* <Layout /> */}
      <Carousels />
      <SwiperSection />
      <GetItems />
      {/* <Details/> */}

     
    </>
  )
}

export default Home