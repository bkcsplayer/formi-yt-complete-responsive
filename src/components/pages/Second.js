import React from 'react'
import '../styles/Second.scss'
import des1 from '../assets/des1.jpg'
import des2 from '../assets/des2.jpg'
import des3 from '../assets/des3.jpg'
import des4 from '../assets/des4.jpg'
import des5 from '../assets/des5.jpg'


const Second = () => {
    return (
        <section className='second'>

        <div className="grid-products">

                <h1 className='second__h1'>Best Place for Design</h1>


                <div className="second-container">

                    <div className="card long">
                        <img src={des1} alt="" />
                        <p>Coding full eCommerce's.</p>
                    </div>

                    <div className="card">
                        <img src={des2} alt="" />
                        <p>Buildign Advanced UI</p>
                    </div>

                    <div className="card">
                        <img src={des3} alt="" />
                        <p>Professional Team</p>
                    </div>

                    <div className="card">
                        <img src={des4} alt="" />
                        <p>Innovative Designs</p>
                    </div>

                    <div className="card">
                        <img src={des5} alt="" />
                        <p>Advanced SEO opimization</p>
                    </div>

                       




                </div>
                </div>
        </section>
    )
}

export default Second
