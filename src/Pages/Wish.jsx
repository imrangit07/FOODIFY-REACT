import React from 'react';
import '../CSS/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveToWishItem } from '../Slice/DishSlice';

const Wish = () => {
    const WishList = useSelector(state => state.allDish.wish);
    const dispatch = useDispatch();

    const allWishList = WishList.map((item) => {
        return (
            <React.Fragment key={item.id}>
                <div className="menu-item">
                    <div className="item-image">
                        <img src={item.image} alt={`${item.name}`} />
                    </div>
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <span className="item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="item-controls">
                        <div className="quantity-section">
                            <span className="quantity-display">{item.quantity}</span>
                        </div>
                        <div className="item-total">
                            <button
                                className="add-to--cart"
                                onClick={() => {
                                    dispatch(AddToCart({
                                        id: item.id,
                                        name: item.name,
                                        price: item.price,
                                        discount: item.discount,
                                        discription: item.discription,
                                        image: item.image,
                                        quantity: item.quantity
                                    }))
                                }}
                            >
                                Add To Cart
                            </button>
                            <button
                                className='wish-remove--btn'
                                onClick={() => dispatch(RemoveToWishItem(item.id))}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </React.Fragment>
        )
    });

    return (
        <div className="cart-container wishlist-container">
            <h1>Your Wishlist Items</h1>
            <div className="divider"></div>

            {WishList.length === 0 ? (
                <div className="empty-wishlist">
                    <p>Your wishlist is empty</p>
                    <p className="empty-message">Add items to your wishlist to see them here</p>
                </div>
            ) : (
                <>
                    <div className="menu-header">
                        <h2>Menu Image</h2>
                        <div className='menu-titles'>
                            <div className="menu-details">
                                <span className="menu-name">Menu Name</span>
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
                </>
            )}
        </div>
    );
};

export default Wish;