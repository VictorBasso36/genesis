import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, Link} from 'react-router-dom'

import MainScrollFixedBar from '../../modules/MainScrollFixedBar'
import Navbar from '../../modules/Navbar'
import MainBg from '../../modules/MainBg'
import VideoAndIcons from '../../modules/VideoAndIcons'
import Footer from '../../modules/Footer'
import Contact from '../../modules/Contact'
import MainItems from '../../modules/MainItems'
import IconsHome from '../../modules/iconsHome'


function Home() {
      
        return (
            <>
              <div className="mainBgContainer">
                <MainScrollFixedBar/>
                <Navbar />
                <MainBg />
              </div>
              <IconsHome/>
              <VideoAndIcons/>
              <MainItems/>
              <Contact/>
              <Footer/> 
           </>
        )
      }
      
export default Home