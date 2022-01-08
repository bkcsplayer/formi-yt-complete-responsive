import { Close, MenuOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {

    const [active,setActive] = useState(false)


    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className='header'>
                    <div className="header__logo">
                            <h1>Formi.</h1>
                    </div>

                    <div className="menu-icon">
                        <MenuOutlined className='menu' onClick={showMenu}/> 
                    </div> 


                <nav className={active ? 'navbar active' : 'navbar'}>        



                    <ul className='nav__ul'>

                     <div className="closed">
                        <Close className='close' onClick={showMenu}/>
                    </div> 
                        <li>
                            <Link to='/'>Work</Link>
                        </li>
                        <li>
                            <Link to='/'>Services</Link>
                        </li>
                        <li>
                            <Link to='/'>About</Link>
                        </li>
                        <li>
                            <Link to='/'>Culture</Link>
                        </li>
                        <li>
                            <Link to='/'>Testimonials</Link>
                        </li>
                        <li>
                            <Link to='/'>Methods</Link>
                        </li>
                        <li className='blog'>
                            <Link to='/'>Blog</Link>
                        </li>


                        <div className="header__contact">
                            <Link to='/'>Contact Us</Link>
                        </div>
   
                    </ul>

                </nav>
                </div>
    )
}

export default Header
