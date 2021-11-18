import React, { useState } from 'react'
import {FaBars, FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import './Nav.css'
function Nav() {

    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <nav>
                <span className='title'><span className='capital-letter-title'>J</span>akes <span  className='capital-letter-title'>P</span>lastering <span  className='capital-letter-title'>S</span>ervices</span>
               
                    { !menu ? <GrClose className='close-icon' onClick={toggleMenu} />
                             :<FaBars className='bars' onClick={toggleMenu}/>}

                                <ul className='desktop-nav-items'>
                                    <li className='desktop-nav-links'>
                                        <a>Home</a>
                                    </li>
                                    <li className='desktop-nav-links'>
                                        <a>About Us</a>
                                    </li>
                                    <li className='desktop-nav-links'>
                                        <a>Gallery</a>
                                    </li>
                                    <li style={{marginTop:'-3px'}} className='desktop-nav-links'>
                                        <a><button className='quote-nav-button'>Get A Quote</button></a>
                                    </li>
                                </ul>
            </nav>

                 <div className={menu ? 'notActive':'activeMenu'}>
                     <ul className='nav-items-mobile'>
                         <li className='nav-links-mobile'>
                             <a onClick={toggleMenu}>Home</a>
                         </li>
                         <li className='nav-links-mobile'>
                             <a onClick={toggleMenu}>Aout Us</a>
                         </li>
                         <li className='nav-links-mobile'>
                             <a onClick={toggleMenu}>Gallery</a>
                         </li>
                         <li className='nav-links-mobile'>
                             <a onClick={toggleMenu}>Get A quote</a>
                         </li>
                         <li>
                         <FaFacebookSquare className='facebook-icon' classname='menu-icons' />
                         <FaInstagram className='instagram-icon' />
                         </li>
                     
                     </ul>
                 </div>

           
        </div>
    )
}

export default Nav
