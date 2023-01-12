import { useState, useEffect } from 'react'
import './Navbar.css'
import mainLogo from  '../assets/logos/mainLogo.png'
import { useParams, Link, useLocation } from 'react-router-dom'
import { HashLink  } from 'react-router-hash-link';
//imgs

  let menuRight
  let menu 
  let setPosition
  let setMargin
  let IIndex
  let bottuonstate
  // let styleBody
//
import ContactLinks from '../../public/contatonumber.json'
const TelRandom = Math.floor(Math.random() * (ContactLinks[0].telefones).length);
// console.log(ContactLinks[0].telefones[TelRandom]);//=> a random element

function Navbar() {
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

    // console.log(location)
  }, [location]);
  const [showMenu, setShowMenu] = useState(false);


  if(showMenu){
    // styleBody = "overflow:hidden"
    setMargin="30"
    menuRight="0"
    IIndex="999"
    setPosition="fixed"
    bottuonstate="activeNav"
    menu=<div onClick={() => setShowMenu(!showMenu)} className='ModalFixed'>
              <Link to="/">{Lancamentos==false ? <p><span>Home</span></p> : <p>Home</p>}</Link>   
              <HashLink to="/#Lancamentos">{Lancamentos==true ? <p className='linkLaunch'><span>Lançamentos</span></p> : <p className='linkLaunch'>Lançamento</p> }</HashLink>
              {/* <Link to="/Portifolio">{location.pathname === "/Portifolio" ? <p><span>Portifólio</span></p> : <p>Portifólio</p>}</Link> */}
              <Link to="/QuemSomos">{location.pathname === "/QuemSomos" ? <p><span>Quem somos</span></p> : <p>Quem somos</p>}</Link>   
              <Link to="/Contato">{location.pathname === "/Contato" ? <p className='noMargin'><span>Contato</span></p> : <p className='noMargin'>Contato</p>}</Link>

        </div>
  } else {
    // styleBody = "overflow:unset"
    setMargin="30"
    menu=null
    menuRight=null
    IIndex="99"
    setPosition="static"
    bottuonstate=""
  }
  return (

    <nav style={{zIndex:IIndex}} className="navBar">
      {menu}
      <div className="navBarLogo">
        <Link to="/"><img src={mainLogo} alt="Logo e identidade da genesis construtora e incorporadora" /></Link>   
      </div>
      <div className="navBarLinks scrollNavBar">
        <Link to="/">{location.pathname === "/" ? <p><span>Home</span></p> : <p>Home</p>}</Link>   
        <HashLink to="/#Lancamentos">{Lancamentos==true ? <p className='linkLaunch'><span>Lançamentos</span></p> : <p className='linkLaunch'>Lançamento</p> }</HashLink>
        {/* <Link to="/Portifolio">{location.pathname === "/Portifolio" ? <p><span>Portifólio</span></p> : <p>Portifólio</p>}</Link> */}
        <Link to="/QuemSomos">{location.pathname === "/QuemSomos" ? <p><span>Quem somos</span></p> : <p>Quem somos</p>}</Link>   
        <Link to="/Contato">{location.pathname === "/Contato" ? <p className='noMargin'><span>Contato</span></p> : <p className='noMargin'>Contato</p>}</Link>
      </div>
      <div className={bottuonstate + " navBarMenu"} style={{marginRight: setMargin + "px", right: menuRight, position: setPosition}} onClick={() => setShowMenu(!showMenu)}>
        <div className='navBarMenuItem'></div>
        <div className='navBarMenuItem'></div>
        <div className='navBarMenuItem'></div>
      </div>
      <h1 className='number'>
        <a href={"tel:55"+ContactLinks[0].telefones[TelRandom]} title="telefone genesis empreendimentos e incorporação">
        {ContactLinks[0].telefones[TelRandom]}
        </a>
      </h1>
    </nav>
  )
}

export default Navbar
