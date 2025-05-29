import Nav from '../../components/nav/Nav'
import './destination.css'
import { Outlet } from 'react-router-dom'



export default function Destination() {


    return(
        
<>
    <div className="destination">

            <Nav />
            
            <div className="home-content d-flex container flex-column px-5 gap-5">

                <div className="page-title d-flex gap-3">
                    <h6>01</h6><h6>PICK YOUR DESTINATION</h6>
                </div>

                <div className="d-flex flex-column flex-md-row">
                <Outlet />
                </div>

            </div>

    </div>
    
</>
    
    )
}