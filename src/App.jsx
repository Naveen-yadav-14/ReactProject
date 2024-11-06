import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import './App.css'
import { useSelector } from "react-redux";

function App(){

  const cart = useSelector(state=>state.cart)

  const listItems = cart.reduce((sum,item)=>sum+item.quantity,0)

  return(
    <>
    <BrowserRouter>
    <nav>
    <Link to='/home'>Home</Link>
    <Link to='/veg'>Veg</Link>
    <Link to={'/nonveg'}>Non-Veg</Link>
    <Link to={'/cart'}>Cart{listItems}</Link>
    <Link to={'/purchase'}>PurchaseHistory</Link>
    <Link to={'/aboutus'}>AboutUs</Link>
    <Link to={'/contactus'}>ContactUs</Link>
    </nav>

    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/veg" element={<Veg/>}/>
      <Route path="/nonveg" element={<NonVeg/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/purchase" element={<PurchaseHistory/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;