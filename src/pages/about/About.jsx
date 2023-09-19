import React from 'react'
import "./About.scss"
import img1 from "../../assets/imgs/Fajum2.webp"
import img2 from "../../assets/imgs/El Fayum, portraits.jpeg"

const About = () => {
    return (
        <section className='about'>
            <div className="about__container">
                <div className="ac__left">
                    <img src={img1} alt="" />
                </div>
                <div className="ac__middle">
                    <h1>About Us</h1>
                    <p>We are a passionate group of Egyptian youth deeply enamored by Egypt's rich history and its ancient civilization. Our unwavering mission is to illuminate the world with the resplendent tapestry of Egypt's culture, heritage, and history. We ardently believe in the paramount significance of safeguarding Egypt's cultural legacy and its invaluable historical and archaeological treasures.</p>
                    <p>
Our journey commenced with a deep-seated desire to rectify a prevailing concern - the inadequacy of Egypt's online representation. Fueled by the conviction that Egypt deserves a more compelling presence on the digital stage, we embarked on this endeavor. Our collective aspiration is to elevate Egypt's virtual profile, providing a platform where its cultural richness, historical significance, and archaeological marvels can shine brightly. We recognized the need for a more comprehensive and engaging portrayal of Egypt, one that would captivate the global audience and serve as a testament to the magnificence of this remarkable nation. Thus, our mission was born, driven by a passion to redefine Egypt's online narrative and bring forth its extraordinary stories to a worldwide audience.</p>
                    <p>With unyielding dedication, we employ cutting-edge technology and employ the latest advancements in scientific methodologies to meticulously document and preserve Egypt's cultural heritage. Our unwavering commitment is to disseminate knowledge and awareness, not only regarding the profound importance of preserving Egypt's cultural legacy but also to shine a radiant light on its historical and archaeological wonders.</p>
                    <p>Through our endeavors, we aspire to encapsulate the essence of Egypt's allure, allowing it to flourish and flourish as a beacon of fascination for all who seek to immerse themselves in its timeless wonders. Our website is a testament to Egypt's enduring beauty and a celebration of its awe-inspiring history.</p>
                </div>
                <div className="ac__right">
                    <img src={img2} alt="" />
                </div>

            </div>
        </section>
    )
}

export default About