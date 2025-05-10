import React from 'react'
import Layout from '../Layout'
import Carousels from './Carousels'
import GetItems from '../Components/GetItems'
import SwiperSection from '../Components/SwiperSection'

const Home = () => {
  return (
    <>
     {/* <Layout /> */}
     <Carousels />
     <SwiperSection/>
     <GetItems />
    </>
  )
}

export default Home