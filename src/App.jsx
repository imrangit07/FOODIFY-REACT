import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Wish from "./Pages/Wish";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";

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
      <Route path="checkout" element={<Checkout />}/>


      <Route path="*" element={<NotFound />}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App