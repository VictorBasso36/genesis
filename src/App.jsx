import { useState, useCallback } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route, useParams,Navigate, Link, useNavigate} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'
import 'animate.css';

import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Portifolio from './pages/Portifolio'
import Contato from './pages/Contato'
import Empreendimento from './pages/Empreendimento'
import ScrollToTop from './modules/Scrolltotop'


import ConvertWhatsapp from './modules/whatsappConvert'


function App() {
  
  return (
    <div className="App">
      <ConvertWhatsapp/>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/QuemSomos/" onClick={scrollTo()} element={<QuemSomos/>} />
          <Route path="/Portifolio/" element={<Portifolio/>} />
          <Route path="/Contato/" element={<Contato/>} />
          <Route path="/Empreendimento/:empreendimentoNome/"  element={<Empreendimento/>} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
