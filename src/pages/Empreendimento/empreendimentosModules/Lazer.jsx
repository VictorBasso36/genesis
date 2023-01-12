import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Lazer.css'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import 'swiper/css';


//imgs
import FullscreenIcon from '../../../assets/logos/fullscreenIcon.png'


//data
import DataJSON from '../../../../public/empreendimentos.json'

import arrow from '../../../assets/logos/arrow.png'

function Lazer () {
        const [showLazerSlide, setshowLazerSlide] = useState(false);    
        let displaySwiperLazerFullscreen
        if(showLazerSlide){

            displaySwiperLazerFullscreen="flex"
   
        }else {

            displaySwiperLazerFullscreen="none"

        }
        const { empreendimentoNome } = useParams();
        const myDataPage = DataJSON.find( myDataPage => myDataPage.idNomeUrl === empreendimentoNome)
        const urllazer = myDataPage.photoslazer
        const urllazerLegenda =  myDataPage.legendaslazer
        const mainitenscar = myDataPage.lazerMainItems
        return (
            <>
                {/* modal */}
                <a href="" className="linkcta" target="_blank" title="Se busca ajuda da Genesis empreendimentos clique aqui !">
                    <div className="ctalazer"><h1>Ficou alguma dúvida? <span>Clique aqui.</span></h1>
                    </div>
                </a>
                <div style={{display: displaySwiperLazerFullscreen}} className='modalSwiperPhotos'>
     
                    <div className='menuClose' onClick={() => setshowLazerSlide(!showLazerSlide)}>
                        <div className='meuCloseItem'>

                        </div>
                        <div className='meuCloseItem'>
                            
                        </div>

                    </div>

                    <div className='swiperModalHere'>
                        <div className='ModalnextMain'>
                            <img src={arrow} alt="proxima foto" />
                        </div>
                        <div className='ModalprevMain'>
                            <img src={arrow} alt="foto anterior" />
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
                            { myDataPage.photoslazer && myDataPage.photoslazer.map( (url, index) => {
                                return(
                                <SwiperSlide className='testethis' key={index}>
                                    <div className='slideMainFull'>
                                        <img src={url} alt={'Apartamento em '+myDataPage.seoName} />
                                    </div>
                                </SwiperSlide>)
                            })}
                                
                            
                        </Swiper>
                    </div>
                    
                    
                </div> 
              

                <div className='contentLazer' id='idhere'>
                    <h1 className='lazerTitle'>Lazer para <span>sua família.</span> </h1>
                    <div className='ContentTopicscontainer'>  
                        <div className='gridSwiper' >
                        <img className='fullscreenIcon' onClick={() => setshowLazerSlide(!showLazerSlide)} src={FullscreenIcon} alt="fullscreen area de lazer genesis" />
                        <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        onSlideChange={(swiper) => document.querySelector(".hereHTML").innerHTML=urllazerLegenda[(swiper.realIndex)]}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Pagination, Navigation]}
                        >
                            { myDataPage.photoslazer && myDataPage.photoslazer.map( (url, index) => {
                                console.log(url)
                                return(
                                    <SwiperSlide className='mainslide' role="img" aria-label={'Apartamento em '+myDataPage.seoName} style={{backgroundImage: `url('${(url)}')`}}  key={index}></SwiperSlide>
                                    )
                            })}
                            
                        </Swiper>
                        <div className='legendLazerCarrousel'><h1 className='hereHTML'>Aréa de Lazer</h1></div>
                        </div>
                        <div className='aboutLazer'>
                            { myDataPage.lazerMainItems && myDataPage.lazerMainItems.map( (url, index) => {
                                console.log(url)
                                return(
                                    <div  key={index}><h1>-</h1><p>{url}</p></div>
                                    )
                            })}
                          
                        </div>   
                    </div>

                  
                </div>
            </>
        )
      }
      
export default Lazer