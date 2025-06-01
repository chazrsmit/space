import { useLocation, useNavigate } from 'react-router-dom'
import './crew.css'
import anousheh from "../../../../templates/assets/crew/image-anousheh-ansari.png"

export default function Anousheh() {

    let navigate = useNavigate()
    let location = useLocation()

    return(

        <>
            <div className=" crew-1 d-flex flex-column gap-5 pt-5">
                <div className="staff-text d-flex flex-column justify-content-between h-75 addpadding">
                    <div>
                        <div className="mb-3">
                            <h4>ENGINEER</h4>
                            <h3>ANOUSHEH ANSARI</h3>
                        </div>
                        <p>
                            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
                        </p>
                    </div>

                    <div className="boutons-crew d-flex gap-3">
                        <button className={`btn-crew ${(location.pathname === "/crew" || location.pathname.includes("/douglas")) ? "selected" : ""}}`} onClick={() => navigate("/crew/douglas")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/anousheh") ? "selected" : ""}`} onClick={() => navigate("/crew/anousheh")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/mark") ? "selected" : ""}`} onClick={() => navigate("/crew/mark")}></button>
                        <button className={`btn-crew ${location.pathname.includes("/victor") ? "selected" : ""}`} onClick={() => navigate("/crew/victor")}></button>
                    </div>
                </div>
            </div>

            <div className=" crew-2 d-flex align-items-end">
                <img className="anousheh" src={anousheh} alt="" />
            </div>
        </>
    )
}