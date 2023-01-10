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
                    <a href="#">Projeto</a>
                    <a href="#Plantas">Plantas</a>
                    <a href="#idhere">Lazer</a>
                    <a href="#Localizacao">Localização</a>
                    <a href="#ObraScroll">Obra</a>
                </div>
           </>
        )
      }
      
export default BarScroll