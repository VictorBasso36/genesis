import { useState } from 'react'
import './Contact.css'

//imgs
import ContactBg from '../assets/bgs/bgContact.webp'
import ContactBg2 from '../assets/bgs/bgContact1024.webp'
import WhatsApp from '../assets/logos/iconWhatsAPPblack.png'

//imgs//


import ContactLinks from '../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].telefones[TelRandom]);//=> a random element

//
function Contact() {
  return (
    <div className='preFooter'>
        <div className="contactWebBanner">
            <div className='opacityBackDiv'></div>
            <img className='contactBg2' src={ContactBg2} alt="Empreendimentos Genesis Incorporadora e Construtora Contato Background" />
            <img className='contactBg' src={ContactBg} alt="Empreendimentos Genesis Incorporadora e Construtora Contato Background" />
            <div className='infoContact'>
            <h1>Fale com um de nossos <span>especialistas.</span></h1>
                    <p>Nossos especialistas estão sempre a disposição para responder todas as suas dúvidas com o máximo de atenção.</p>
                    <a href={ContactLinks[0].whatsapp[WhatsappRandom]} title="empreendimentos genesis whatsapp" target="_blank">
                      <div className='myWhatsApp'>
                        <img src={WhatsApp} alt="Empreendimentos Genesis Incorporadora e Construtora Whatsapp" />

                  
                      </div>
                    </a>
                   
            </div>
       </div>
       <div className='infoContactSmartphone'>
                <h1>Fale com um de nossos <span>especialistas.</span></h1>
                <p>Nossos especialistas estão sempre a disposição para responder todas as suas dúvidas com o máximo de atenção.</p>
                <div className='myWhatsApp'>
                  <a href={ContactLinks[0].whatsapp[WhatsappRandom]} title="empreendimentos genesis whatsapp"  target="_blank">
                    <img src={WhatsApp} alt="Empreendimentos Genesis Whatsapp" />
                  </a>
                </div>
        </div>
    </div>

    
  )
}

export default Contact
