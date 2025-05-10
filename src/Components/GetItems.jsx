import axios from 'axios';
import dbPath from '../Config/DbPath';
import { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import '../CSS/ItemsCard.css';
import cardBgImag from '../../public/Images/cardBgImg.jpeg'
import { AddToCart } from '../Slice/DishSlice';
import { AddToWishList } from '../Slice/DishSlice';
import { useDispatch } from 'react-redux';

const GetItems = () => {
  const [dishes, setDishes] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredHeart, setHoveredHeart] = useState(null);

  const dispatch = useDispatch();

  const LoadItems = async () => {
    try {
      const res = await axios.get(dbPath);
      setDishes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadItems();
  }, []);



  const allDishes = dishes.map((dish, index) => {
    const isHovered = hoveredCard === index;
    const isWishHovered = hoveredHeart === index;

    return (
      <div
        className={`dish-card ${isHovered ? 'dish-card-img' : 'dish-card-bg'}`}
        key={index}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          transition: 'all 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none'
        }}
      >


        <div
          className='card-blur'
          style={{
            backgroundColor: isHovered ? 'rgba(0,0,0,0.6)' : "",
            height: '100%',
          }}>
          <div className="heart-icon"
            style={{
              transition: 'all 0.3s ease-in-out',
              backgroundColor: isWishHovered ? 'black' : "",
              color: isWishHovered ? 'black' : "",
            }}
            key={index}
            // onMouseEnter={() => }
            // onMouseLeave={() => setHoveredHeart(null)}

            onClick={() => {
              setHoveredHeart(index)
              dispatch(AddToWishList({
                id: dish.id,
                name: dish.name,
                price: dish.price,
                discount: dish.discount,
                discription: dish.discription,
                image: dish.image
              }))
            }}
          >
            {isWishHovered ? <IoMdHeart style={{ color: "red",width:'20px',height:"20px",borderRadius:"50%" }} /> : <FaRegHeart />}
          </div>

          <div className="bag-icon"
            style={{
              visibility: isHovered ? 'visible' : 'hidden',
              top: isHovered ? '5rem' : '16rem',
              transition: 'top 0.5s ease-in-out',
            }}
            onClick={() => {
              dispatch(AddToCart({
                id: dish.id,
                name: dish.name,
                price: dish.price,
                discount: dish.discount,
                discription: dish.discription,
                image: dish.image
              }))
            }} >
            <MdOutlineShoppingBag />
          </div>

          <div className="eye-icon"
            style={{
              visibility: isHovered ? 'visible' : 'hidden',
              top: isHovered ? '9rem' : '20rem',
              transition: 'top 0.5s ease-in-out',
            }}>
            <MdOutlineRemoveRedEye />
          </div>

          <img
            src={dish.image}
            alt={dish.name}
            className="dish-image"
            style={{
              transition: 'all 0.3s ease-in-out',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <h3
            className="dish-name"
            style={{
              color: isHovered ? 'white' : '',
              transition: 'color 0.3s ease-in-out'
            }}
          >
            {dish.name}
          </h3>
          <p
            className="subtext"
            style={{
              color: isHovered ? 'white' : '',
              transition: 'color 0.3s ease-in-out'
            }}
          >
            The Registration Fee
          </p>
          <p
            className="price"
            style={{
              transition: 'all 0.3s ease-in-out',
              color: isHovered ? '#FFA100' : ''
            }}
          >
            ₹{dish.price}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className="dishes-section">
      <div className="header">
        <span className="tag">🔥 POPULAR DISHES 🔥</span>
        <h2>Best Selling Dishes</h2>
      </div>
      <div className="dishes-container">{allDishes}</div>
    </section>
  );
};

export default GetItems;