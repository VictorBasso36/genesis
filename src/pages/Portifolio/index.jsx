import { useState } from 'react'
import './index.css'
import {useParams, Link} from 'react-router-dom'

import MainScrollFixedBar from '../../modules/MainScrollFixedBar'
import Navbar from '../../modules/Navbar'
import Footer from '../../modules/Footer'
import Contact from '../../modules/Contact'
import MainBanner from '../../modules/MainBg'

let scrollStylesMargin
function Portifolio() {

        return (
            <>
              
              <MainScrollFixedBar/>
              <Navbar/>
              <MainBanner/>
                  <div className='WorkContent'>
                    <div className='topScrollBar sk8' style={{position: 'static', marginTop: '0' + 'px'}} >
                        <a><span>Todos</span></a>
                        <a>Futuros</a>
                        <a>Novos</a>
                        <a >Concluidos</a>
                    </div>
                    <div className='WorkContentcontainer'>
                    
                      <Link to={`/Empreendimento/Ipsum1`}> 
                          <div className='myCardWork'>
                            <div className='myGenesisTitleWord'><h1 className='firtext'>Gênesis</h1><h1>Ipsum</h1></div>
                            <img src="https://i.pinimg.com/originals/62/49/9d/62499d440cebf903f42eb8242f0e9405.jpg" alt="" />
                          </div>
                      </Link>
                      <Link to={`/Empreendimento/Ipsum1`}> 
                          <div className='myCardWork'>
                            <div className='myGenesisTitleWord'><h1 className='firtext'>Gênesis</h1><h1>Ipsum</h1></div>
                            <img src="https://i.pinimg.com/originals/62/49/9d/62499d440cebf903f42eb8242f0e9405.jpg" alt="" />
                          </div>
                      </Link><Link to={`/Empreendimento/Ipsum1`}> 
                          <div className='myCardWork'>
                            <div className='myGenesisTitleWord'><h1 className='firtext'>Gênesis</h1><h1>Ipsum</h1></div>
                            <img src="https://i.pinimg.com/originals/62/49/9d/62499d440cebf903f42eb8242f0e9405.jpg" alt="" />
                          </div>
                      </Link><Link to={`/Empreendimento/Ipsum1`}> 
                          <div className='myCardWork'>
                            <div className='myGenesisTitleWord'><h1 className='firtext'>Gênesis</h1><h1>Ipsum</h1></div>
                            <img src="https://i.pinimg.com/originals/62/49/9d/62499d440cebf903f42eb8242f0e9405.jpg" alt="" />
                          </div>
                      </Link><Link to={`/Empreendimento/Ipsum1`}> 
                          <div className='myCardWork'>
                            <div className='myGenesisTitleWord'><h1 className='firtext'>Gênesis</h1><h1>Ipsum</h1></div>
                            <img src="https://i.pinimg.com/originals/62/49/9d/62499d440cebf903f42eb8242f0e9405.jpg" alt="" />
                          </div>
                      </Link><Link to={`/Empreendimento/Ipsum1`}> 
                          <div className='myCardWork'>
                            <div className='myGenesisTitleWord'><h1 className='firtext'>Gênesis</h1><h1>Ipsum</h1></div>
                            <img src="https://i.pinimg.com/originals/62/49/9d/62499d440cebf903f42eb8242f0e9405.jpg" alt="" />
                          </div>
                      </Link>
                    </div>
                  </div>
                  <div className='textAboutWork'>
                      <h1>Para nós cada empreendimento <br />
                      tem um motivo <br />
                      especial para <span>existir.</span> <br /></h1>


                      <p>	<span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                          <br /><br />
                          <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                          <br /><br />
                         <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
              <Contact/>
              <Footer/> 
           </>
        )
      }
      
export default Portifolio