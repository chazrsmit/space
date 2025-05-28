import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import logo from "../../../../templates/assets/shared/logo.svg"

export default function Nav() {


    return(

        <>

        <nav className="d-flex gap-4">
            <div className="nav-logo d-flex align-items-center">
                <img src={logo} alt="" />
            </div>
            <div className="nav-ligne">
                <div className="ligne"></div>
            </div>
            <div className="nav-menu d-flex align-items-center justify-content-center gap-5">
                <NavLink to="/">
                    <div className="link1" >
                        <p>00 HOME</p>
                    </div>
                </NavLink>
                <NavLink to="/destination">
                    <div className="link1" >
                        <p>01 DESTINATION</p>
                    </div>
                </NavLink>
                <NavLink to="/crew">
                    <div className="link1" >
                        <p>02 CREW</p>
                    </div>
                </NavLink>
                <NavLink to="/tech">
                    <div className="link1" >
                        <p>03 TECHNOLOGY</p>
                    </div>
                </NavLink>
            </div>
        </nav>
        
        </>
    )
}
