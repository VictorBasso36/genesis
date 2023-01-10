import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../modules/Navbar'
import Footer from '../../modules/Footer'
import Contact from '../../modules/Contact'
import './index.css'

// modules
import BarScrollTop from './empreendimentosModules/BarScroll'
import MainBanner from './empreendimentosModules/MainBanner'
import SwiperPlantas from './empreendimentosModules/SwiperPlantas'
import BuildStatusMolude from './empreendimentosModules/BuildStatus'
import Lazer from './empreendimentosModules/Lazer'
import Localizacao from './empreendimentosModules/Localizacao'
import ScrollToTop from '../../modules/ScrollToTop'

function Empreedimento () {
        const {empreendimentoNome} = useParams();
  
        return (
            <>
            <ScrollToTop/>
            <Navbar/>
            <BarScrollTop/>
            <MainBanner/>
            <SwiperPlantas/>
            <Lazer/>
            <Localizacao/>
            <BuildStatusMolude/>
            <Contact/>
            <Footer/>
           </>
        )
      }
      
export default Empreedimento