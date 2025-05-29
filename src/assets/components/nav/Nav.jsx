import { NavLink } from 'react-router-dom'
import './nav.css'
import logo from "../../../../templates/assets/shared/logo.svg"
import { useState } from 'react'



export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return(

        // <>

        // <nav className="d-flex gap-4">
        //     <div className="nav-logo d-flex align-items-center">
        //         <img src={logo} alt="" />
        //     </div>
        //     <div className="nav-ligne">
        //         <div className="ligne"></div>
        //     </div>
        //     <div className="nav-menu d-flex align-items-center justify-content-center gap-5">
        //         <NavLink to="/">
        //             <div className="link1" >
        //                 <p>00 HOME</p>
        //             </div>
        //         </NavLink>
        //         <NavLink to="/destination">
        //             <div className="link1" >
        //                 <p>01 DESTINATION</p>
        //             </div>
        //         </NavLink>
        //         <NavLink to="/crew">
        //             <div className="link1" >
        //                 <p>02 CREW</p>
        //             </div>
        //         </NavLink>
        //         <NavLink to="/tech">
        //             <div className="link1" >
        //                 <p>03 TECHNOLOGY</p>
        //             </div>
        //         </NavLink>
        //     </div>
        // </nav>
        
        // </>

         <>
            <nav className="d-flex gap-4">
                <div className="nav-logo d-flex align-items-center">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-ligne">
                    <div className="ligne"></div>
                </div>
                
                {/* Desktop Menu */}
                <div className="nav-menu d-flex align-items-center justify-content-center gap-5">
                    <NavLink to="/" onClick={closeMenu}>
                        <div className="link1">
                            <p>00 HOME</p>
                        </div>
                    </NavLink>
                    <NavLink to="/destination" onClick={closeMenu}>
                        <div className="link1">
                            <p>01 DESTINATION</p>
                        </div>
                    </NavLink>
                    <NavLink to="/crew" onClick={closeMenu}>
                        <div className="link1">
                            <p>02 CREW</p>
                        </div>
                    </NavLink>
                    <NavLink to="/tech" onClick={closeMenu}>
                        <div className="link1">
                            <p>03 TECHNOLOGY</p>
                        </div>
                    </NavLink>
                </div>

                {/* Hamburger Menu Button */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                     <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <NavLink to="/" onClick={closeMenu}>
                    <div className="mobile-link">
                        <p>00 HOME</p>
                    </div>
                </NavLink>
                <NavLink to="/destination" onClick={closeMenu}>
                    <div className="mobile-link">
                        <p>01 DESTINATION</p>
                    </div>
                </NavLink>
                <NavLink to="/crew" onClick={closeMenu}>
                    <div className="mobile-link">
                        <p>02 CREW</p>
                    </div>
                </NavLink>
                <NavLink to="/tech" onClick={closeMenu}>
                    <div className="mobile-link">
                        <p>03 TECHNOLOGY</p>
                    </div>
                </NavLink>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </>

    )
}

