import { useLocation, useNavigate } from 'react-router-dom'
import './crew.css'
import mark from "../../../../templates/assets/crew/image-mark-shuttleworth.png"

export default function Mark() {

    let navigate = useNavigate()
    let location = useLocation()

    return(

        <>
            <div className="crew-1  d-flex flex-column gap-5 pt-5">
                <div className="d-flex flex-column justify-content-between h-75 pt-5">
                    <div>
                        <div className="mb-3">
                            <h4>MISSION SPECIALIST</h4>
                            <h3>MARK SHUTTLEWORTH</h3>
                        </div>
                        <p>
                            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
                        </p>
                    </div>

                    <div className="d-flex gap-3">
                        <button className={`btn-crew ${(location.pathname === "/crew" || location.pathname === "/crew/douglas") ? "selected" : ""}}`} onClick={() => navigate("/crew/douglas")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/anousheh") ? "selected" : ""}`} onClick={() => navigate("/crew/anousheh")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/mark") ? "selected" : ""}`} onClick={() => navigate("/crew/mark")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/victor") ? "selected" : ""}`} onClick={() => navigate("/crew/victor")}></button>
                    </div>
                </div>
            </div>

            <div className="crew-2 d-flex align-items-end">
                <img className="mark" src={mark} alt="" />
            </div>
        </>
    )
}