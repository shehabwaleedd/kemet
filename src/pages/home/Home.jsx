import React from 'react'
import './Home.css'
import kadesh from "../../assets/kadesh-battle.jpeg"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import islamicCairo from '../../assets/yousef-salhamoud-VFhZGWWFF80-unsplash.jpg'
import mohammadali from '../../assets/mohammad-ali.jpeg'
import { TbDots } from "react-icons/tb"

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
                            <p>Get Started</p>
                            <HiOutlineArrowNarrowRight className='arrow' />
                        </div>
                    </div>
                </div>
                <div className="home__right">
                    <div className="hr__container">
                        <div className="hr__upper">
                            <div className="hr__upper-container">
                                <div className="hr__upper-left">
                                    <span>Culture</span>
                                    <h1>Egyptian influence on Persia in the Pre-Islamic period</h1>
                                    <p>In the fields of artistic work, architecture and sculpture, the Persians do not seem to have had any lasting impact on Egyptian tradition, during either both Achaemenid occupations of Egypt</p>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home