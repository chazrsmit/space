import { Link } from 'react-router-dom'
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
                <p>00 HOME</p>
                <p>01 DESTINATION</p>
                <p>02 CREW</p>
                <p>03 TECHNOLOGY</p>
            </div>
        </nav>
        
        </>
    )
}
