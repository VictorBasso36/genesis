import { useState, useEffect } from 'react'
import './SwiperPlantas.css'
import { Link, useParams } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
//image

import roomIcon from '../../../assets/logos/roomIcon.png'
import arrow from '../../../assets/logos/arrow.png'

import DataJSON from '../../../../public/empreendimentos.json'
let myindexSwiepr = 1


import ContactLinks from '../../../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element

function SwiperPlantas (props) {
    const dataPlanta = props.dataPlanta
    const [randomWhatsapp, setRandomWhatsapp] = useState(null);
    useEffect(() => {
        if (props.dataemps && props.dataemps.attributes && props.dataemps.attributes.WhatsAppLink && props.dataemps.attributes.WhatsAppLink.length > 0) {
          const whatsappLinks = props.dataemps.attributes.WhatsAppLink;
          const randomIndex = Math.floor(Math.random() * whatsappLinks.length);
          const randomLink = whatsappLinks[randomIndex].Link;
          setRandomWhatsapp(randomLink);
        }
      }, [props.dataemps]);
    const myDataPage = props.dataemps   
  
        return (
            <>
                <section className='houseplant' id="Plantas">
                    <div className='titlePlantas'>
                        <h1>
                                <span>{myDataPage.attributes.TituloPlanta.split(' ')[0]}</span>
                                {myDataPage.attributes.TituloPlanta.replace(myDataPage.attributes.TituloPlanta.split(' ')[0], '')}
                       </h1>  
                    </div>
                    <div className='SliderHere'>
                        <div className='HeaderSlider'>
                    <h1 className='plantPlaceholder' style={{display: myDataPage.attributes.Planta.length > 1 ? 'flex' : 'none'}}></h1>
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
                            enabled={myDataPage.attributes.Planta.length > 1 ? true : false}
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
                            { myDataPage.attributes.Planta && myDataPage.attributes.Planta.map( (dataPlants, index) => {
   
                                const imagePlanta = dataPlanta.attributes.Planta[index].ImagePlanta.data.attributes.url;
                                console.log(imagePlanta)
                                return(
                                    
                                    <SwiperSlide key={index}>   
                                    <div className='SlideHousePlant'>
                                        <img src={`https://api.grupogenesis.com.br${imagePlanta}`} alt={"Apartamento em "+myDataPage.attributes.Titulo_LP+" na planta - grupo genesis incorporadora e construtora"} />
                                        <div className='HousePlantIconsHere'>
                                            {
                                                dataPlants.Icones && dataPlants.Icones.map((item, index) => {
                                                return (
                                                    <div className='plantIconCard' key={index}>
                                                        <img src={`https://api.grupogenesis.com.br${item.Imagem.data.attributes.url}`} alt={'' + myDataPage.attributes.Titulo_LP + ' grupo genesis incorporadora e construtora'} />
                                                        <p>{item.IconeText}</p>
                                                    </div>
                                                );
                                                })
                                            }
                                        </div>
                                        <div className='HousePlantData'>
                                            <div className='HousePlantasLeft'>
                                                    <div className='valueDiv'>
                                                        <p>{dataPlants.MetragemPlanta}</p>
                                                        <h1><span>{dataPlants.PrecoPlanta}</span></h1>
                                                    </div>

                                                    {randomWhatsapp &&
                                                    <a href={randomWhatsapp} target="_blank" title="Contato do grupo genesis empreendimentos">
                                                    <div className='LinkPlantsHere'>
                                                        <div className='LinkPlantsHereDiv'>
                                                            <p>Adorei! quero este apartamento.</p>
                                                        </div>
                                                       
                                                    </div> 
                                                    </a>}
                                                </div>
                                            <div className='HousePlantasRight'>
                                                <div className='TextAndValues'>
                                                    <div className='textHerePlants'>
                                            
                                                         <p>{dataPlants.descricaoPlanta}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='HousePlantIconsHere twoicons'>
                                                 {/*<div className='plantIconCard '>
                                                    <img src={roomIcon} alt={'Quartos do apartamento '+myPlants.seoName+' grupo genesis incorporadora e construtora' }  />
                                                    <p>{dataPlants.roomPlant} Quartos</p>
                                                </div>
                                                <div className='plantIconCard'>
                                                    <img src={suiteIcon} alt={'Suítes do apartamento '+myPlants.seoName+' grupo genesis incorporadora e construtora' }  />
                                                    <p>{dataPlants.suitesPlants} Suítes</p>
                                                </div> 
                                                <div className='plantIconCard'>
                                                    <img src={carIcon} alt={'Vaga do apartamento '+myPlants.seoName+' grupo genesis incorporadora e construtora' } />
                                                    <p>{dataPlants.carPlants} Vaga</p>
                                                </div>
                                                <div className='plantIconCard'>
                                                    <img src={sizeIcon} alt={'m² do apartamento '+myPlants.seoName+' grupo genesis incorporadora e construtora' } />
                                                    <p>{dataPlants.sizePlants} m²</p>
                                                </div>*/}
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