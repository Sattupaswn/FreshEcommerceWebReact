import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Order from './Pages/Order'
import  Navbar  from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product/:ProductId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
        <Route path='/Order' element={<Order/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App