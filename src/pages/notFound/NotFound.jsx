import React from 'react'
import "./NotFound.scss"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='notfound'>
            <div>
                <h1>
                    The Page you are looking for does not exist
                </h1>
                <p>
                    Please check the URL or click the link below to return to the homepage.
                </p>
                <Link to="/">
                    Return to homepage
                </Link>
            </div>
        </section>
    )
}

export default NotFound
