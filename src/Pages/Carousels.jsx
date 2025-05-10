

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';


import banner1 from '../../public/Images/Banners/mainBanner-1.png';
import banner2 from '../../public/Images/Banners/mainBanner-2.png';
import banner3 from '../../public/Images/Banners/mainBanner-3.png';
import banner4 from '../../public/Images/Banners/mainBanner-4.png';
import banner5 from '../../public/Images/Banners/mainBanner-5.png';



const Carousels = () => {

  return (
     <div style={{padding:"20px 20px",marginTop:"8rem"}}>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
    
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
      }}
      loop={true}

    >
      <SwiperSlide><img src={banner1} alt="Banner Image" style={{ width: "100%", height: "auto" }} /></SwiperSlide>
      <SwiperSlide><img src={banner2} alt="Banner Image" style={{ width: "100%", height: "auto" }} /></SwiperSlide>
      <SwiperSlide><img src={banner3} alt="Banner Image" style={{ width: "100%", height: "auto" }} /></SwiperSlide>
      <SwiperSlide><img src={banner4} alt="Banner Image" style={{ width: "100%", height: "auto" }} /></SwiperSlide>
      <SwiperSlide><img src={banner5} alt="Banner Image" style={{ width: "100%", height: "auto" }} /></SwiperSlide>
    </Swiper>
     </div>

    

  )
}

export default Carousels;