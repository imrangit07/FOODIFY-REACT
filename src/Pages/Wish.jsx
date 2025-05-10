import React from 'react';
import '../CSS/Cart.css'
import { useSelector } from 'react-redux';
import { MdAdd } from "react-icons/md";
import { TiMinus } from "react-icons/ti";

const Wish = () => {
    const WishList = useSelector(state => state.allDish.wish)

    const allWishList = WishList.map((key, index) => {
        return (
            <>

                <div className="menu-item">
                    <div className="item-image">
                        <img src={key.image} alt={`${key.name} image`} />
                    </div>
                    <div className="item-details">
                        <h3>{key.name}</h3>
                        <span className="item-price">₹{key.price}</span>
                    </div>
                    <div className="item-controls">
                        <div className="quantity-selector">
                             <button className='inc-dic'><TiMinus className='incdec-scale'/></button>
                                          <input type="text" value="1" readOnly />
                                          <button className='inc-dic'><MdAdd className='incdec-scale'/></button>
                        </div>
                        <div className="item-total">
                            <button 
                            className="add-to--cart"
                           >Add To Cart</button>
                            <button 
                            className='wish-remove--btn'
                           >Remove</button>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>

            </>
        )
    })
    console.log(allWishList);


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
                        <span>Add /</span>
                        <span> Remove</span>
                    </div>
                </div>


            </div>

            <div className="divider"></div>

            {allWishList}

        </div>
    );
};

export default Wish;