import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produtos';
import Detalhes from './pages/Detalhes';
import Carrinho from './pages/Carrinho';

import Header from './components/Header';
import Footer from './components/Footer';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/produtos" element={<Produto />} />
                <Route path="/detalhes/:id" element={<Detalhes />}/>
                <Route path='/carrinho' element={<Carrinho/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;