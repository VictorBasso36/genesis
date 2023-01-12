import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './BuildStatus.css'

import DataJSON from '../../../../public/empreendimentos.json'
import ContactLinks from '../../../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element


function BuildStatus () {
    const { empreendimentoNome } = useParams();
    const myStatus = DataJSON.find( myDataPage =>
                    myDataPage.idNomeUrl === empreendimentoNome)
        return (
            <>
            <a href={ContactLinks[0].whatsapp[WhatsappRandom]}  className="linkcta" target="_blank" title="Se busca ajuda da genesis empreemdimentos clique aqui !">
                <div className="ctalazer"><h1>Perfeito né? <span>Clique aqui.</span> para conversar conosco.</h1>
                </div>
            </a>
            <div className='BuildStatus' id="ObraScroll">
                <div className='BuildStatusTitle'>
                    <h1>Acompanhe sua <span>obra.</span></h1>
                </div>
                <div className='statusHere'>
                { myStatus.projectProgress && myStatus.projectProgress.map( (dataStatus, index) => {
                return(
                    <div className='StatuParameter' key={index}>
                        <p>{dataStatus.NameProgress}</p>
                        <div className='ParameterBar'>
                            <div className='Progress'></div>
                            <div style={{"width" : dataStatus.status + "%"}} className='StatusProgress'><p>{dataStatus.status == 0 ?  "" : dataStatus.status+"%" }</p></div>
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