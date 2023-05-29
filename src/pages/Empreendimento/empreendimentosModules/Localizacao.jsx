import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Localizacao.css'


import ContactLinks from '../../../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element


function Localizacao (props) {
    const myDataPage = props.dataemps  

        return (
            <>

                    {/* //aboutlocaltion */}
                    <div className='maindivAboutLocation' >
                        <pre dangerouslySetInnerHTML={{ __html: myDataPage.attributes.HTMLTituloBeneficioLocal }}>
                            
                        </pre>
                        <div className='itenLocationHere'>
                            {myDataPage.attributes.Beneficios && myDataPage.attributes.Beneficios.map((beneficio, index) => (
                                <div className='itenLocationCard' key={index}>
                                    <img src={`https://api.grupogenesis.com.br${beneficio.Icone.data.attributes.url}`} alt="" />
                                    <h1>{beneficio.TitleIconeBeneficio}</h1>
                                    <p>{beneficio.TextBeneficioIcone}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                <div className='titleLocal' id="Localizacao"> 
                    <pre dangerouslySetInnerHTML={{ __html: myDataPage.attributes.Localizacao.HTMLTituloLocal }}>
                    </pre>
                </div>
                <div className='Local'>

                   <div className='localContainer'>
                        <pre dangerouslySetInnerHTML={{ __html: myDataPage.attributes.Localizacao.HTMLDescricaoMaps}}></pre>
                        <div className='mapsContent'>
                            <iframe  async  title={"Localização do apartamento"}  className="mapsiframe" src={myDataPage.attributes.Localizacao.IframeSRC}  style={{border:0}} allowullscreen="false" loading="lazy" ></iframe>
                           
                            <a target="_blank" title="Endereço genesis incorporadora" href={myDataPage.attributes.Localizacao.LinkMaps}>
                                <div className='aboutMap'>
                                    <p>{myDataPage.attributes.Localizacao.EnderecoTexto}</p>
                                    <div className='routeMap'>
                                        <h1>Traçar rota</h1>
                                    </div>
                                </div> 
                            </a>
                           
                        </div>
                        
                   </div>
                </div>
            </>
            
        )
        
      }
      
export default Localizacao