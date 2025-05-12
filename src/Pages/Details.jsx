import { MdClose } from "react-icons/md";
import '../CSS/Details.css';
import { MdAdd } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import circleImg from '../../public/Images/dishes2/circleShape.png';

import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Details = ({ dishData, onClose }) => {
  if (!dishData) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>
          <MdClose />
        </button>

        <div className="modal-body">
       
          <div className="modal-left">
            <div className="image-wrapper">
              <img className="circle-img" src={circleImg} alt="circle shape" />
              <img className="main-img" src={dishData.image} alt={dishData.name} />
            </div>
          </div>

         
          <div className="modal-right">
            <h2 className="dish-title">{dishData.name}</h2>
            <div className="rating">
              ★★★★★ <span>(2 customer reviews)</span>
            </div>
            <div className="dish-price">₹{dishData.price}</div>
            <p className="dish-desc">
             {dishData.discription}
            </p>

            <div className="quantity-box">
              <span className="quantity-title">Quantity</span>
              <button><TiMinus className='incdec-scale' /></button>
                           <input type="text" value={1} readOnly />
              <button><MdAdd className='incdec-scale' /></button>
            </div>

            <div className="btn-group">
              <button className="add-cart">Add to Cart</button>
              <button className="wishlist">Add to Wishlist</button>
            </div>

            <div className="share-box">
              <span className="share-title">Share With Friends</span>
              <div className="social-icons">
                <TiSocialFacebook />
                <FaYoutube />
                <BsTwitterX />
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

