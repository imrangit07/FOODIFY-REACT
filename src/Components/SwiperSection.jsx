import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import '../CSS/SwiperSection.css';

import img1 from '../../public/Images/dishes2/dishes1_1.png';
import img2 from '../../public/Images/dishes2/dishes1_2.png';
import img3 from '../../public/Images/dishes2/dishes1_3.png';
import img4 from '../../public/Images/dishes2/dishes1_4.png';
import img5 from '../../public/Images/dishes2/dishes1_5.png';
import img6 from '../../public/Images/dishes2/dishes1_6.png';
import img7 from '../../public/Images/dishes2/dishes1_7.png';
import img8 from '../../public/Images/dishes2/dishes1_8.png';
import img9 from '../../public/Images/dishes2/dishes1_9.png';
import img10 from '../../public/Images/dishes2/dishes1_10.png';
import circleShap from '../../public/Images/dishes2/circleShape.png';

const dishes = [
    { image: img1, name: 'Chinese', price: 280.99 },
    { image: img2, name: 'Fried Rice', price: 1000.99 },
    { image: img3, name: 'Grilled Chicken', price: 200.99 },
    { image: img4, name: 'Chicken Pizza', price: 260.99 },
    { image: img5, name: 'Chicken Noodles', price: 190.99 },
    { image: img6, name: 'Egg/Cucumber', price: 280.99 },
    { image: img7, name: 'Chicken Rice', price: 400.99 },
    { image: img8, name: 'Spatial Barger', price: 200.99 },
    { image: img9, name: 'Vege Burger', price: 260.99 },
    { image: img10, name: 'Brief Chicken', price: 190.99 },
];

const SwiperSection = () => {
    return (
        <div className="swiper-container">
            <div className='dish-card-back'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    autoplay={{
                        delay: 4000,
                        //   disableOnInteraction: true,
                    }}
                    loop={true}
                >
                    {dishes.map((dish, index) => (
                        <SwiperSlide key={index}>
                            <div className="dish-swip">    
                                <div className='dish-detail'>
                                     <div className="dish-image-wrapper">
                                    <div className="dish-border">
                                        <div className='circle-images'>
                                             <img src={circleShap} alt="circle img" className="circle-images1" />
                                             <img src={dish.image} alt={dish.name} className="dish-image" />
                                        </div>
                                       
                                    </div>
                                </div>
                                    <h3 className="dish-title">{dish.name}</h3>
                                    <p className="dish-price">₹{dish.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default SwiperSection;
