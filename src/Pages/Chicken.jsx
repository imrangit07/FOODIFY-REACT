import React, { useEffect, useState } from "react";
import "../CSS/PageSection.css";
import '../CSS/ItemsCard.css';
import dbPath from '../Config/DbPath';
import axios from "axios";

import Details from "./details";

import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import { AddToCart } from '../Slice/DishSlice';
import { AddToWishList } from '../Slice/DishSlice';
import { useDispatch } from 'react-redux';

import cardBgImag from '../../public/Images/cardBgImg.jpeg'
import popularDishesShape1_1 from '../../public/Images/dishes2/popularDishesShape1_1.png'
import popularDishesShape1_2 from '../../public/Images/dishes2/popularDishesShape1_2.png'
const Chicken = () => {
  const [dishes, setDishes] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredHeart, setHoveredHeart] = useState(null);

  const [isDetailOpen, setDetailOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const dispatch = useDispatch();
  const LoadItems = async () => {
    try {
      const res = await axios.get(`${dbPath}/?catagory=chicken`);
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

      <React.Fragment key={index} >
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

              onClick={() => {
                setHoveredHeart(index)
                dispatch(AddToWishList({
                  id: dish.id,
                  name: dish.name,
                  price: dish.price,
                  discount: dish.discount,
                  discription: dish.discription,
                  image: dish.image,
                  stock: dish.stock
                }))
              }}
            >
              {isWishHovered ? <IoMdHeart style={{ color: "red", width: '20px', height: "20px", borderRadius: "50%" }} /> : <FaRegHeart />}
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
                  image: dish.image,
                  stock: dish.stock
                }))
              }} >
              <MdOutlineShoppingBag />
            </div>

            <div className="eye-icon"
              style={{
                visibility: isHovered ? 'visible' : 'hidden',
                top: isHovered ? '9rem' : '20rem',
                transition: 'top 0.5s ease-in-out',
              }}
              onClick={() => {
                setSelectedDish(dish);
                setDetailOpen(true)
              }}
            >
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
      </React.Fragment>
    );
  });

  return (
    <>
      <div className='page-sections'>
        <h1 className="page-title">CHICKEN</h1>
        <ul>
          <li className="home-page">Home</li>
          /
          <li className="active-page">Chicken</li>
        </ul>
      </div>
      <section className="dishes-section">
        <div className='popular-shape'>
          <img src={popularDishesShape1_2} alt="" />
        </div>
        <div className="header">
          <span className="tag">🔥 POPULAR DISHES 🔥</span>
          <h2>Best Selling Dishes</h2>
        </div>

        <div className="dishes-container">{allDishes}</div>

        <div className='shape-img'>
          <img src={popularDishesShape1_1} alt="Shape" style={{ width: "110px" }} />
        </div>
        <div>
          <button className='all-itme--btn'>VIEW ALL ITME <FaArrowRight style={{ marginLeft: "20px" }} /></button>
        </div>
      </section>

      <div className='Details'>
        {isDetailOpen && <Details dishData={selectedDish} onClose={() => setDetailOpen(false)} />}
      </div>
    </>
  )
}

export default Chicken