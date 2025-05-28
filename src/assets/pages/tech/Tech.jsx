import { Outlet } from 'react-router-dom'
import './tech.css'
import Nav from '../../components/nav/Nav'


export default function Tech() {


    return(


        <>
        
        <div className="tech">

            <Nav />
            
            <div className="home-content d-flex container flex-column px-5">

                <div>
                    <h6>03 SPACE LAUNCH 101</h6>
                </div>

                <div className="d-flex flex-column-reverse flex-md-row gap-5">

                    <Outlet />
                    
                
                </div>

            </div>

        </div>

        </>
    )
}