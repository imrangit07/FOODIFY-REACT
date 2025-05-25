import '../CSS/Offer.css'
import { FaArrowRight } from "react-icons/fa";

import ThumbImg from "../../public/Images/dishes2/ctaThumb1_1.png"
import ctaShape1 from "../../public/Images/dishes2/ctaShape1_1.png"
import ctaShape2 from "../../public/Images/dishes2/ctaShape1_2.png"
import ctaShape3 from "../../public/Images/dishes2/ctaShape1_3.png"
const Offer = () => {
    return (
        <div className="offer-section">
            <div className="offer-wrapper">
                <div className="offer-detalis">
                    <h6 className='offer-title'>WELCOME FRESHEAT</h6>
                    <h3 className='offer-main--title'>TODAY SPACIAL FOOD</h3>
                    <p className='offer-subTitle'>Limits Time Offer</p>

                    <div>
                        <button className='offer-btn'>ORDER NOW  <FaArrowRight style={{marginLeft:"10px"}}/></button>
                    </div>
                </div>
                <div className="offer-img">
                    <img src={ThumbImg} alt="" />
                </div>
            </div>

            <img src={ctaShape1} alt="img" className='shape1' />
            <img src={ctaShape2} alt="img" className='shape2' />
            <img src={ctaShape3} alt="img" className='shape3' />
        </div>
    );
}

export default Offer;