import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.css'
const Navbar = ({ setNavOpen, navOpen, setIsMobile, setIsTablet, isTablet, isMobile }) => {
    const location = useLocation();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 468);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMobile]);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 935);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsTablet]);
    return (
        <motion.nav className={`nav ${navOpen ? 'open' : ''}`} >
            <div className="nav__container">
                <div className="nav__left">
                    <Link className="nav__logo" to="/">
                        <h1 className='logo__name'>Kemet</h1>
                    </Link>
                    <div className="nav__middle">
                        <ul className="nav__list">
                            <motion.li className="nav__item">
                                <Link className="nav__link" to="/collection">Collection</Link>
                            </motion.li>
                            <motion.li className="nav__item">
                                <Link className="nav__link" to="/mission">Our Mission</Link>
                            </motion.li>
                            <motion.li className="nav__item">
                                <Link className="nav__link" to="/about">About Us</Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>
                <Link to="/menu" className="nav__right">
                    <ul className="nav__list">
                        <motion.li className="nav__item">
                            <Link className="nav__link" to="/menu">Menu</Link>
                        </motion.li>
                    </ul>
                </Link>
            </div>
        </motion.nav>
    )
}

export default Navbar