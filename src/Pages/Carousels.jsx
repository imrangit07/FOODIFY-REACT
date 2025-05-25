import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../CSS/Carousels.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


import banner1 from '../../public/Images/Banners/mainBanner-1.png';
import banner2 from '../../public/Images/Banners/mainBanner-2.png';
import banner3 from '../../public/Images/Banners/mainBanner-3.png';
import banner4 from '../../public/Images/Banners/mainBanner-4.png';
import banner5 from '../../public/Images/Banners/mainBanner-5.png';

import banner1Tablet from '../../public/Images/Banners/mainBanner-1-Tablet.png';
import banner1Mobail from '../../public/Images/Banners/mainBanner-1-Mobail.png';

import banner2Tablet from '../../public/Images/Banners/mainBanner-2-Tablet.png';
import banner2Mobail from '../../public/Images/Banners/mainBanner-2-Mobail.png';

import banner3Tablet from '../../public/Images/Banners/mainBanner-3-Tablet.png';
import banner3Mobail from '../../public/Images/Banners/mainBanner-3-Mobail.png';

import banner4Tablet from '../../public/Images/Banners/mainBanner-4-Tablet.png';
import banner4Mobail from '../../public/Images/Banners/mainBanner-4-Mobail.png';

import banner5Tablet from '../../public/Images/Banners/mainBanner-5-Tablet.png';
import banner5Mobail from '../../public/Images/Banners/mainBanner-5-Mobail.png';



const Carousels = () => {

  return (
    <div style={{ padding: "20px 20px" }} className='carousels-marginTop'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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

        <SwiperSlide>
          <picture>
            <source media="(max-width: 600px)" srcSet={banner1Mobail} />
            <source media="(max-width: 1024px)" srcSet={banner1Tablet} />
            <img src={banner1} alt="Banner Image" style={{ width: "100%", height: "auto" }} />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            <source media="(max-width: 600px)" srcSet={banner2Mobail} />
            <source media="(max-width: 1024px)" srcSet={banner2Tablet} />
            <img src={banner2} alt="Banner Image" style={{ width: "100%", height: "auto" }} />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(max-width: 600px)" srcSet={banner3Mobail} />
            <source media="(max-width: 1024px)" srcSet={banner3Tablet} />
            <img src={banner3} alt="Banner Image" style={{ width: "100%", height: "auto" }} />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(max-width: 600px)" srcSet={banner4Mobail} />
            <source media="(max-width: 1024px)" srcSet={banner4Tablet} />
            <img src={banner4} alt="Banner Image" style={{ width: "100%", height: "auto" }} />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(max-width: 600px)" srcSet={banner5Mobail} />
            <source media="(max-width: 1024px)" srcSet={banner5Tablet} />
            <img src={banner5} alt="Banner Image" style={{ width: "100%", height: "auto" }} />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>



  )
}

export default Carousels;