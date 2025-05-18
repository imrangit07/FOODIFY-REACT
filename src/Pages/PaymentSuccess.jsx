import { useNavigate } from 'react-router-dom';
import '../CSS/PaymentSuccess.css';
import { FaCheck } from "react-icons/fa6";
import { PiPoliceCarThin } from "react-icons/pi";
import { useSelector } from 'react-redux';

const PaymentSuccess = () => {
  const CheckOutData = useSelector(state=>state.checkout.orderData);
  console.log(CheckOutData);
  const {grandTotal,paymentMethod,address,name,city,pincode} = CheckOutData;
  
  const navigate = useNavigate();

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <div className="success-icon">
          <FaCheck style={{color:"#fff",fontSize:"30px"}}/>
        </div>
        <h2>Payment Successful!</h2>
        <p className="success-message">Thank you for your order. Your food is being prepared.</p>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-details">
            <div className="detail-row">
              <span>Order ID:</span>
              <span>{'#' + Math.floor(Math.random() * 1000000)}</span>
            </div>
            <div className="detail-row">
              <span>Total Amount:</span>
              <span>₹{grandTotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="detail-row">
              <span>Payment Method:</span>
              <span>
                {paymentMethod === 'credit-card' ? 'Credit/Debit Card' : 
                 paymentMethod === 'upi' ? 'UPI Payment' : 
                 'Cash on Delivery'}
              </span>
            </div>
            <div className="detail-row">
              <span>Delivery To:</span>
              <span>{name}, {address},{city}, {pincode}</span>
            </div>
          </div>
        </div>

        <div className="estimated-delivery">
          <p><PiPoliceCarThin style={{fontSize:"20px"}}/> Estimated Delivery: 30-45 minutes</p>
        </div>

        <div className="action-buttons">
          <button 
            className="track-order-btn"
            onClick={() => navigate('/track-order')}
          >
            Track Your Order
          </button>
          <button 
            className="back-to-home-btn"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>

        <div className="customer-support">
          <p>Need help? Call us at <a href="tel:+919876543210">+91 98765 43210</a></p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;