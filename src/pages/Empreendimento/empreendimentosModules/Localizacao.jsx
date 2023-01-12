import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Localizacao.css'

function Localizacao () {

        return (
            <>

                    {/* //aboutlocaltion */}
                    <div className='maindivAboutLocation' >
                        <h1 className='maindivAboutLocationMainTitle'>Viva o melhor de <br /><span>Rio Grande da Serra</span></h1>
                        <div className='itenLocationHere'>
                            <div className='itenLocationCard'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="49"
                                height="57"
                                viewBox="0 0 49 57"
                                >
                                <image
                                    width="49"
                                    height="57"
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA5CAYAAACfz8NxAAAD90lEQVRoge2aaYhNYRjHfzPGzmTJTraGkrKvZftmzxaSJmUtkig+2T6QZE2RInyQyPLJUrKFKMuHqSFZIsRYCmMwGKPHPNfce99lzp17R+fm/up0Z573ue85//fc932fc54na8jgPiRIc6C7Hl2BtkBroCnQBKgH1AZygDr6WQb80EP+LgVKgA/Ae+A18Ax4AjzQ43vQy8oxLCaNgXHAGEAUdwEaGl6p5Q3wCLgGnAJu+nr33Yl+wDIV0NRo/bfcA/YDO/VOxpBtuZRmwGHgNjA7BAKEHsBW4CEwJb6xVof2baL/H6S3bpDRTTiQAZ0h1w1csonoCdwFGoRUQDQjgGLgBlE/p7rABcM13GzVgf8rQiZwyzQTIWxARchavtRoTg8mAnkiYpRuWOnKaBExII0FCO1lx25hmCsoB34Z1mDI4GRZPGuiz0Y5uuba2ANstNiDMA9YZ/HbB6w3rMFYCKy2eGbneEbmFfDSsAbjucOrqAb6LLeFHREaGZbg5Do8kwkcXX1aY6e0IyMiLGREhIWMiLDgE1FqWILz1eGZTJ/fDIvie9tRTz9t8YqPcs/TYTJ91jesik/EImC6J7ZyUabvn2zMBSaluE+viFzfVl9NGuuRUnxzIm3IiAgLGRFhISMiLGREhIX/RkQhMF/zc5018XLD8EoNhfrOSlJqnYBZwPWqevbFTmjCZUic7almko4DU41vVB+52GEasUaQZOQR4CQw2dWz705802Sji2nAR0dbokiUOjZOQDRTNMNqxfV+UzihKVofBz1tiXAG+FSF/wHDUkGWT8Q9w2JSaFiqR0GAb7leY/65E58NawVdDYtJEJ8gdAvg08qwVFCardl7G9OiHiddzHHYE2WiViH4yHe0FYmI844JJU91xwxrJbs8o5Mokvg86vnOHl3ebVwWES+09MDGBM0XD9Nn3FzNccuSt8TinwyyhF4Ehkeda6Cea5Gj3zuyZ0XKIvoDtwyXWEo0l5HyZ+QkzjUeOB3ZJ6QEYrfhEkvDfySAgOc6rUfMZre4BsOJVPNYX/0QL0IYCpwLuQD52fcGfkYMtrBDQo1VWkwVJr4Am3Syx+xtvnqnXN0HJujy9kVrKVw7PDo6Xx2DE02QSXtfl17Zqc8Ch1zxk09EPCuAzZ4LvKKhc3GA15RlOjASM7Vz+GzTc1ZJkPI5YSawxbBWclnLKxKhQKvbpDzJVpaxXO/CDqMlDteoRrNAY3oX1REQQfLavTRnbmM7sMZij6EqEbJT7jWslVxJQkCEdyrElaRf76hO+ItPRL7GLC4kHBnpaEuUt0BfDYFsrAVWuvr0zYk8rU21ZXeuapVmKpEyUpkjUgHX0XKd9gAQ+A1C76yzRigNrQAAAABJRU5ErkJggg=="
                                ></image>
                                </svg>
                                <h1>ESTAÇÃO</h1>
                                <p>5 minutos a pé da
                                  estação Rio Grande
                                da serra.</p>
                            </div>
                            <div className='itenLocationCard'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="62"
                                height="58"
                                viewBox="0 0 62 58"
                                >
                                <image
                                    width="62"
                                    height="58"
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA6CAYAAADoUOpSAAAFCklEQVRoge2bW4hVVRjHf2dmnC6a0sXCRukeEUVGdylIQkiIqKCiDLSHiPCh8iXoRi/dKKKIkC4PRSQZPQTVQ+FLQxF21whUJNKwrCyacmbO6OiOr/lvXbMu+9zG6Zx9+r149l7fWe7/Xmt961vfd6Zy2aXnU8DFwM2AGR2XNmsbxoEdwEfAGuCn1IOlhM8DHgduA3qD1s7gN+Bp4Ckg85+4JyLhXGAQWN7Boo25wJPA28CRfmOfd30i8C5wUtBN53IDUAWWuQr8EX+iZKJzbgVucm+4ws8Cbgm+Uh7uc5euK/yayNQvEwuBs1PCy4xpXeoLXwBcVHLhRiD88pjLLyEXKkY5IHxpF4g2ZgFXIOF2cVVgUl6uzYUvUuDSLdjsnt0nx7Y+Fs+WlAow3w4plS4SnVPp6ULRRhY7nXUFtsafBfrrGPmKDvhrnXv3AmcUfNeOhdv12fbPB9RPrO/vdX7OuRFYnOjb7N/U8Rk9/4NKlsTs/e+uN+F3B01pDvOE21HvgqQ1vOYIPxZYGVgcZKMn3LbYOwOrg2x2hM8A7mogS3S8TfXR4HYa33Y4aTnBPufzfu/ax++rGlhMZo9zZaP8d2CRZrRr13hXC29kipSFIRP+XRcK32zCXw9ulxtzmu/3KPE+2EXCH7WYwYSPqXCwJTAJ8Z1hLedY8T7HgpdUX7X6btTeeEPCDxj/CCwB1gWmkxnzrvcEFun2vTUebty7rhVfuO1ZjRghU3C0PI/sehfMn5c3Dmnab1MaqiKhf8gBrgae9wKNT4AR2e/T55+1dO5X+37Z/gl8qihrhl7EkEJVCz8fAXY5fX+tvvKUWFVloW9UFlqjPvKXNqhnOFzXw6qjfajo9GU3nE3Vzowj1Il1vjtoDTlKeeuROmaCCZ+pl/JX0BoyU/H4mPovwgZstv7dHZlJ/1KURx8tmG49zkjmNBIP7NUMiBHLDwxHQtoc3z7TTCqkaM3FOFnO4UudzOZGbNwHuhJ4T77j6hpFyKN1KPlCJ8bTA4vJnKPl9zmwQjOubmJT3Y6Zd2jtjehENqDUrKWh5zi2O4GPga+AXzWt7AHOVC7PP7lt1LrfpFHp1ctbqOzngGM7LNvP5HyrWn5W27tEz9Lv2P8g+w3yFTYjj9G0f8zxBxOjEhG+SB2UhZ3KK05a67E1XrQtHGqGNDJF+30m5zgnaIkT9T0x4f8Vts8+40/JBH1KaqQyOnV10A7Yfv1wwS4S4yGVtU+LtNWkXc7jI5HtsR7qiS+itMuIV7xBOE/V28yz2aDtK/adhmhVuG05v0QCjhhWozshcj/GdQphfZ5zhLdEK8J3qA61NWgJyST8JeD6oDUkFfL6h6SmaUX4O8C3wd00VY1YPcIPOa04t0Y8cE5qJKedVkbcf2krVS3x1/tq56eV9b7o/uBO8f2GmUqvvgo4Nbg78YPB5G9KE1gs/0HEqzeytAqZSuHR0LDJEHitV6qactolgKk0sf6zZsNV2kj4gM7rjbC42XCVNorc+pV3W6fdomgkM+UIluh83hTtdDqbpYhtWvi/WupQtt/EZDFNMeG76kwGdAq/x7bUmPDtCiDKQjR/GBM+rhRQGbCg6sWYjphw41XgreBu57EqdWxOCTdu11/wpPCLA6mt0a+YTgc2a+8BXkn9X0X7uOXB7I/trEphZeRTVMPKy71+zcucojkS34O6jtLCUrcwOJWYA7OylKWnXiis+QP/AJV4CMKl86wLAAAAAElFTkSuQmCC"
                                ></image>
                                </svg>
                                <h1>COMÉRCIO</h1>
                                <p>Próximo a lojas, mercados e muito mais.</p>
                            </div>
                            <div className='itenLocationCard'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="63"
                                height="65"
                                viewBox="0 0 63 65"
                                >
                                <image
                                    width="63"
                                    height="65"
                                    xlinkHref="data:img/png;base64,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"
                                ></image>
                                </svg>
                                <h1>TRANQUILIDADE</h1>
                                <p>More próximo a natureza em um bairro silencioso.</p>
                            </div>
                            <div className='itenLocationCard'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="73"
                                height="52"
                                viewBox="0 0 73 52"
                                >
                                <image
                                    width="73"
                                    height="52"
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA0CAYAAADGzxXDAAAFi0lEQVRoge2bC4wdUxjHf7se9QxJtdt6lC2K1rKtLq3HaoWoKqIErVItImlFJN5JicQjtIR4b5FaGm9Cm6pgy3pUyxaVLZaohgZRitSruxb56n+3c+fMnbv3ztzX7v0lk90758zcM/855/vO+b5zK0aPGk4RcDRwPHAw0B/4GVgFvAYsKnTzCilSH+BM4DxgrFO6mZXAw8CTwDqnNA8UQqT9JM6FwO5OaWo2AHMlVkvKWjkgnyIdB0wCpjklmfMi8BjwXD4avqVzJl52VK8xYQ6P8c6n6PgUeEi961unVkzkqifVeIZUf6c0fjYCDRLr3WIX6URgso5CsRhoBJ4B/omjDXGItCtwmoZUUcwnxGoNxWeBL5zSDIgi0qEaTucCWzulxYUJdT+wJJtWVTpnwtlKvaYZWA5cUAICGacDTcDHwHRgZ6dGCN0VaRBwDfCV3kq9U6M0qNHE1J5jDjA0DpHMbTdqfN8M7ObUKE2sJ12upc8CYFzYUwSJtC1wFrAMeEc2ZwunVs/hJHnENmAG0C9MpAHA9eqKTwCH9WBhghgC3Kvnv0vLp00kvJstMBcC2wdc3JuxxXejLUsGKiQRNPR6O4+Y3TJhLikLFMplJs5RYTXKMNRE+rOsQyjtJtILYTXK8Halon2fl7UI5DdgtonUARwJvBlUqxfTCowGvkt4tXWejMXCXi5Os8LMNRLKcf2vACcDg4E7TEXnFj0TSzI8CowAxijC2UW6eJKlfaYqbjTSKS192jRhfBD4KdXTpJtEWuzYDHudFH4e+NupVXq8CkwE9gduCROIDLMlzTosV3Y2MBPYw6lVvKxXj7Ge81lAK6uBHzX0kshmObIWuFV2y97G606N4uJDmQwT4WqfQJWKJVnU8iNFXh3iypaMVCJgapFEEv6V8W1Q70+FvegvVWYrj500JUoi24XtDr7PLRp+1fobKTsRAfPGs/TwkwME2s732WtuNqQKLmYr0nhtZJju+yKbb92nANYJedwRslTJUHtJNwFrfOWW7X1PXtqL1/50An85d44gUjtwkILqq+Uh9vTVeRmYABwI3A786twlGh0ywjYrPgJ4Wt44QV/gSuATrU/r0jxvyqxP2EVhdHrKzMNdpbCnNeYY33WrFHTfSymo1pD7dodvgCs0pKYpFu/lEGC+epM5mAM8ZV4RB2nynKCvetsucYkURIW6dZM8ykyfDfhFPc+m+8dqzpUJbwCnakjdJi/rZZLWny2aovjtpv+5X1Iv91IXtFMlVxHJWuAevU0Lru/rK29SktOC7TdqfhLEH8AD8p5j1VO9vXigrrch/3gGAUTbBjTMOfs/9cpOd5HrrTf9lKaZIRt1t95gAgvRXCubNkZ2rkrbAVvVM4J2t5kdulQ9t49Tmp7qNDX21tDbRK5F8jJOh9moedrMkDDmv8sThnlDa+sU4CJglFOaGe+nqb3c+6EQCYBhsilrJFSNUyMZ85qz5RjmxSCQsQK4M2Adal77Og3fLvLZk/xYqvl8HR/I4LbJIFdprlUr917hXB2dWfK2XgNvw/wG/50LKZKXETryyVMBHrBKezHP8Z7MdriVap4u0e567coLYoociHNRtl9WquyTpt1D4njYr50zpUEiuNaeprVJ5dmKtKIEhepURBKFUsJIKo8ybBqcM8XNfM/Mfps0LU0qjyLSHM1dSoGNiggkWJ+mzUnLpChTgA6t+JfJdRYrnWrnD572LdJ8qNZzrkLDbKkW05sLYgjfDtAidqJTUnjeAi7WrtusicOVf68V/fgiSgqsVLikPqpAxDzfWaxuPSGLWFFcLFFsu1ahk1jIxbIksZofrpT5Gd3dL50la5UZWaDhFTv5+r2b7VqxgJjt6LX/o/yKwIyrhTLs10i2hdqGuJMGig3gP9e9FZiIH/ahAAAAAElFTkSuQmCC"
                                ></image>
                                </svg>
                                <h1>EDUCAÇÃO</h1>
                                <p>Próximo a escolas e a ETEC.</p>
                            </div>
                        </div>
                    </div>


                <div className='titleLocal' id="Localizacao"> 
                    <pre>
                       <h1>ÚNICA TORRE EM</h1>
                        <span>RIO GRANDE DA SERRA</span>
                    </pre>
                </div>
                <div className='Local'>

                   <div className='localContainer'>
                        <pre><p>Qualidade de vida, tranquilidade e muita área verde, tudo isso bem pertinho de
                             São Paulo, e ainda no <span>melhor bairro da cidade</span>  de Rio Grande da Serra? Não é 
                             mais um sonho, é a <span>sua nova realidade.</span> </p></pre>
                        <div className='mapsContent'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.990158025573!2d-46.39365268437485!3d-23.74773037438768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce12dd4c7b7557%3A0xd1e586949d42a30f!2sAv.%20Francisco%20Morais%20Ramos%2C%20333%20-%20Jardim%20Novo%20Horizonte%2C%20Rio%20Grande%20da%20Serra%20-%20SP%2C%2009450-000!5e0!3m2!1spt-BR!2sbr!4v1670248350890!5m2!1spt-BR!2sbr"  style={{border:0}} allowullscreen="true" loading="lazy" ></iframe>
                            <a target="_blank" title="Endereço genesis incorporadora" href="https://www.google.com/maps/place/Av.+Francisco+Morais+Ramos,+333+-+Jardim+Novo+Horizonte,+Rio+Grande+da+Serra+-+SP,+09450-000/@-23.747735,-46.391464,16z/data=!4m5!3m4!1s0x94ce12dd4c7b7557:0xd1e586949d42a30f!8m2!3d-23.7477353!4d-46.391464?hl=pt-BR">
                                <div className='aboutMap'>
                                    <p>Rua Francisco Moraes Ramos, 333 - Rio Grande da Serra</p>
                                    <div className='routeMap'>
                                        <h1>Traçar rota</h1>
                                    </div>
                                </div> 
                            </a>
                           
                        </div>
                        
                   </div>
                </div>
            </>
        )
      }
      
export default Localizacao