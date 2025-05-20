import Carousels from './Carousels'
import GetItems from '../Components/GetItems'
import SwiperSection from '../Components/SwiperSection'
// import Details from './Details'

import '../CSS/Details.css';
import Offer from './Offer';
import Chef from './Chef';

const Home = () => {

  return (
    <>
      <Carousels />
      <SwiperSection />
      <GetItems />
      <Offer/>
      <Chef/>

     
    </>
  )
}

export default Home