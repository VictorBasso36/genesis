import { useState } from 'react'
import './MainItems.css'
import 'animate.css';
import {useParams, Link, Navigate} from 'react-router-dom'
// img

//icons

import RoomIcon from  '../assets/logos/roomIcon.png'
import SuiteIcon from  '../assets/logos/suiteIcon.png'
import IconCar from  '../assets/logos/carIcon.png'
import SizeIcon from  '../assets/logos/sizeIcon.png'
import arrow from '../assets/logos/arrow.png'






import ContactLinks from '../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element


//dataTemporary
import DataJSON from '../../public/empreendimentos.json'

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
// 
// console.log(imagesMainPhoto)



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
                            <Link to={`/Empreendimento/${empreedimentoData.idNomeUrl}/`} title={"Apartamento em "+ empreedimentoData.seoName}> 
                                <div className='imgherebg' title={"Apartamento em "+ empreedimentoData.seoName} style={{ 
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
                                <Link to={`/Empreendimento/${empreedimentoData.idNomeUrl}/`} title={"Apartamento em "+ empreedimentoData.seoName}> 
                                <div className='yellowBg'>
                                    <p><span className='spanBold'>Clique aqui</span> e Saiba Mais.</p>
                                </div>
                                </Link>
                                <div>
                                    <img src={arrow} alt={"Comprar apartamento em "+ empreedimentoData.seoName} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rightItem animate__animated animate__fadeInLeft'>
                        <h1>Gênesis <span>{empreedimentoData.title}</span><strong className='strongtitle'> (2ª fase)</strong></h1>
        
                        <p>{empreedimentoData.LittleText}</p>
        
                        <div className='itensInfoCard'>
                            <div className='cardItens'>
                                <img src={RoomIcon} alt={"Quantidade de Quartos do apartamento em " + empreedimentoData.seoName} />
                                <p>{empreedimentoData.room} Quartos</p>
                            </div>
                            <div className='cardItens'>
                                <img src={SuiteIcon} alt={"Quantidade de Suites do apartamento em " + empreedimentoData.seoName}  />
                                <p>{empreedimentoData.suites} Suíte</p>
                            </div>
                            <div  className='cardItens'>
                                <img src={IconCar} alt={"Quantidade de Vagas do apartamento em " + empreedimentoData.seoName}  />
                                <p>{empreedimentoData.car} Vagas</p>
                            </div>
                            <div  className='cardItens'>
                                <img src={SizeIcon} alt={"Quantidade de M² do apartamento em " + empreedimentoData.seoName}  />
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