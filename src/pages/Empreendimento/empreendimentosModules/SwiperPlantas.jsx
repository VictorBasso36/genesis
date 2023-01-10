import { useState } from 'react'
import './SwiperPlantas.css'
import { Link, useParams } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
//image
import carIcon from '../../../assets/logos/carIcon.png'
import sizeIcon from '../../../assets/logos/sizeIcon.png'
import suiteIcon from '../../../assets/logos/suiteIcon.png'
import roomIcon from '../../../assets/logos/roomIcon.png'
import arrow from '../../../assets/logos/arrow.png'

import DataJSON from '../../../modules/empreendimentos.json'
let myindexSwiepr = 1

function SwiperPlantas () {

  
    const { empreendimentoNome } = useParams();
   
    const myPlants = DataJSON.find( myDataPage =>
                    myDataPage.idNomeUrl === empreendimentoNome)
    
        return (
            <>
                <section className='houseplant' id="Plantas">
                    <div className='titlePlantas'>
                    
                        <h1>Sacada <span>Gourmet</span><br />
                         em todas as unidades.</h1>
                    </div>
                    <div className='SliderHere'>
                        <div className='HeaderSlider'>
                    <h1 className='plantPlaceholder' style={{display: myPlants.plants.length == 1 ? 'none' : 'flex'}}></h1>
                            <div className='ControllerSwiper'>
                                <div className='prev MyButton '>
                                    <img className='SwiperReturn' src={arrow} alt="" />
                                </div>
                                <div className='MyButton next'>
                                    <img className='SwiperNext' src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="SwiperHere">
                        <Swiper
                            spaceBetween={0}
                            enabled={myPlants.plants.length == 1 ? false : true}
                            loop={true}
                            autoplay={{
                                delay: 3200,
                                disableOnInteraction: true,
                              }}
                            navigation={{
                                nextEl: '.next',
                                prevEl: '.prev'
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            onSlideChange={(swiper) => (
                               
                                document.querySelector(".plantPlaceholder").innerHTML='Planta ' +(swiper.realIndex+1 )
                                )}
                                
                                 
                            
                            >
                            { myPlants.plants && myPlants.plants.map( (dataPlants, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                    <div className='SlideHousePlant'>
                                        <img src={dataPlants.plantImg} alt="" />
                                        <div className='HousePlantIconsHere'>
                                            <div className='plantIconCard'>
                                                <img src={roomIcon} alt="" />
                                                <p>{dataPlants.roomPlant} Quartos</p>
                                            </div>
                                            <div className='plantIconCard'>
                                                <img src={suiteIcon} alt="" />
                                                <p>{dataPlants.suitesPlants} Suítes</p>
                                            </div>
                                            <div className='plantIconCard'>
                                                <img src={carIcon} alt="" />
                                                <p>{dataPlants.carPlants} Vaga</p>
                                            </div>
                                            <div className='plantIconCard'>
                                                <img src={sizeIcon} alt="" />
                                                <p>{dataPlants.sizePlants} m²</p>
                                            </div>
                                        </div>
                                        <div className='HousePlantData'>
                                            <div className='HousePlantasLeft'>
                                                    <div className='valueDiv'>
                                                        <p>Apartamentos de {dataPlants.sizePlant}m² por</p>
                                                        <h1><span>R$ {dataPlants.pricePlant} mil</span></h1>
                                                    </div>
                                                    <a href="">
                                                    <div className='LinkPlantsHere'>
                                                        <div className='LinkPlantsHereDiv'>
                                                            <p>Adorei! quero este apartamento.</p>
                                                        </div>
                                                       
                                                    </div> 
                                                    </a>
                                                </div>
                                            <div className='HousePlantasRight'>
                                                <div className='TextAndValues'>
                                                    <div className='textHerePlants'>
                                            
                                                         <p>{dataPlants.textPlant}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='HousePlantIconsHere twoicons'>
                                            <div className='plantIconCard '>
                                                <img src={roomIcon} alt="" />
                                                <p>{dataPlants.roomPlant} Quartos</p>
                                            </div>
                                            <div className='plantIconCard'>
                                                <img src={suiteIcon} alt="" />
                                                <p>{dataPlants.suitesPlants} Suítes</p>
                                            </div>
                                            <div className='plantIconCard'>
                                                <img src={carIcon} alt="" />
                                                <p>{dataPlants.carPlants} Vaga</p>
                                            </div>
                                            <div className='plantIconCard'>
                                                <img src={sizeIcon} alt="" />
                                                <p>{dataPlants.sizePlants} m²</p>
                                            </div>
                                        </div>
                                        </div>
                                   
                                    </div>
                                </SwiperSlide>
                                )
                            })}
                       
                 
                        
                        </Swiper>
                        </div>
                    </div>  
                </section>
           </>
        )
      }
    
export default SwiperPlantas