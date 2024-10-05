import React from 'react'
import Navber from './Components/Navber'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Childern from './Pages/Childern'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SellerSignup from './Pages/Seller/Pages/SellerSignup'
import Sellerlogin from './Pages/Seller/Pages/Sellerlogin'
import SellerDashboard from './Pages/Seller/SellerDashboard'
import Cart from './Pages/Cart'
import PeroductDetails from './Pages/PeroductDetails'


const App = () => {
  return (
    <>
    <Navber/>

      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/men" element = {<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/childern' element={<Childern/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/seller-login' element={<Sellerlogin/>}/>
          <Route path='/seller-signup' element={<SellerSignup/>}/>
          <Route path='/seller-dashborad' element={<SellerDashboard/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product-detail/:id' element={<PeroductDetails/>}/>
          
      </Routes>
    </>
  )
}

export default App
