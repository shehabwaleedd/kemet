import React from 'react'
import './Home.scss'
import kadesh from "../../assets/kadesh-battle.jpeg"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import islamicCairo from '../../assets/Old Cairo.jpeg'
import mohammadali from '../../assets/mohammad-ali.jpeg'
import { TbDots } from "react-icons/tb"
import rev1911 from "../../assets/imgs/Rev_1911.jpg"
import whereabouts from '../../assets/oldCairo.jpg'

const Home = () => {
    return (
        <section className='home'>
            <div className="home__container">
                <div className="home__left">
                    <div className="hl__container">
                        <span>War History</span>
                        <h1>Battle of Kadesh</h1>
                        <img src={kadesh} alt="" />
                        <div className="hl__container-lower">
                            <p>Continue Reading</p>
                            <HiOutlineArrowNarrowRight className='arrow' />
                        </div>
                    </div>
                </div>
                <div className="home__right">
                    <div className="hr__container">
                        <div className="hr__upper">
                            <div className="hr__upper-container">
                                <div className="hr__upper-left">
                                    <span>history</span>
                                    <h1>Egyptian influence on Persia in the Pre-Islamic period</h1>
                                    <p>In the fields of artistic work, architecture and sculpture, the Persians do not seem to have had any lasting impact on Egyptian tradition, during either both Achaemenid occupations of Egypt...</p>
                                </div>
                                <div className="hr__upper-right">
                                    <img src={islamicCairo} alt="" />
                                </div>
                            </div>
                            <div className="get_started">
                                <p>Get Started</p>
                                <HiOutlineArrowNarrowRight className='arrow-right' />
                            </div>
                        </div>
                        <div className="hr__lower">
                            <div className="hr__lower-left">
                                <img src={mohammadali} alt="" />
                                <div className="hr__lower-title">
                                    <h1>Portrait</h1>
                                    <TbDots className='dots' />
                                </div>
                                <span> portrait of Muhammad Ali (1769–1849). He was a commander in the Ottoman army and had seized power after a civil war.</span>
                                <div className="get_started-lower">
                                    <p>Get Started</p>
                                    <HiOutlineArrowNarrowRight className='arrow-right' />
                                </div>
                            </div>
                            <div className="hr__lower-right">
                                <div className="hr__lower-right-container">
                                    <img src={rev1911} alt="" />
                                    <div className="hr-right-title">
                                        <div className="hr-right-title_upper">
                                            <h1>Egypt's 1911 Revolution</h1>
                                            <span>Politics</span>
                                        </div>
                                        <div className="hr-right-title_lower">
                                            <p>On 9 March 1911, the Egyptian army, led by Ahmed Fakhry, mutinied against the Khedive Abbas Hilmi II, and demanded the dismissal of the Wafd ministers and the return of the 1882 constitution.</p>
                                        </div>
                                    </div>
                                    <div className="get_started-lower-right">
                                        <p>Continue Reading</p>
                                        <HiOutlineArrowNarrowRight className='arrow-right-lower' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home