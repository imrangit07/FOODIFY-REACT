import React, { useState } from 'react';
import '../CSS/Checkout.css';
import { useNavigate } from 'react-router-dom';
import { CheckOutSuccess } from '../Slice/CheckOutSlice';
import { useDispatch } from 'react-redux';

const Checkout = ({ cartItems, tax, grandTotal, onClose, onSubmit }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'credit-card',
        deliveryInstructions: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const allFieldsFilled = () => {
        const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
        return requiredFields.every(field => formData[field].trim() !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (allFieldsFilled()) {
            const orderData = {
                ...formData,
                items: cartItems,
                total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                tax: tax,
                grandTotal: grandTotal
            };


            dispatch(CheckOutSuccess(orderData));


            if (onSubmit) {
                onSubmit(orderData);
            }

            navigate("/success");
        }
    };

    const calculateTotal = () => {
        return grandTotal;
    };

    return (
        <div className="checkout-overlay">
            <div className="checkout-container">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Checkout</h2>

                <div className="checkout-content">
                    <div className="order-summary">
                        <h3>Your Order</h3>
                        <div className="items-list">

                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-info">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-quantity">x {item.quantity}</span>
                                    </div>
                                    <div className="item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                                </div>

                            ))}
                            <div className="cart-item">
                                <div className="item-info">
                                    <span className="item-name">SGST</span>
                                </div>
                                <div className="item-price">₹{tax}</div>
                            </div>
                            <div className="cart-item">
                                <div className="item-info">
                                    <span className="item-name">CGST</span>
                                </div>
                                <div className="item-price">₹{tax}</div>
                            </div>
                        </div>
                        <div className="order-total">
                            <span>Total:</span>
                            <span>₹{calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <h3>Delivery Information</h3>

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Delivery Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                rows="3"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Pincode">Pincode</label>
                                <input
                                    type="text"
                                    id="Pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</label>
                            <textarea
                                id="deliveryInstructions"
                                name="deliveryInstructions"
                                value={formData.deliveryInstructions}
                                onChange={handleChange}
                                rows="2"
                                placeholder="e.g., call before delivery, leave at door, etc."
                            />
                        </div>

                        <div className="form-group payment-method">
                            <h3>Payment Method</h3>
                            <div className="payment-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="credit-card"
                                        checked={formData.paymentMethod === 'credit-card'}
                                        onChange={handleChange}
                                    />
                                    Credit/Debit Card
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cash-on-delivery"
                                        checked={formData.paymentMethod === 'cash-on-delivery'}
                                        onChange={handleChange}
                                    />
                                    Cash on Delivery
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="upi"
                                        checked={formData.paymentMethod === 'upi'}
                                        onChange={handleChange}
                                    />
                                    UPI Payment
                                </label>
                            </div>
                        </div>


                        {isSubmitting && !allFieldsFilled() && (
                            <div className="error-message">
                                Please fill all required fields
                            </div>
                        )}

                        <button type="submit"

                            className="submit-order-btn"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;