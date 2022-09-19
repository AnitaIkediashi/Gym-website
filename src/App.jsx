import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Training from './pages/training/Training'
import Pricing from './pages/pricing/Pricing'
import Contact from './pages/contact/Contact'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='training' element={<Training/>}/>
            <Route path='pricing' element={<Pricing/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<SignIn/>}/>
            <Route path='signUp' element={<SignUp/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App