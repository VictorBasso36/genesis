import { useState } from 'react'
import './VideoAndIcons.css'

//imgs
import IconHouse from  '../assets/logos/iconHouse.png'
import IconChecked from  '../assets/logos/iconChecked.png'
import IconTimer from  '../assets/logos/iconTimer.png'


//imgs//



function iconsHome() {
// Get element


return (
        <div className='iconHere'>
            <div className='iconsCard'>
                <img src={IconChecked} alt="" />
                <p className='iconsCardTitle'>CONFIANÇA</p>
                <p className='textIcon'>Transparência e ética são a base de sustentação das nossas obras.</p>
            </div>
            <div className='iconsCard'>
                <img src={IconTimer} alt="" />
                <p className='iconsCardTitle'>EFICIÊNCIA</p>
                <p className='textIcon'>Garantia da entrega de projetos dentro do prazo.</p>
            </div>
            <div className='iconsCard'>
                <img src={IconHouse} alt="" />
                <p className='iconsCardTitle'>+ 300 lares</p>
                <p className='textIcon'>Centenas de lares criados com excelência e qualidade.</p>
            </div>          
        </div>


  )
}

export default iconsHome
