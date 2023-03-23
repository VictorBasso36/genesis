import { useState } from 'react'
import './MainBanner.css'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';


//image
import IconWhatsApp from '../../../assets/logos/iconWhatsAPPblack.png'
import carIcon from '../../../assets/logos/carIcon.png'
import sizeIcon from '../../../assets/logos/sizeIcon.png'
import suiteIcon from '../../../assets/logos/suiteIcon.png'
import roomIcon from '../../../assets/logos/roomIcon.png'
import FullscreenIcon from '../../../assets/logos/fullscreenIcon.png'
import arrow from '../../../assets/logos/arrow.png'
//dataTemporary

import DataJSON from '../../../../public/empreendimentos.json'
const myLinkWhatsApp = ["https://api.whatsapp.com/send?phone=5511979525548&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho.", "https://api.whatsapp.com/send?phone=5511976105023&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho."];

import ContactLinks from '../../../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element


function MainBanner () {
        const [showMenuSlider, setShowMenuSlider] = useState(false);
        const { empreendimentoNome } = useParams();
        let displaySwiperFullscreen
        if(showMenuSlider){

            displaySwiperFullscreen="flex"
   
        }else {

            displaySwiperFullscreen="none"

        }
        const myDataPage = DataJSON.find( myDataPage => myDataPage.idNomeUrl === empreendimentoNome)
        return (
            <>       
                <div className='cta'>
                    <div className='ctaContainer'>
                        <h1>Apartamento em 
                            <br />
                            <span>{ myDataPage.seoName }</span>
                        </h1>  
                    </div>
                    
                </div>
                <div style={{display: displaySwiperFullscreen}} className='modalSwiperPhotos'>
     
                    <div className='menuClose' onClick={() => setShowMenuSlider(!showMenuSlider)}>
                        <div className='meuCloseItem'>

                        </div>
                        <div className='meuCloseItem'>
                            
                        </div>

                    </div>

                    <div className='swiperModalHere'>
                        <div className='ModalnextMain'>
                            <img src={arrow} alt="Principais fotos da genesis empreendimentos" />
                        </div>
                        <div className='ModalprevMain'>
                            <img src={arrow} alt="Principais fotos da genesis empreendimentos" />
                        </div>
                    <Swiper 
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: true,
                              }}
                            navigation={{
                                nextEl: '.ModalnextMain',
                                prevEl: '.ModalprevMain'
                            }}
                            scrollbar={{ draggable: true }}
                            modules={[Autoplay, Pagination, Navigation]}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            >
                            { myDataPage.photos && myDataPage.photos.map( (url, index) => {
                                return(
                                <SwiperSlide className='testethis' key={index}>
                                    <div className='slideMainFull'>
                                        <img src={url} alt={'fotos do Apartamento em '+myDataPage.seoName} />
                                    </div>
                                </SwiperSlide>)
                            })}
                                
                             
                        </Swiper>
                    </div>
                    
                    
                </div>    
                <div className='BannerMain' id='Projeto'>
                    <div className='titleResponsive'>
                        <h1>Gênesis<span> { myDataPage.title } </span></h1>
                    </div>
                    <div className='leftPicturesAndPrices'>
                        <img className='fullscreenIcon' onClick={() => setShowMenuSlider(!showMenuSlider)} src={FullscreenIcon} alt={'Foto em tela cheia do apartamento em'+ myDataPage.seoName} />
                        <div className="swiperHere">
                        
                        <Swiper 
                        
                            spaceBetween={0}
                            slidesPerView={1}
                             loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                              }}
                            navigation={{
                                nextEl: '.nextMain',
                                prevEl: '.prevMain'
                            }}
                            scrollbar={{ draggable: true }}
                            modules={[Autoplay, Pagination, Navigation]}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            >
                            { myDataPage.photos && myDataPage.photos.map( (url, index) => {
                                return(
                                <SwiperSlide key={index}>
                                    <div className='slideMain'>
                                        <img onClick={() => setShowMenuSlider(!showMenuSlider)} src={url} alt={'Foto do Apartamento em ' + myDataPage.seoName + ' - Genesis incorporadora e construtora'} />
                                    </div>
                                </SwiperSlide>)
                            })}
                                
                             
                        </Swiper>
                        
                        </div>
                        <div className='priceAndDetails'>
                                <div onClick={() => setShowMenuSlider(!showMenuSlider)} className='yellowClick'>
                                    <p>Clique aqui e Vejas as fotos.</p>
                                </div>
                            <div className='priceHere'>
                                <p>Unidades a partir de</p>
                                <h1>R$ {myDataPage.price} mil</h1> 
                             
                            </div>
                           
                        </div>
                    </div>
                    <div className='nameAndTexts'>
                        <div className='paddingFornameAndTexts'>
                                <a href={ContactLinks[0].whatsapp[WhatsappRandom]} target="_blank" title="Whatsapp da Grupo genesis incorporadora e construtora ">
                                    <img className='myZAPicon' src={IconWhatsApp} alt="Whatsapp da Grupo genesis incorporadora e construtora" />
                                </a>
                                <h1>Gênesis <span>{myDataPage.title}</span><strong> (2ª fase)</strong></h1>
                                <div className='scrollText'>
                                    <p>{myDataPage.TextoLandingPageMain}</p>
                                </div>
                                 <div className='iconsHereGenesis '>
                                    <div>
                                        <img src={roomIcon} alt={'Grupo genesis incoporadora, Numero de quartos do apartamento em '+ myDataPage.seoName} />
                                        <p>{myDataPage.room} Quartos</p>
                                    </div>
                                    {/* <div>
                                        <img src={suiteIcon} alt={'Grupo genesis incoporadora, Numero de Suíte do apartamento em '+ myDataPage.seoName} />
                                        <p>{myDataPage.suites} Suíte</p>
                                    </div> */}
                                    <div>
                                        <img src={carIcon} alt={'Grupo genesis incoporadora, Numero de Vagas do apartamento em '+ myDataPage.seoName} />
                                        <p>{myDataPage.car} Vagas</p>
                                    </div>
                                    <div>
                                        <img src={sizeIcon} alt={'Grupo genesis incoporadora, Numero de m² do apartamento em '+ myDataPage.seoName} />
                                        <p>{myDataPage.size}m²</p>
                                    </div>
                                </div>
                        </div>               
                    </div>      
                
                </div>  
                {
                    myDataPage.financimanentoCaixa == true ? 
                    <a href={ContactLinks[0].whatsapp[WhatsappRandom]}  title="Whatsapp da Grupo genesis incorporadora e construtora " style={{width:"100%"}} target="_blank">
                        <div className='tagnameCaixa' >
                            <h1>Entrada <span>Facilitada</span> </h1>
                            <div className='caixaImage'>Financiamento pela     
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                            
                                    viewBox="0 0 166 38"
                                    >
                                    <image
                                        width="166"
                                        height="38"
                                        xlinkHref="data:img/png;base64,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"
                                    ></image>
                                    </svg>
                                </div>
                        </div>
                    </a>
                    : ""
                }
                <div>
                  

                </div>
           </>
        )
      }
      
export default MainBanner