import { useState } from 'react'



import MainScrollFixedBar from '../../modules/MainScrollFixedBar'
import Navbar from '../../modules/Navbar'
import MainBg from '../../modules/MainBg'
import Contact from '../../modules/Contact'
import Footer from '../../modules/Footer'


import React from "react";
import {Helmet} from "react-helmet";

import WhatsAppIcon from '../../assets/logos/iconWhatsAPPblack.png'
// import iconFacebookBlack from '../../assets/logos/iconFacebookBlack.png'
import IconInstagramblack from '../../assets/logos/iconInstagramblack.png'
import IconTelBlack from '../../assets/logos/iconTel.png'

import './linkscontatos.css'

import ContactLinks from '../../../public/contatonumber.json'

const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element


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
                <link rel="canonical" href="https://grupogenesis.com.br/Contato/" />
                <meta content="1 days" name="revisit-after"/>
              </Helmet>
              <MainScrollFixedBar/>
              <div className="mainBgContainer">
              <Navbar/>
              <MainBg />
              </div>
              <div className='LinksHere'>
                    <div className='MainSocialMedia'>
                        <div className='socialmediaHere'>
                            <div className='cardSocialMedia'>
                                <a href="https://www.instagram.com/grupogenesisconstrutora/" target="_blank">
                                    <img src={IconInstagramblack} alt="" />
                                </a>
                            </div>
                            <div className='cardSocialMedia'>
                                <a href={ContactLinks[0].whatsapp[WhatsappRandom]} target="_blank">
                                    <img src={WhatsAppIcon} alt="" />
                                </a>
                            </div>
                            {/* <div className='cardSocialMedia'>
                                <a href="">
                                    <img src={iconFacebookBlack} alt="" />
                                </a>
                            </div> */}
                            <div className='cardSocialMedia'>
                                <a href={"tel:+55 "+ ContactLinks[0].telefones[WhatsappRandom]}>
                                    <img src={IconTelBlack} alt="Telefone do grupo genesis incorporadora e construtora" />
                                </a>
                            </div> 

                        </div>
                        <div className='mainTitleContato'>
                            <p>Nossos canais de</p>
                            <h1>Contato</h1>
                        </div>
                    </div>
                    <div className='MainChanells'>
                       
                           <div className='MyChannelCall'>
                                <h1>VENDAS</h1> 
                                <a target="_blank" title="genesis empreendimentos email de contato" href="mailto:contato@grupogenesis.com.br">
                                    <p>contato@grupogenesis.com.br</p>
                                </a>
                                <a href={"tel:+55 11985253250"} title="genesis empreendimentos telefone de contato">
                                    <p>(11) 98525-3250</p>
                                </a>
                               
                            </div>  
                            <div className='MyChannelCall'>
                                <h1>ENDEREÇO</h1>
                                <a target="_blank" href="https://www.google.com.br/maps/place/Grupo+G%C3%AAnesis+Construtora/@-23.6754464,-46.5370614,17z/data=!4m13!1m7!3m6!1s0x94ce4267e2b8c017:0x86a15b533a9209f1!2sR.+Maca%C3%BAba,+304+-+Para%C3%ADso,+Santo+Andr%C3%A9+-+SP,+09190-650!3b1!8m2!3d-23.6754464!4d-46.5348727!3m4!1s0x94ce4335a49e5135:0xa16e3a4ea706967d!8m2!3d-23.6754464!4d-46.5348727" title="Endereço Construtora e Incorporadora Genesis">
                                    <p>Rua Macaúba, 304 - Santo André - SP.</p>
                                </a>
                            </div>    
                      
                       
                    </div>
                </div>
              <Contact/>
              <Footer/> 
           </>
        )
      }
      
export default Contato