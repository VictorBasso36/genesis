import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './BuildStatus.css'

import DataJSON from '../../../../public/empreendimentos.json'
import ContactLinks from '../../../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element


function BuildStatus (props) {

    
const myStatus = props.dataemps
const [randomWhatsapp, setRandomWhatsapp] = useState(null);
useEffect(() => {
    if (props.dataemps && props.dataemps.attributes && props.dataemps.attributes.WhatsAppLink && props.dataemps.attributes.WhatsAppLink.length > 0) {
      const whatsappLinks = props.dataemps.attributes.WhatsAppLink;
      const randomIndex = Math.floor(Math.random() * whatsappLinks.length);
      const randomLink = whatsappLinks[randomIndex].Link;
      setRandomWhatsapp(randomLink);
    }
  }, [props.dataemps]);
        return (
            <>
            {randomWhatsapp &&
            <a href={randomWhatsapp}  className="linkcta" target="_blank" title="Se busca ajuda da genesis empreemdimentos clique aqui !">
                <div className="ctalazer"><h1>Perfeito né? <span>Clique aqui.</span> para conversar conosco.</h1>
                </div>
            </a>
            }
            <div className='BuildStatus' id="ObraScroll">
                <div className='BuildStatusTitle'>
                    <h1>Acompanhe sua <span>obra.</span></h1>
                </div>
                <div className='statusHere'>
                { myStatus.attributes.StatusObra && myStatus.attributes.StatusObra.map( (dataStatus, index) => {
                return(
                    <div className='StatuParameter' key={index}>
                        <p>{dataStatus.ItemObra}</p>
                        <div className='ParameterBar'>
                            <div className='Progress'></div>
                            <div style={{"width" : dataStatus.Porcentagem + "%"}} className='StatusProgress'><p>{dataStatus.Porcentagem == 0 ?  "" : dataStatus.Porcentagem+"%" }</p></div>
                            {/* <p style={{marginLeft:50 + "%" }} className='Percent'></p> */}
                        </div>
                    </div>

                    )
                    })}

                   
                
                </div>
            </div>
           </>
        )
      }
      
export default BuildStatus