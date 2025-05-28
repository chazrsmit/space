import './crew.css'
import douglas from "../../../../templates/assets/crew/image-douglas-hurley.png"
import { useNavigate } from 'react-router-dom'

export default function Douglas() {

    let navigate = useNavigate()

    return(

        <>
            <div className="crew-1 d-flex flex-column gap-5 pt-5">
                <div className="d-flex flex-column justify-content-between h-75">
                    <div>
                        <div>
                            <h4>COMMANDER</h4>
                            <h3>DOUGLAS HURLEY</h3>
                        </div>
                        <p>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                        </p>
                    </div>

                    <div className="d-flex gap-1">
                        <button className="btn-crew" onClick={() => navigate("/crew/douglas")}></button>
                        <button className="btn-crew" onClick={() => navigate("/crew/anousheh")}></button>
                        <button className="btn-crew" onClick={() => navigate("/crew/mark")}></button>
                        <button className="btn-crew" onClick={() => navigate("/crew/victor")}></button>
                    </div>
                </div>
            </div>

            <div className="crew-2 d-flex align-items-end">
                <img className="douglas" src={douglas} alt="" />
            </div>
        </>
    )
}