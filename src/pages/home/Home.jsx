import React from 'react'
import './Home.scss'
import kadesh from "../../assets/kadesh-battle.jpeg"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import islamicCairo from '../../assets/Old Cairo.jpeg'
import mohammadali from '../../assets/mohammad-ali.jpeg'
import rev1911 from "../../assets/imgs/Rev_1911.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home'>
            <div className="home__container">
                <div className="home__left">
                    <div className="hl__container">
                        <Link to="/portraits">
                            <span>Portraits</span>
                        </Link>
                        <h1>Mohammad Ali Basha</h1>
                        <img src={mohammadali} alt="" />
                        <h2> portrait of Muhammad Ali Basha (1769–1849). Founder of Modern Egypt and the Khedivate of Egypt and Sudan.</h2>
                        <Link to="/portraits" className="hl__container-lower">
                            <p>Continue Reading</p>
                            <HiOutlineArrowNarrowRight className='arrow' />
                        </Link>
                    </div>
                </div>
                <div className="home__right">
                    <div className="hr__container">
                        <div className="hr__upper">
                            <div className="hr__upper-container">
                                <div className="hr__upper-left">
                                    <Link to="/culture">Culture</Link>
                                    <h1>Egyptian influence on Persia in the Pre-Islamic period</h1>
                                    <p>In the fields of artistic work, architecture and sculpture, the Persians do not seem to have had any lasting impact on Egyptian tradition, during either both Achaemenid occupations of Egypt...</p>
                                </div>
                                <div className="hr__upper-right">
                                    <img src={islamicCairo} alt="" />
                                </div>
                            </div>
                            <Link to="/culture" className="get_started">
                                <p>Get Started</p>
                                <HiOutlineArrowNarrowRight className='arrow-right' />
                            </Link>
                        </div>
                        <div className="hr__lower">
                            <div className="hr__lower-left">
                                <img src={kadesh} alt="" />
                                <div className="hr__lower-title">
                                    <div className="hr__lower-title-upper">
                                        <h1>Battle of Kadesh</h1>
                                        <Link to="/history">History</Link>
                                    </div>
                                    <span> The Battle of Kadesh or Battle of Qadesh took place between the forces of the Egyptian Empire under Ramesses II and the Hittite Empire under Muwatalli II at the city of Kadesh on the Orontes River, just upstream of Lake Homs near the modern Syrian-Lebanese border.</span>
                                </div>
                                <Link to="/portraits" className="get_started-lower">
                                    <p>Explore More
                                        <HiOutlineArrowNarrowRight className='arrow-right' />
                                    </p>
                                </Link>
                            </div>
                            <div className="hr__lower-right">
                                <div className="hr__lower-right-container">
                                    <img src={rev1911} alt="" />
                                    <div className="hr-right-title">
                                        <div className="hr-right-title_upper">
                                            <h1>Egypt's 1911 Revolution</h1>
                                            <Link to="/politics">Politics</Link>
                                        </div>
                                        <div className="hr-right-title_lower">
                                            <p>On 9 March 1911, the Egyptian army, led by Ahmed Fakhry, mutinied against the Khedive Abbas Hilmi II, and demanded the dismissal of the Wafd ministers and the return of the 1882 constitution.</p>
                                        </div>
                                    </div>
                                    <Link to="/politics" className="get_started-lower-right">
                                        <p>Continue Reading</p>
                                        <HiOutlineArrowNarrowRight className='arrow-right-lower' />
                                    </Link>
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