import { } from 'react'
<<<<<<< HEAD
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
=======
import {BrowserRouter, Routes, Route } from 'react-router-dom'
>>>>>>> 707b866dedde2497f2014a759aa29c3dee201840
import Nav from './Nav'
import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Footer from './Footer'



function App() {
  
  return (
    <>
    <BrowserRouter>      
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Produtos' element={<Produtos/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App