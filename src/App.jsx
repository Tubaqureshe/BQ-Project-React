import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'
import Products from './Pages/Products'
import Category from './Pages/Category'
import Page404 from './pages/Page404'
import SignUp from './Pages/SignUp'
import Footer from './Components/Footer'
import Navigation from './Components/Navigation'
import Registration from './Components/Registration'
import { Routes,Route } from 'react-router-dom'
import Aos from 'aos'
import'aos/dist/aos.css';


export default function App() {
  Aos.init();
  return (
    <>

     <Navigation />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products/:productID" element={<ProductPage />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/LogIn' element={<Login/>} />
        <Route path='/SignIn' element={<SignUp />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/products/category/:CategoryName' element={<CategoryPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      

   
     <Footer />
    </>
  )
}

