import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.scss'
const Navbar = ({ setNavOpen, navOpen }) => {
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
                                    Portraits
                                </motion.li>
                            </Link>
                            <Link className="nav__link" to="/mission">
                                <motion.li className="nav__item">
                                    History
                                </motion.li>
                            </Link>
                            <Link className="nav__link" to="/about">
                                <motion.li className="nav__item">
                                    Politics
                                </motion.li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="nav__right">
                    <h2 className="nav__item">
                        Menu
                    </h2>
                </div>
            </div>
        </motion.nav >
    )
}

export default Navbar