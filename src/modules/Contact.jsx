import { useState } from 'react'
import './Contact.css'

//imgs
import ContactBg from '../assets/bgs/bgContact.png'
import ContactBg2 from '../assets/bgs/bgContact1024.png'
import WhatsApp from '../assets/logos/iconWhatsAPPblack.png'

//imgs//
const myLinkWhatsApp = ["https://api.whatsapp.com/send?phone=5511979525548&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho.", "https://api.whatsapp.com/send?phone=5511976105023&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho."];
const myLinkWhatsAppRandom = Math.floor(Math.random() * myLinkWhatsApp.length);

//
function Contact() {
  return (
    <div className='preFooter'>
        <div className="contactWebBanner">
            <div className='opacityBackDiv'></div>
            <img className='contactBg2' src={ContactBg2} alt="" />
            <img className='contactBg' src={ContactBg} alt="" />
            <div className='infoContact'>
            <h1>Fale com um de nossos <span>especialistas.</span></h1>
                    <p>Nossos especialistas estão sempre a disposição para responder todas as suas dúvidas com o máximo de atenção.</p>
                    <a href={myLinkWhatsApp[myLinkWhatsAppRandom]} target="_blank">
                      <div className='myWhatsApp'>
                        <img src={WhatsApp} alt="" />
                  
                      </div>
                    </a>
                   
            </div>
       </div>
       <div className='infoContactSmartphone'>
                <h1>Fale com um de nossos <span>especialistas.</span></h1>
                <p>Nossos especialistas estão sempre a disposição para responder todas as suas dúvidas com o máximo de atenção.</p>
                <div className='myWhatsApp'>
                  <a href="https://api.whatsapp.com/send?phone=5511960653131" target="_blank">
                    <img src={WhatsApp} alt="" />
                  </a>
                </div>
        </div>
    </div>

    
  )
}

export default Contact
