import React, { useState } from 'react';
import '../CSS/Cart.css'
import { useSelector } from 'react-redux';
import { MdAdd } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { addRemoveQuantity, RemoveToCart } from '../Slice/DishSlice';



const Cart = () => {
  // const [quintity,setQuintity]=useState(1);
  const CartList = useSelector(state => state.allDish.dish)

  const dispatch = useDispatch()

  const allCartList = CartList.map((item, index) => {
    console.log(item.quintity);
    
    return (
      <>
        <div className="menu-item" key={index}>
          <div className="item-image">
            <img src={item.image} alt={`${item.name} image`} />
          </div>
          <div className="item-details">
            <h3>{item.name}</h3>
            <span className="item-price">₹{item.price}</span>
          </div>
          <div className="item-controls">
            <div className="quantity-selector">
              <button className='inc-dic'
               onClick={()=>{dispatch(addRemoveQuantity({itemId:item.id, quantityValue:-1}))}}>
                <TiMinus className='incdec-scale' />
              </button>
              <input type="text" value={item.quantity} readOnly />
              <button className='inc-dic'
              onClick={()=>{dispatch(addRemoveQuantity({itemId:item.id, quantityValue:1}))}}
              >
                <MdAdd className='incdec-scale' />
              </button>
            </div>
            <div className="item-total">
              <span className='item-total--Price'>₹{item.price * item.quantity}</span>
              <button className="remove-btn wish-remove--btn"
                onClick={() => { dispatch(RemoveToCart(item.id)) }}>Remove</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>

      </>
    )
  })
  console.log(allCartList);


  return (
    <div className="cart-container" style={{ marginTop: '10rem' }}>
      <h1>This is Cart Items</h1>
      <div className="divider"></div>

      <div className="menu-header">
        <h2>Menu Image</h2>
        <div className='menu-titles'>
          <div className="menu-details">
            <span className="menu-name">Menu Name</span>
            {/* <span className="">& Price</span> */}
          </div>
          <div className="quantity-controls">
            <span>Quantity</span>
          </div>
          <div className="price-total">
            <span>Total /</span>
            <span> Remove</span>
          </div>
        </div>


      </div>

      <div className="divider"></div>

      {allCartList}

    </div>
  );
};

export default Cart;