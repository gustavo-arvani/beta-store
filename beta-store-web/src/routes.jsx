import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produtos';

import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/produtos" element={<Produto />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;