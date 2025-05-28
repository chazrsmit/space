import { useNavigate } from 'react-router-dom'
import './crew.css'
import anousheh from "../../../../templates/assets/crew/image-anousheh-ansari.png"

export default function Anousheh() {

    let navigate = useNavigate()

    return(

        <>
            <div className="crew-1  d-flex flex-column gap-5 pt-5 border">
                <div className="d-flex flex-column justify-content-between border h-75">
                    <div>
                        <div>
                            <h4>ENGINEER</h4>
                            <h3>ANOUSHEH ANSARI</h3>
                        </div>
                        <p>
                            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
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

            <div className="crew-2 d-flex align-items-end border">
                <img src={anousheh} alt="" />
            </div>
        </>
    )
}