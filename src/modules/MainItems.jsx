import { useState, useEffect } from 'react'
import './MainItems.css'
import 'animate.css';
import {Link} from 'react-router-dom'

import arrow from '../assets/logos/arrow.png'

import axios from 'axios'



import ContactLinks from '../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);


function MainItems() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [randomWhatsapp, setRandomWhatsapp] = useState(null)
    useEffect(() => {
      axios
        .get('https://api.grupogenesis.com.br/api/emps?populate[Icones][populate]=*&populate[ImagemPrincipal][populate]=*')
        .then((response) => {
          setData(response.data.data);
          setIsLoading(false);

        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, []);
  
    if (isLoading) {
      return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    }

    return (
        <>
            
                {data.map((item) => (
                    
                    
                    <div className="MainItems" key={item.id}>
                            <div className='leftItem animate__animated animate__fadeInLeft'>
                                <div className='imgHere'>
                                    <Link to={`/Empreendimento/${item.id}`} title="Apartamento em"> 
                                        <div className='imgherebg' title="Apartamento em " style={{ 
                                            backgroundImage: `url("https://api.grupogenesis.com.br${item.attributes.ImagemPrincipal.data.attributes.formats.large.url}")` }}>
                                        </div>
                                    </Link>
                                </div>
                                <div className='textHere'>
                                    <div className='textPrice'>
                                        <p>Unidades a partir de</p>
                                        <h1>{item.attributes.Preco_Destaque}</h1>
                                    </div>
                                    <div className='textLink'>
                                        <Link to={`/Empreendimento/${item.id}`} title="Apartamento em "> 
                                        <div className='yellowBg'>
                                            <p><span className='spanBold'>Clique aqui</span> e Saiba Mais.</p>
                                        </div>
                                        </Link>
                                        <div>
                                            <img src={arrow} alt={"Comprar apartamento em "} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rightItem animate__animated animate__fadeInLeft'>
                                <h1>
                                
                                    <span>{item.attributes.Titulo.split(' ')[0]}</span>
                                    {item.attributes.Titulo.replace(item.attributes.Titulo.split(' ')[0], '')}
                                    
                                </h1>

                                <p>{item.attributes.DescricaoCard}</p>

                                <div className='itensInfoCard'>
                                    {item.attributes.Icones.map((icone, index) => (
                                    
                                            <div className='cardItens'  key={index}>
                                                <img src={'https://api.grupogenesis.com.br' + icone.Image.data.attributes.url} alt={"Icone Apartamento"} />
                                                <p>{icone.TextIcon}</p>
                                            </div>
                                    
                                    ))}
                                
                                </div>
                            </div>
                    </div>
                    
                ))}
            
      </>)
  }
  
  export default MainItems