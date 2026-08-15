import { useState } from 'react';

import Carousels from './Carousels';
import GetItems from '../Components/GetItems';
import SwiperSection from '../Components/SwiperSection';

import '../CSS/Details.css';
import Offer from './Offer';
import Chef from './Chef';

const Home = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Carousels />
      <SwiperSection />

      <GetItems onLoadingChange={setLoading} />

      <Offer />
      <Chef />
    </>
  );
};

export default Home;