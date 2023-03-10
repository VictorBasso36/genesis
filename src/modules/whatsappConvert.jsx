import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import './whatsappConvert.css'

import ContactLinks from '../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element

function ConvertWhatsapp() {

return (
    <a href={ContactLinks[0].whatsapp[WhatsappRandom]} className="linkconvert" title="duvidas sobre seu apartamento ?" target="_blank">
    <div className="btnConvert"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.05 8.332c-22.945 0-41.62 18.66-41.628 41.602a41.522 41.522 0 005.558 20.8L8.332 91.668l21.805-5.152a41.58 41.58 0 0019.886 5.062h.016c22.938 0 41.606-18.664 41.621-41.601.008-11.122-4.316-21.579-12.176-29.446-7.859-7.863-18.3-12.195-29.433-12.199zm-.01 8.336c8.901.004 17.265 3.473 23.554 9.758 6.285 6.289 9.738 14.648 9.73 23.543-.008 18.347-14.933 33.273-33.293 33.273-5.554-.004-11.054-1.398-15.898-4.043l-2.809-1.531-3.101.734-8.203 1.938 2.003-7.438.903-3.34-1.727-2.992a33.28 33.28 0 01-4.441-16.636c.008-18.34 14.937-33.266 33.281-33.266zM35.32 30.73c-.695 0-1.82.258-2.777 1.301-.953 1.04-3.645 3.551-3.645 8.668 0 5.117 3.727 10.063 4.247 10.758.52.691 7.195 11.523 17.765 15.691 8.785 3.461 10.57 2.778 12.477 2.602 1.91-.168 6.156-2.508 7.023-4.938.867-2.43.867-4.519.61-4.949-.258-.433-.954-.691-1.993-1.21-1.039-.524-6.152-3.032-7.105-3.38-.953-.347-1.652-.52-2.344.52-.691 1.043-2.68 3.379-3.289 4.07-.605.696-1.21.79-2.254.27-1.039-.528-4.39-1.63-8.363-5.168-3.094-2.754-5.18-6.153-5.79-7.195-.6-1.036-.054-1.606.466-2.125.468-.465 1.035-1.215 1.554-1.82.516-.61.696-1.044 1.043-1.735.344-.692.168-1.3-.09-1.824-.257-.52-2.28-5.657-3.207-7.715-.777-1.727-1.601-1.77-2.343-1.797-.606-.027-1.293-.024-1.985-.024zm0 0"></path></svg>
        <div className="mylefticons"><h1>TIRE SUAS DÚVIDAS</h1><p>com um de nossos especialistas.</p></div>
    </div>
    </a>
  )
}

export default ConvertWhatsapp
