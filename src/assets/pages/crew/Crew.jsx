import { Outlet } from 'react-router-dom'
import './crew.css'
import Nav from '../../components/nav/Nav'

export default function Crew() {


    return(


        <>
        
        <div className="crew">

            <Nav />
            
            <div className=" d-flex container flex-column px-5">

                <div className=" page-title d-flex gap-3">
                    <h6>02</h6><h6>MEET YOUR CREW</h6>
                </div>

                <div className=" h-100 d-flex flex-column flex-md-row gap-5">

                    <Outlet />
                    
                
                </div>

            </div>

        </div>

        </>
    )
}