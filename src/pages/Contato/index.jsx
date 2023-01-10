import { useState } from 'react'


import MainScrollFixedBar from '../../modules/MainScrollFixedBar'
import Navbar from '../../modules/Navbar'
import MainBg from '../../modules/MainBg'
import Contact from '../../modules/Contact'
import Footer from '../../modules/Footer'

import Channels from './ContatoModules/Links'
function Contato() {
      
        return (
            <>
              <Helmet>
                <title>Contato - Grupo Gênesis - Incorporadora e Construtora.</title>
                <meta content="Guilherme Luziac, Marcus Vinicius Baldoo, Victor Henrique Basso, Arqué Lab, Ousía Arqué, Arque Bricks, Grupo Gênesis Construtora e Incorporadora, amply" name="author"/>
                <meta name="description" content="Contato Grupo Genesis incorporadora e construtora, Incorporadora gênesis é uma construtora e incorporadora criada para tornar a vida de seus clientes mais feliz. Seus projetos prezam pelo bem-estar e conforto." />
                <meta name="keywords" content="Contato Grupo Genesis incorporadora e construtora, Apartamento na planta, Empreendimento Imobiliário,Empreendimentos Imobiliários, Incorporadora, Incorporação, Construtora, Construção, Engenharia Civil, Imóveis, Residências, Apartamentos, Empreendimentos imobiliários, Residencial, Residencial Altos da Serra, Venda de imóveis, Construção de imóveis, Administração de imóveis, Grupo Gênesis Construtora, Empreendimentos na Planta, predios na planta" data-react-helmet="true" />
                <meta content="index, follow" name="robots"/>
                <meta content="Portuguese" name="language"/>
                <meta content="1 days" name="revisit-after"/>
              </Helmet>
              <MainScrollFixedBar/>
              <div className="mainBgContainer">
              <Navbar/>
              <MainBg />
              </div>
              <Channels/>
              <Contact/>
              <Footer/> 
           </>
        )
      }
      
export default Contato