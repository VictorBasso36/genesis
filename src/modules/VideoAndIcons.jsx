import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import './VideoAndIcons.css'

//imgs
import IconHouse from  '../assets/logos/iconHouse.png'
import IconChecked from  '../assets/logos/iconChecked.png'
import IconTimer from  '../assets/logos/iconTimer.png'
import PlayerVideo from  '../assets/logos/playerVideo.png'

import VideoBg from "reactjs-videobg";

let url = "https://www.arque.art.br/genesisemp/video/VideoClient.mp4"
//imgs//

import ContactLinks from '../../public/contatonumber.json'
const WhatsappRandom = Math.floor(Math.random() * (ContactLinks[0].whatsapp).length);
// console.log(ContactLinks[0].whatsapp[WhatsappRandom]);//=> a random element

var displayVideo

function VideoAndIcons() {
// Get element

const location = useLocation();


useEffect(() => {


}, [location]);

let mybottommargin
let videoHeree
if(location.pathname === "/QuemSomos/"){
    mybottommargin = "none"

    
    // console.log("é")
}else{
    mybottommargin = "flex"
}


const [showMenuVideo, setShowMenuVideo] = useState(false);
if(showMenuVideo){
    displayVideo = "flex"
    videoHeree=  <video src="https://www.arque.art.br/genesisemp/video/VideoClient.mp4" poster="https://www.arque.art.br/ousiaarque/genesisemp/allphotos/EXTRENO_2%20P-%20Foto.jpg"  className='Iframe' preload="none" controls  loop autoPlay type="video/mp4">
 
</video>

}else{
    displayVideo = "none"
    videoHeree=null;
}



return (
    <div className="videoAndIcons">
        <div className='videoModalHere' onClick={() => setShowMenuVideo(!showMenuVideo)} style={{display:displayVideo}}>
            <div className='modalHeaderVideo' >
                    <div className='modalCloseVideoModal'>
                        <div className='CloseVideoModalItem'>

                        </div>
                        <div className='CloseVideoModalItem'>

                        </div>
                    </div>
            </div>
          {videoHeree}
      
            {/* <iframe style={{display:displayVideo}} src="https://youtu.be/XcweXIX2gco?&playversion=3&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; loop;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
        <div className='videoHere' onClick={() => setShowMenuVideo(!showMenuVideo)}>
            <video className='myVideo' poster="https://www.arque.art.br/ousiaarque/genesisemp/allphotos/EXTRENO_2%20P-%20Foto.jpg" preload="metadata" loop autoPlay muted type="video/mp4">
                <source src="https://www.arque.art.br/genesisemp/video/VideoClient.mp4" type="video/mp4"/> 
            </video>
            {/* <VideoBg className='myVideo' poster={PlayerVideo}>
                <VideoBg.Source src={url} type="video/mp4" />
            </VideoBg> */}
            <div className='bgOpacity'></div>
            <img src={PlayerVideo} alt="Video Genesis" />
            <p>Somos o futuro</p>
        </div>
        <a href={ContactLinks[0].whatsapp[WhatsappRandom]} title="whatsapp genesis" target="_blank" className='linkfirlyrircs'>
             <div id='Lancamentos' style={{display: mybottommargin }} className='videoLyrics'>
                <h1>Seu futuro lar te espera <span onClick={()=> window.open(ContactLinks[0].whatsapp[WhatsappRandom], "_blank")}>aqui.</span></h1>
                <p>Conheça os nossos empreendimentos.</p>
            </div>
        </a>
       

    </div>
  )
}

export default VideoAndIcons
