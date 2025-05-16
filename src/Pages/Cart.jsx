
import '../CSS/Cart.css';
import { useSelector } from 'react-redux';
import { MdAdd } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { addRemoveQuantity, RemoveToCart } from '../Slice/DishSlice';

const Cart = () => {
  const CartList = useSelector(state => state.allDish.dish);
  const isAuthenticated = useSelector(state => state.authUser.isAuthenticated);
  console.log(isAuthenticated);

  const dispatch = useDispatch();

  const totalPrice = CartList.reduce((total, item) => total + (item.price * item.quantity), 0);
  const sgst = Math.ceil((totalPrice * 0.09));
  const cgst = Math.ceil((totalPrice * 0.09));

  const grandTotal = (Math.ceil(totalPrice) + sgst + cgst);

  const allCartList = CartList.map((item) => {
    return (

      <div key={item.id}>
        <div className="menu-item">
          <div className="item-image">
            <img src={item.image} alt={`${item.name}`} />
          </div>
          <div className="item-details">
            <h3>{item.name}</h3>
            <span className="item-price">₹{item.price}</span>
          </div>
          <div className="item-controls">
            <div className="quantity-section">
              <div className="stock-info">Stock: {item.stock} Left</div>
              <div className="quantity-selector">
                <button
                  className='inc-dic'
                  onClick={() => dispatch(addRemoveQuantity({ itemId: item.id, stock: item.stock, quantityValue: -1 }))}
                >
                  <TiMinus className='incdec-scale' />
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button
                  className='inc-dic'
                  onClick={() => dispatch(addRemoveQuantity({ itemId: item.id, stock: item.stock, quantityValue: 1 }))}
                >
                  <MdAdd className='incdec-scale' />
                </button>
              </div>
            </div>
            <div className="item-total">
              <span className='item-total--Price'>₹{(item.price * item.quantity).toFixed(2)}</span>
              <button
                className="remove-btn wish-remove--btn"
                onClick={() => dispatch(RemoveToCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  });

  return (
    <div className="cart-container">
      <h1>Your Cart Items</h1>
      <div className="divider"></div>

      {!isAuthenticated || CartList.length === 0 ? (
        <div className="empty-cart">

          {!isAuthenticated ? (
            <span>Please login to view your cart</span>

          ) : (
            <p>Your cart is empty</p>
          )}

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
                <span>Total /</span>
                <span> Remove</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {allCartList}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{Math.ceil(totalPrice)}</span>
            </div>
            <div className="summary-row">
              <span>SGST (9%):</span>
              <span>₹{Math.ceil(sgst)}</span>
            </div>
            <div className="summary-row">
              <span>CGST (9%):</span>
              <span>₹{Math.ceil(cgst)}</span>
            </div>
            <div className="divider"></div>
            <div className="summary-row grand-total">
              <span>Grand Total:</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;