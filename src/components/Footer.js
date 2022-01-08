import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.scss'

const Footer = () => {
    return (
        <section className='footer__section'>

            <div className="footer__container">

                        <div className="footer__logo">
                                <h1>LOGO</h1>
                                <p>Slogan Company</p>
                        </div>


                        <div className="footer__card">
                                <Link to='/'>Dark Designs</Link>
                                <Link to='/'>Submit A Ticket</Link>
                        </div>



                        <div className="footer__card">
                                <Link to='/'>Bright Designs</Link>
                                <Link to='/'>Theme Tweak</Link>
                        </div>



                        <div className="footer__card">
                                <Link to='/'>Advanced UI</Link>
                                <Link to='/'>Reasonable Prices</Link>
                        </div>



                        <div className="footer__card">
                                <Link to='/'>Dark Designs</Link>
                                <Link to='/'>Pre Sale Faqs</Link>
                                <Link to='/'>Affiliates</Link>
                                <Link to='/'>Resources</Link>
                        </div>



            </div>

            <div className="footer__icons">
                <Facebook className='footer__icon'/>
                <Instagram className='footer__icon'/>
                <Twitter className='footer__icon'/>
                <YouTube className='footer__icon'/>
                <LinkedIn className='footer__icon'/>
                <Pinterest className='footer__icon'/>
            </div>

        </section>
    )
}

export default Footer
