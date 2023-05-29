import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../modules/Navbar'
import Footer from '../../modules/Footer'
import Contact from '../../modules/Contact'
import './index.css'

import mainLogo from '../../assets/logos/mainLogo.png'

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
        const { empreendimentoNome } = useParams();
        const [data, setData] = useState(null)
        const [dataPlanta, setDataPlanta] = useState(null)
        useEffect(() => {
          axios
            .get(
              'https://api.grupogenesis.com.br/api/emps/' +
                empreendimentoNome +
                '?populate[Icones][populate]=*&populate[ImagemPrincipal][populate]=*&populate[CarrouselUm][populate]=*&populate[Planta][populate][Icones][populate]=*&populate[Localizacao][populate]=*&populate[StatusObra][populate]=*&populate[Beneficios][populate]=*&populate[Lazer][populate][Imagens][populate]=*&populate[TopicosLazer][populate]=*&populate[PlantasExists][populate]=*&populate[AreaDeLazer][populate]=*&populate[LocalExits][populate]=*&populate[StatusObraExists][populate]=*&populate[AreaDeLazer][populate]=*&populate[TagFacebookID][populate]=*&populate[ContentFacebookDomain][populate]=*&populate[WhatsAppLink][populate]=*'
            )
            .then((response) => {
              setData(response.data.data);
       // Acesso direto à propriedade `data` da resposta
            })
            .catch((error) => {
              console.log(error);
            });
        }, [empreendimentoNome]);
          useEffect(() => {
            axios
            .get(
              'https://api.grupogenesis.com.br/api/emps/' +
                empreendimentoNome +
                '?populate[Planta][populate]=*'
            )      
            .then((response) => {
              setDataPlanta(response.data.data);
               // Acesso direto à propriedade `data` da resposta
            })
            .catch((error) => {
              console.log(error);
            });
        }, [empreendimentoNome]);
        console.log(data)
   
        return (

            <>

            {data && data.attributes && dataPlanta && dataPlanta.attributes  ? (
              <>            
                <Helmet>
                  <title>Apartamento em {data.attributes.Titulo} - Grupo Gênesis - Incorporadora e Construtora.</title>
                  <meta content="Guilherme Luziac, Marcus Vinicius Baldoo, Basso_Dev, Victor Basso, Arqué Lab, Ousía Arqué, Arque Bricks, Grupo Gênesis Construtora e Incorporadora, amply" name="author"/>
                  <meta name="description" content={data.attributes.DescricaoCompleta}/>
                  <link rel="canonical" href={"https://grupogenesis.com.br/Empreendimento/"} />
                  <meta name="keywords" content={data.attributes.keywordsSEO}/>
                  <meta content="index, follow" name="robots"/>
                  <meta content="Portuguese" name="language"/>
                  <meta content="1 days" name="revisit-after"/> 
                  {/* pixels personalizados google e fb */}

                  {/* Código do Facebook Pixel */}
                  <script async>{`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${data.attributes.TagFacebookID}');
                    fbq('track', 'PageView');
                  `}</script>
               
                  {/* Meta do Facebook Domain Verification */}
                  <meta name="facebook-domain-verification" content={data.attributes.ContentFacebookDomain.ContentVerifyFacebook} />
     
                </Helmet>
                <ScrollToTop/>
                <Navbar />
                <BarScrollTop dataemps={data}/>
                <MainBanner dataemps={data}  />
                {
                  data.attributes.PlantasExists.PlantasExists &&
                  <SwiperPlantas dataemps={data} dataPlanta={dataPlanta}/>
                }
                {
                  data.attributes.AreaDeLazer.AreaDeLazer &&
                  <Lazer dataemps={data}/>
                }
                {
                  data.attributes.LocalExits.LocalExists &&
                  <Localizacao dataemps={data}/>
                }
                {
                  data.attributes.StatusObraExists.StatusObraExists &&
                  <BuildStatusMolude dataemps={data}/>
                }

                
                <Contact/>
               <Footer/>
              </>
              
            ) : (
              <div className='loadingmain'>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <img src={mainLogo} alt="" />
              </div>
            )}
           </>
        )
      }
      
export default Empreedimento