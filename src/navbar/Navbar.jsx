import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.scss'
const Navbar = ({ setNavOpen, navOpen }) => {

    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }
    return (
        <motion.nav className={`nav`} >
            <div className="nav__container">
                <div className="nav__left">
                    <Link className="nav__logo" to="/">
                        <h1 className='logo__name'>Kemet</h1>
                    </Link>
                    <div className="nav__middle">
                        <ul className="nav__list">
                            <Link className="nav__link" to="/portraits">
                                <motion.li className="nav__item">
                                    Portraits
                                </motion.li>
                            </Link>
                            <Link className="nav__link" to="/history">
                                <motion.li className="nav__item">
                                    History
                                </motion.li>
                            </Link>
                            <Link className="nav__link" to="/politics">
                                <motion.li className="nav__item">
                                    Politics
                                </motion.li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <div className="nav__right">
                    <AnimatePresence>
                        {navOpen && (
                            <motion.div
                                className='extendedMenu'
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                            >
                                <Link className="nav__link" to="/mission">
                                    <motion.li
                                        className="nav__item"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        Our Mission
                                    </motion.li>
                                </Link>
                                <Link className="nav__link" to="/about">
                                    <motion.li
                                        className="nav__item"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        About Us
                                    </motion.li>
                                </Link>
                                <Link className="nav__link" to="/careers">
                                    <motion.li
                                        className="nav__item"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        Careers
                                    </motion.li>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <h2 className="nav__item" onClick={handleNavOpen}>
                        Menu
                    </h2>
                </div>
            </div>
        </motion.nav >
    )
}

export default Navbar