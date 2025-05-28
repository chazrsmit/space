import Nav from '../../components/nav/Nav'
import './destination.css'
import json from '../../../planets.json'
import { Outlet } from 'react-router-dom'
import Moon from '../../components/planets/Moon'



export default function Destination() {


    return(
        
<>
    <div className="destination">

            <Nav />
            
            <div className="home-content d-flex container flex-column px-5">

                <div>
                    <h6>01 PICK YOUR DESTINATION</h6>
                </div>

                <div className="d-flex">
                <Outlet />
                </div>

            </div>

    </div>
    
</>
    
    )
}