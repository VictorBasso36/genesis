import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, Link} from 'react-router-dom'

import MainScrollFixedBar from '../../modules/MainScrollFixedBar'
import Navbar from '../../modules/Navbar'
import MainBg from '../../modules/MainBg'
import VideoAndIcons from '../../modules/VideoAndIcons'
import Footer from '../../modules/Footer'
import Contact from '../../modules/Contact'
import MainItems from '../../modules/MainItems'
import IconsHome from '../../modules/iconsHome'
import React from "react";
import {Helmet} from "react-helmet";

function Home() {
      
        return (
            <> 
                  <Helmet>
                  <meta name="Grupo Gênesis - Construtora e incorporadora para seu empreendimento." content="genesis"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
                  <title>Grupo Gênesis - Construtora e incorporadora para seu empreendimento.</title>
                  <link rel="canonical" href="https://grupogenesis.com.br/" />
                  <meta content="Guilherme Luziac, Marcus Vinicius Baldoo, Victor Henrique Basso, Arqué Lab, Ousía Arqué, Arque Bricks, Grupo Gênesis Construtora e Incorporadora, amply" name="author"/>
                  <meta name="description" content="Gênesis é uma construtora e incorporadora criada para tornar a vida de seus clientes mais feliz. Seus projetos prezam pelo bem-estar e conforto."/>
                  <meta name="keywords" content="Construtora, Apartamento na planta, Empreendimento Imobiliário,Empreendimentos Imobiliários, Incorporadora, Incorporação, Construtora, Construção, Engenharia Civil, Imóveis, Residências, Apartamentos, Empreendimentos imobiliários, Residencial, Residencial Altos da Serra, Venda de imóveis, Construção de imóveis, Administração de imóveis, Grupo Gênesis Construtora, Empreendimentos na Planta, predios na planta"/>
                  <meta content="index, follow" name="robots"/>
                  <meta content="Portuguese" name="language"/>
                  <meta content="1 days" name="revisit-after"/>
                  
                  </Helmet>
              <div className="mainBgContainer">
                <MainScrollFixedBar/>
                <Navbar />
                <MainBg />
              </div>
              <IconsHome/>
              <VideoAndIcons/>
              <MainItems/>
              <Contact/>
              <Footer/> 
           </>
        )
      }
      
export default Home