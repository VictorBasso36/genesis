import { useState } from 'react'
import './MainItems.css'
import 'animate.css';
import {useParams, Link} from 'react-router-dom'
// img

//icons

import RoomIcon from  '../assets/logos/roomIcon.png'
import SuiteIcon from  '../assets/logos/suiteIcon.png'
import IconCar from  '../assets/logos/carIcon.png'
import SizeIcon from  '../assets/logos/sizeIcon.png'
import arrow from '../assets/logos/arrow.png'





const myLinkWhatsApp = ["https://api.whatsapp.com/send?phone=5511979525548&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho.", "https://api.whatsapp.com/send?phone=5511976105023&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho."];
const myLinkWhatsAppRandom = Math.floor(Math.random() * myLinkWhatsApp.length);


//dataTemporary
import DataJSON from './empreendimentos.json'

function ImgSrcMainPhoto(props) {
    return(
        <img src={props.myImgJson}>
        </img>
    )
}


// var arrayimg = [[empreedimentoData.mainPhoto]]
const imagesMainPhoto = DataJSON.map( (dataSrc) => {
    DataJSON.mainPhoto
})

console.log(imagesMainPhoto)



function MainItems() {
    const [accordion, setActiveaccordion] = useState(-1)
    // window.addEventListener("load", function(){
    //     toggleAccordion(0)
    // })
    function toggleAccordion(index){
        if(index===accordion){
            setActiveaccordion(-1)
        }
        setActiveaccordion(index)
    }

    
 
    return (
        // https://api.whatsapp.com/send?phone=5511960653131&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho.
      <div className="MainItems">
            { DataJSON && DataJSON.map( (empreedimentoData, index) => {
            
                return(
                    // onClick={()=> window.open(myLinkWhatsApp[myLinkWhatsAppRandom], "_blank")} 
                    //onClick={() => toggleAccordion(index)}
                    <div key={index}   className='itemEmpreendimento'>
                        {accordion === index ? 
                    
                    <div className='noactivemaindiv'>
                        <div className='noactiveIMGHERE'>
                            <img src={`assets/${empreedimentoData.mainPhoto}`} alt="" />
                        </div>
                        <div className='noactiveTextHere'>
                            <div className='titleNoActiveHere'>
                                <h1>Gênesis <br /><span>{empreedimentoData.title}</span></h1>
                            </div>
                            <p>&nbsp; &nbsp; &nbsp; {empreedimentoData.LittleText}</p>
        
                        </div>
                    </div> :                          <>
                        
                        <div className='leftItem animate__animated animate__fadeInLeft'>
                        <div className='imgHere'>
                            <Link to={`/Empreendimento/${empreedimentoData.idNomeUrl}`}> 
                                <div className='imgherebg' style={{ 
                                    backgroundImage: `url("${empreedimentoData.photos[1]}")` }}>
                                </div>
                            </Link>
                        </div>
                        <div className='textHere'>
                            <div className='textPrice'>
                                <p>Unidades a partir de</p>
                                <h1>R$ {empreedimentoData.price} mil</h1>
                            </div>
                            <div className='textLink'>
                                <Link to={`/Empreendimento/${empreedimentoData.idNomeUrl}`}> 
                                <div className='yellowBg'>
                                    <p><span className='spanBold'>Clique aqui</span> e Saiba Mais.</p>
                                </div>
                                </Link>
                                <div>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rightItem animate__animated animate__fadeInLeft'>
                        <h1>Gênesis <span>{empreedimentoData.title}</span><strong className='strongtitle'> (2ª fase)</strong></h1>
        
                        <p>{empreedimentoData.LittleText}</p>
        
                        <div className='itensInfoCard'>
                            <div className='cardItens'>
                                <img src={RoomIcon} alt="" />
                                <p>{empreedimentoData.room} Quartos</p>
                            </div>
                            <div className='cardItens'>
                                <img src={SuiteIcon} alt="" />
                                <p>{empreedimentoData.suites} Suíte</p>
                            </div>
                            <div  className='cardItens'>
                                <img src={IconCar} alt="" />
                                <p>{empreedimentoData.car} Vagas</p>
                            </div>
                            <div  className='cardItens'>
                                <img src={SizeIcon} alt="" />
                                <p>{empreedimentoData.size} m²</p>
                            </div>
                        </div>
                    </div> </> }
                      
                    
                    </div>
                )
                
            })
            }
      </div>
    )
  }
  
  export default MainItems