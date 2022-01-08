import { Facebook, Instagram, LinkedIn, NewReleases, Twitter } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import working from '../assets/working.jpg'
import '../styles/MainSection.scss'

const MainSection = () => {
    return (
        <section className='main__section'>
                <div className="section__container">

                <div className="flex__items">
                 <div className="section__text">
                      <h1>Web Design Agency in Paradise</h1>
                        <p>Working with brands all over the world</p>




                         <button>
                              <Link to='/'>Find out more</Link>
                        </button>

                  </div>


                <div className="section__img">
                    <img src={working} alt="" />
                </div>
            </div>
            </div>
                        <div className="bottom__section">

                        <div className="links">
                                <Link to='/'>Web Design Ideas</Link>
                                <Link to='/'>eCommerce Websites</Link>
                                <Link to='/'>Digital Agency</Link>
                        </div>

                        <h3 className='bottom__h3'>We are a web design agency in Manchester who care, build relationships, have industry experience, and win website design awards.</h3>

                            <div className="buttons">
                                <button>Discover</button>
                                <button>Start Building</button>
                            </div>

                        </div>


        </section>
    )
}

export default MainSection


