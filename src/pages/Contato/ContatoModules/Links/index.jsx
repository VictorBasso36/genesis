import { useState } from 'react'
import './index.css'

//img


import WhatsAppIcon from '../../../../assets/logos/iconWhatsAPPblack.png'
import iconFacebookBlack from '../../../../assets/logos/iconFacebookBlack.png'
import IconInstagramblack from '../../../../assets/logos/iconInstagramblack.png'
import IconTelBlack from '../../../../assets/logos/iconTel.png'

function Links() {
      
        return (
            <>
                <div className='LinksHere'>
                    <div className='MainSocialMedia'>
                        <div className='socialmediaHere'>
                            <div className='cardSocialMedia'>
                                <a href="https://www.instagram.com/grupogenesisconstrutora/" target="_blank">
                                    <img src={IconInstagramblack} alt="" />
                                </a>
                            </div>
                            <div className='cardSocialMedia'>
                                <a href="https://api.whatsapp.com/send?phone=5511960653131" target="_blank">
                                    <img src={WhatsAppIcon} alt="" />
                                </a>
                            </div>
                            {/* <div className='cardSocialMedia'>
                                <a href="">
                                    <img src={iconFacebookBlack} alt="" />
                                </a>
                            </div> */}
                            <div className='cardSocialMedia'>
                                <a href="tel:+55 11 96065-3131">
                                    <img src={IconTelBlack} alt="" />
                                </a>
                            </div> 

                        </div>
                        <div className='mainTitleContato'>
                            <p>Nossos canais de</p>
                            <h1>Contato</h1>
                        </div>
                    </div>
                    <div className='MainChanells'>
                       
                           <div className='MyChannelCall'>
                                <h1>VENDAS</h1> 
                                <a target="_blank" title="genesis empreendimentos email de contato" href="mailto:contato@grupogenesis.com.br">
                                    <p>contato@grupogenesis.com.br</p>
                                </a>
                                <a href="tel:+55 11 96065-3131" title="genesis empreendimentos telefone de contato">
                                    <p>(11) 96065-3131</p>
                                </a>
                               
                            </div>  
                            <div className='MyChannelCall'>
                                <h1>ENDEREÇO</h1>
                                <a target="_blank" href="https://www.google.com.br/maps/place/Grupo+G%C3%AAnesis+Construtora/@-23.6754464,-46.5370614,17z/data=!4m13!1m7!3m6!1s0x94ce4267e2b8c017:0x86a15b533a9209f1!2sR.+Maca%C3%BAba,+304+-+Para%C3%ADso,+Santo+Andr%C3%A9+-+SP,+09190-650!3b1!8m2!3d-23.6754464!4d-46.5348727!3m4!1s0x94ce4335a49e5135:0xa16e3a4ea706967d!8m2!3d-23.6754464!4d-46.5348727" title="Endereço Construtora e Incorporadora Genesis">
                                    <p>Rua Macaúba, 304 - Santo André - SP.</p>
                                </a>
                            </div>    
                      
                       
                    </div>
                </div>
           </>
        )
      }
      
export default Links