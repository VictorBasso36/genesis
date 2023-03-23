import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

import MainBgimgContato from  '../assets/bgs/bgContatoMain.jpg'
import './MainBg.css';
import 'animate.css';


let myCopytag
let mybgpath
function MainBg() {

  const location = useLocation();


  useEffect(() => {

    // console.log(location)
  }, [location]);


if(location.pathname ==="/Contato/"){
  mybgpath=MainBgimgContato

  myCopytag=<h1 className='animate__animated animate__slideInRight'>Seu futuro lar <br className='responsivebrock' />
  te espera <span>aqui.</span></h1>
}
if(location.pathname ==="/"){
  mybgpath="https://arque.art.br/ousiaarque/genesisemp/allphotos/bgMain.webp"

  myCopytag=<h1 className='animate__animated animate__slideInRight'>Carinho e respeito  <br className='responsivebrock' />
  pelo seu <span>sonho.</span></h1>
}


    return (
      <div className="bgMain">
        <div></div>
        
        {myCopytag}
        <img className='animate__animated animate__fadeIn' src={mybgpath} alt="Familia feliz por comprar os empreendimentos e apartamento do grupo genesis" />
      </div>
    )
  }
  
  export default MainBg

