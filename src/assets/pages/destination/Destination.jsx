import Nav from '../../components/nav/Nav'
import './destination.css'
import { Outlet } from 'react-router-dom'



export default function Destination() {


    return(
        
<>
    <div className="destination">

            <Nav />
            
            <div className="home-content d-flex container flex-column px-5">

                <div>
                    <h6>01 PICK YOUR DESTINATION</h6>
                </div>

                <div className="d-flex flex-column flex-md-row">
                <Outlet />
                </div>

            </div>

    </div>
    
</>
    
    )
}