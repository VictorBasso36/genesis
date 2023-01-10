import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './BarScroll.css'




let scrollStylesMargin
function BarScroll () {
    const [showMenu, setMargin] = useState(true);

      
      // create an event listener
   
        window.addEventListener('load', function(){
            if(window.scrollY >= 15){
            
                setMargin(true)
            } else{
                setMargin(false)
            }
            
        })

        window.addEventListener('scroll', function(){


        if(window.scrollY >= 15){
            
            setMargin(true)
        } else{
            setMargin(false)
        }
        })

        if(showMenu){
            scrollStylesMargin = "0"
        }else{
            if (window.innerWidth < 550) {
                scrollStylesMargin = "180"
            }else{
                scrollStylesMargin = "280"
            }
        }

        return (
            <>
                <div className='topScrollBar' style={{marginTop: scrollStylesMargin + "px",}} >
                    <a href="#" title="Projeto genesis incorporadora">Projeto</a>
                    <a href="#Plantas" title="Plantas genesis incorporadora">Plantas</a>
                    <a href="#idhere" title="Lazer genesis incorporadora">Lazer</a>
                    <a href="#Localizacao" title="Localização genesis incorporadora">Localização</a>
                    <a href="#ObraScroll" title="Obra genesis incorporadora">Obra</a>
                </div>
           </>
        )
      }
      
export default BarScroll