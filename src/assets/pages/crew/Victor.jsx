import { useLocation, useNavigate } from 'react-router-dom'
import './crew.css'
import victor from "../../../../templates/assets/crew/image-victor-glover.png"

export default function Victor() {



    let navigate = useNavigate()
    let location = useLocation()

    return(

        <>
            <div className="crew-1 d-flex flex-column gap-5 pt-5">
                <div className="d-flex flex-column justify-content-between h-75">
                    <div>
                        <div>
                            <h4>PILOT</h4>
                            <h3>VICTOR GLOVER</h3>
                        </div>
                        <p>
                            Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
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
                <img className="victor" src={victor} alt="" />
            </div>
        </>
    )
}