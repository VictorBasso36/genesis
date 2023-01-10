import { useState } from 'react'


import MainScrollFixedBar from '../../modules/MainScrollFixedBar'
import Navbar from '../../modules/Navbar'
import MainBg from '../../modules/MainBg'
import Contact from '../../modules/Contact'
import Footer from '../../modules/Footer'

import Channels from './ContatoModules/Links'
function Contato() {
      
        return (
            <>
              <MainScrollFixedBar/>
              <div className="mainBgContainer">
              <Navbar/>
              <MainBg />
              </div>
              <Channels/>
              <Contact/>
              <Footer/> 
           </>
        )
      }
      
export default Contato