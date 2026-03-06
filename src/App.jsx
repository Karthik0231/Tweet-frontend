import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResponsiveAppBar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import AddPost from './pages/AddPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/addpost' element={<AddPost/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
