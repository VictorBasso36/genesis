import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import './VideoAndIcons.css'

//imgs
import IconHouse from  '../assets/logos/iconHouse.png'
import IconChecked from  '../assets/logos/iconChecked.png'
import IconTimer from  '../assets/logos/iconTimer.png'
import PlayerVideo from  '../assets/logos/playerVideo.png'
import VideoClient from  '../assets/videos/VideoClient.mp4'

//imgs//
const myLinkWhatsApp = ["https://api.whatsapp.com/send?phone=5511979525548&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho.", "https://api.whatsapp.com/send?phone=5511976105023&text=Ol%C3%A1%2C%20quero%20ser%20uma%20das%20primeiras%20pessoas%20a%20saber%20sobre%20o%20projeto%20Altos%20do%20Pinheirinho."];
const myLinkWhatsAppRandom = Math.floor(Math.random() * myLinkWhatsApp.length);

var displayVideo

function VideoAndIcons() {
// Get element

const location = useLocation();


useEffect(() => {


}, [location]);

let mybottommargin
let videoHeree
if(location.pathname === "/QuemSomos"){
    mybottommargin = "none"
    console.log("é")
}else{
    mybottommargin = "flex"
}


const [showMenuVideo, setShowMenuVideo] = useState(false);
if(showMenuVideo){
    displayVideo = "flex"
    videoHeree=  <video  className='Iframe' preload="none" controls loop autoPlay type="video/mp4">
    <source src={VideoClient} loop muted autoPlay type="video/mp4"/>
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
            <video className='myVideo'   src={VideoClient} preload="none" loop muted autoPlay type="video/mp4"/>
            <div className='bgOpacity'></div>
            <img src={PlayerVideo} alt="" />
            <p>Somos o futuro</p>
        </div>
        <a href="" title="whatsapp genesis" className='linkfirlyrircs'>
             <div id='Lancamentos' style={{display: mybottommargin }} className='videoLyrics'>
                <h1>Seu futuro lar te espera <span onClick={()=> window.open(myLinkWhatsApp[myLinkWhatsAppRandom], "_blank")}>aqui.</span></h1>
                <p>Conheça os nossos empreendimentos.</p>
            </div>
        </a>
       

    </div>
  )
}

export default VideoAndIcons
