import { useNavigate } from 'react-router-dom'
import './crew.css'
import mark from "../../../../templates/assets/crew/image-mark-shuttleworth.png"

export default function Mark() {

    let navigate = useNavigate()

    return(

        <>
            <div className="crew-1  d-flex flex-column gap-5 pt-5">
                <div className="d-flex flex-column justify-content-between h-75">
                    <div>
                        <div>
                            <h4>MISSION SPECIALIST</h4>
                            <h3>MARK SHUTTLEWORTH</h3>
                        </div>
                        <p>
                            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
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
                <img className="mark" src={mark} alt="" />
            </div>
        </>
    )
}