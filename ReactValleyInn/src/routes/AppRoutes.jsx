
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import PricesPage from '../pages/PricesPage'


export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
             <Route path='/prices' element={<PricesPage/>}/>
               <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
            )
}