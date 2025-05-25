
import { useSelector } from 'react-redux';
import '../CSS/TrackOrders.css';

const TrackOrder = () => {
  const orderData = useSelector(state => state.checkout?.orderData);

 
  if (!orderData) {
    return (
      <div className="track-order-container">
        <h2>No Order Found</h2>
        <p>Please place an order first to track it.</p>
      </div>
    );
  }


  const items = orderData.items || [];
  const grandTotal = orderData.grandTotal ? orderData.grandTotal.toFixed(2) : '0.00';
  const total = orderData.total ? orderData.total.toFixed(2) : '0.00';
  const tax = orderData.tax ? (orderData.tax * 2).toFixed(2) : '0.00';

  return (
    <div className="track-order-container">
      <h2>Your Order Details</h2>
      
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="order-info">
          <p><strong>Order Status:</strong> <span className="status-processing">Processing</span></p>
          <p><strong>Order Total:</strong> ₹{grandTotal}</p>
          <p><strong>Payment Method:</strong> {
            orderData.paymentMethod === 'upi' ? 'UPI' : 
            orderData.paymentMethod === 'credit-card' ? 'Credit/Debit Card' : 
            'Cash on Delivery'
          }</p>
        </div>
      </div>

      <div className="delivery-details">
        <h3>Delivery Information</h3>
        <div className="address-card">
          <p><strong>{orderData.name || 'Not specified'}</strong></p>
          <p>{orderData.address || 'Address not provided'}</p>
          <p>
            {orderData.city || 'City not specified'}, 
            {orderData.state || 'State not specified'} - 
            {orderData.pincode || 'Pincode not specified'}
          </p>
          <p><strong>Phone:</strong> {orderData.phone || 'Not provided'}</p>
          <p><strong>Email:</strong> {orderData.email || 'Not provided'}</p>
          {orderData.deliveryInstructions && (
            <p><strong>Delivery Instructions:</strong> {orderData.deliveryInstructions}</p>
          )}
        </div>
      </div>

      {items.length > 0 ? (
        <div className="order-items">
          <h3>Ordered Items ({items.length})</h3>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <div className="item-image">
                  <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name || 'Product'} />
                </div>
                <div className="item-details">
                  <h4>{item.name || 'Unnamed Product'}</h4>
                  <p>Quantity: {item.quantity || 0}</p>
                  <p>Price: ₹{(item.price || 0).toFixed(2)}</p>
                  <p>Total: ₹{((item.price || 0) * (item.quantity || 0)).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="order-items">
          <h3>No Items in Order</h3>
        </div>
      )}

      <div className="order-breakdown">
        <h3>Payment Breakdown</h3>
        <div className="breakdown-list">
          <p><span>Subtotal:</span> <span>₹{total}</span></p>
          <p><span>Tax (SGST + CGST):</span> <span>₹{tax}</span></p>
          <p className="grand-total"><span>Grand Total:</span> <span>₹{grandTotal}</span></p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;