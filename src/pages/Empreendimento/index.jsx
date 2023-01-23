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
import ScrollToTop from '../../modules/Scrolltotop.jsx'
import React from "react";
import {Helmet} from "react-helmet";
import DataJSON from '../../../public/empreendimentos.json'
function Empreedimento () {
        const {empreendimentoNome} = useParams();
        const myDataPage = DataJSON.find( myDataPage => myDataPage.idNomeUrl === empreendimentoNome)
        return (

            <>
            <Helmet>
              <title>Apartamento em {myDataPage.seoName} - Grupo Gênesis - Incorporadora e Construtora.</title>
              <meta content="Guilherme Luziac, Marcus Vinicius Baldoo, Victor Henrique Basso, Arqué Lab, Ousía Arqué, Arque Bricks, Grupo Gênesis Construtora e Incorporadora, amply" name="author"/>
              <meta name="description" content={myDataPage.seoDescription}/>
              <link rel="canonical" href={"https://grupogenesis.com.br/Empreendimento/"+myDataPage.idNomeUrl+"/"} />
              <meta name="keywords" content={myDataPage.keywords}/>
              <meta content="index, follow" name="robots"/>
              <meta content="Portuguese" name="language"/>
              <meta content="1 days" name="revisit-after"/>
            </Helmet>
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