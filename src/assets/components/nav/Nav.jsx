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
                <div className="link1" aria-current>
                    <p><Link to="/">00 HOME</Link></p>
                </div>
                <div>
                    <p><Link to ="/destination">01 DESTINATION</Link></p>
                </div>
                <div>
                    <p><Link to="/crew">02 CREW</Link></p>
                </div>
                <div>
                    <p><Link to="/tech">03 TECHNOLOGY</Link></p>
                </div>
            </div>
        </nav>
        
        </>
    )
}
