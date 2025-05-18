import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Wish from "./Pages/Wish";
import NotFound from "./Pages/NotFound";
import PaymentSuccess from "./Pages/PaymentSuccess";
import TrackOrder from "./Pages/TrackOrders";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="home" element={<Home />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="wish" element={<Wish />}/>
      <Route path="success" element={<PaymentSuccess />}/>
      <Route path="track-order" element={<TrackOrder />}/>
      


      <Route path="*" element={<NotFound />}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App