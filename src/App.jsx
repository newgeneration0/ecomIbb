
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Men from './pages/Men'
import MenView from './pages/MenView'
import ProductCard from './components/ProductCard'
// import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import LoginLandPage from './pages/LoginLandPage'
import Login from './components/Login'
import Register from './components/Register'
import Favourite from './components/Favourite'
// import TestCart from './components/TestCart'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/menview' element={<MenView />}></Route>
        <Route path="/product/:id" element={<ProductCard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/favourite' element={<Favourite />}></Route>
         {/* <Route path='/testingcart' element={<TestCart />}></Route> */}
        <Route path='/loginlandpage' element={<LoginLandPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
