import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink  } from 'react-router-hash-link';

import ScrollBarLogo from '../assets/logos/scrollBarGenesis.png'
import './MainScrollFixedBar.css'
//imgs

  // let styleBody
//
let menu
let scrollStylesMargin
let margintoprefine

function mainScrollFixedBar() {


    const [Lancamentos, setLancamentos] = useState(false)
    const observer = new IntersectionObserver (entries => {
    
        Array.from(entries).forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                setLancamentos(true)
            }else{
                setLancamentos(false)
            }
        })
    }, {threshold:[0.5]
    })
    
    Array.from(document.querySelectorAll('.MainItems')).forEach(element => {
        observer.observe(element)
    })


  const location = useLocation();


  useEffect(() => {

  }, [location]);

  const [showMenu, setShowMenu] = useState(false);
  if(showMenu){

    menu=<div onClick={() => setShowMenu(!showMenu)} className='ModalFixed'>
    <Link to="/">{Lancamentos==false ? <p><span>Home</span></p> : <p>Home</p>}</Link>   
    <HashLink to="/#Lancamentos">{Lancamentos==true  ? <p className='linkLaunch'><span>Lançamentos</span></p> : <p className='linkLaunch'>Lançamento</p> }</HashLink>
    {/* <Link to="/Portifolio">{location.pathname === "/Portifolio" ? <p><span>Portifólio</span></p> : <p>Portifólio</p>}</Link> */}
    <Link to="/QuemSomos/">{location.pathname === "/QuemSomos/" ? <p><span>Quem somos</span></p> : <p>Quem somos</p>}</Link>   
    <Link to="/Contato/">{location.pathname === "/Contato/" ? <p className='noMargin'><span>Contato</span></p> : <p className='noMargin'>Contato</p>}</Link>

</div>
} else {  
    menu=null

}

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(
      () =>{
          window.scrollTo(0,0)
      },
      [pathname]
  
    );
    return null;
  
  }


const [NavScroll, setNavScroll] = useState(true);
window.addEventListener('load', function(){
    if(window.scrollY >= 180){
        margintoprefine="0"
    } else{
        margintoprefine="-100"
        setNavScroll(false)
    }
    
})
window.addEventListener('scroll', function(){

    if (window.innerWidth < 550) {
        scrollStylesMargin = 180
       
    }else{
        scrollStylesMargin = 280
       
    }

    if(window.scrollY < scrollStylesMargin){
        
            margintoprefine = "-100"
     
        } else{
            margintoprefine = "0"
        }
    if(window.scrollY > scrollStylesMargin){
        setNavScroll(true)
        margintoprefine = "0"

    } else{
        setNavScroll(false)
        margintoprefine = "-100"
    } 
    
 
})

function scrollTo(){
  window.scrollTo(0, 0);
}
  return (

    <div className='scrollBarMain' style={{marginTop : margintoprefine + 'px'}}>
        {menu}
        <div className='scrollBarMainCotainer'>
            
                <Link to="/"><div onClick={ScrollToTop()} className='myLogoGenesis'>
                    <img src={ScrollBarLogo} alt="Logo simplificada genesis" />            
                </div></Link>
            
            <div className='itemsNavHere'>
                <Link to="/">{Lancamentos==false & location.pathname === "/" ? <p><span>Home</span></p> : <p>Home</p>}</Link>   
                <HashLink to="/#Lancamentos">{Lancamentos==true ? <p className='linkLaunch'><span>Lançamentos</span></p> : <p className='linkLaunch'>Lançamento</p> }</HashLink>
                {/* <Link to="/Portifolio">{location.pathname === "/Portifolio" ? <p><span>Portifólio</span></p> : <p>Portifólio</p>}</Link> */}
                <Link to="/QuemSomos">{location.pathname === "/QuemSomos" ? <p><span>Quem somos</span></p> : <p>Quem somos</p>}</Link>   
                <Link to="/Contato">{location.pathname === "/Contato" ? <p className='noMargin'><span>Contato</span></p> : <p className='noMargin'>Contato</p>}</Link>
            </div>
            <div className='HambScrollBar' onClick={() => setShowMenu(!showMenu)}>
                <div className='HambScrollBarItem'>

                </div>
                <div className='HambScrollBarItem'>

                </div>
                <div className='HambScrollBarItem'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default mainScrollFixedBar
