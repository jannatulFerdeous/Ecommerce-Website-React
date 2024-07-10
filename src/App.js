import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import HomePage from './pages/home/HomePage';
import { Product } from './components/Product';
import Footer from './components/Footer';




function App(){
    return (
        <div>
        <BrowserRouter>
        <NavBar/> 
       
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            </Route>
            
                           
        </Routes>
        <Footer/>
 
        </BrowserRouter>       
        </div>
    ); 
}

export default App; 