import React from 'react'
import '../styles/Testimonials.scss'
import testi from '../assets/testi.jpg'
import testi2 from '../assets/testi2.jpg'



const Testimonials = () => {
    return (
        <section className='testimonials'>

        <div className="grid__testimonials">
            <h1 className='testi__h1'>Client Testimonials</h1>
            <div className="testimonials__container">
                
                    <div className="test__card">
                        <img src={testi} alt="" />
                        <h2>Alexandra Neul</h2>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi unde neque quos. Unde inventore vel iste distinctio illum consequatur et.</p>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nisi corrupti deserunt sed dolorum porro voluptatem incidunt vero similique placeat. Eius a fuga quas facilis ut</h3>
                    </div>

                    <div className="test__card test__big">
                        <img src={testi2} alt="" />
                        <h2>Jessica Heils</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti assumenda facere odio velit harum sint obcaecati, voluptas facilis hic!</p>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione inventore eligendi officiis fuga, </h3>
                    </div>
                    </div>

            </div>


        </section>
    )
}

export default Testimonials
