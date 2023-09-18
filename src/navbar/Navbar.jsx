import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.css'
const Navbar = ({ setNavOpen, navOpen }) => {
    const location = useLocation();
    return (
        <motion.nav className={`nav ${navOpen ? 'open' : ''}`} >
            <div className="nav__container">
                <div className="nav__left">
                    <Link className="nav__logo" to="/">
                        <h1 className='logo__name'>Kemet</h1>
                    </Link>
                    <div className="nav__middle">
                        <ul className="nav__list">
                            <Link className="nav__link" to="/collection">
                                <motion.li className="nav__item">
                                    Collection
                                </motion.li>
                            </Link>
                            <Link className="nav__link" to="/mission">
                                <motion.li className="nav__item">
                                    Our Mission
                                </motion.li>
                            </Link>
                            <Link className="nav__link" to="/about">
                                <motion.li className="nav__item">
                                    About Us
                                </motion.li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <Link to="/menu" className="nav__right">
                    <ul className="nav__list">
                        <Link className="nav__link" to="/menu">
                            <motion.li className="nav__item">
                                Menu
                            </motion.li>
                        </Link>
                    </ul>
                </Link>
            </div>
        </motion.nav >
    )
}

export default Navbar