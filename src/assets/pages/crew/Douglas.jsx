import './crew.css'
import douglas from "../../../../templates/assets/crew/image-douglas-hurley.png"
import { useLocation, useNavigate } from 'react-router-dom'

export default function Douglas() {

    let navigate = useNavigate()
    let location = useLocation()

    return(

        <>
            <div className=" crew-1 d-flex flex-column gap-5 pt-5">
                <div className=" d-flex flex-column justify-content-between h-75 pt-5">
                    <div>
                        <div className="mb-3">
                            <h4>COMMANDER</h4>
                            <h3>DOUGLAS HURLEY</h3>
                        </div>
                        <p>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                        </p>
                    </div>

                    <div className="d-flex gap-3">
                        <button   className={`btn-crew ${
                        location.pathname === "/crew" || location.pathname === "/crew/douglas"
                        ? "selected"
                        : ""
                        }`} onClick={() => navigate("/crew/douglas")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/anousheh") ? "selected" : ""}`} onClick={() => navigate("/crew/anousheh")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/mark") ? "selected" : ""}`} onClick={() => navigate("/crew/mark")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/victor") ? "selected" : ""}`} onClick={() => navigate("/crew/victor")}></button>
                    </div>
                </div>
            </div>

            <div className=" crew-2 d-flex align-items-end">
                <img className="douglas" src={douglas} alt="" />
            </div>
        </>
    )
}