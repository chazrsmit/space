import './tech.css'
import spaceport from "../../../../templates/assets/technology/image-spaceport-portrait.jpg"
import { useNavigate } from 'react-router-dom'


export default function Spaceport() {


    let navigate = useNavigate()

    return(

        <>
            <div className="crew-1 d-flex gap-5 pt-5 border align-items-center">
                <div className="div-buttons d-flex flex-column gap-4">
                    {/* On ne va pas utiliser NavLink; on va mettre une condition directement sur le bouton. Si le nom de l'url correspond à capsule par exemple, c'est que capsule est actif et on lui applique la classe correspondante. */}
                    <button
                        className={`btn-tech ${location.pathname === "/tech" ? "active" : ""}`}
                        onClick={() => navigate("/tech")}
                    >
                        1
                    </button>
                    <button
                        className={`btn-tech ${location.pathname === "/tech/capsule" ? "active" : ""}`}
                        onClick={() => navigate("/tech/capsule")}
                    >
                        2
                    </button>
                    <button
                        className={`btn-tech ${location.pathname === "/tech/spaceport" ? "active" : ""}`}
                        onClick={() => navigate("/tech/spaceport")}
                    >
                        3
                    </button>
                </div>

                <div className="w-75">
                    <p>The terminology...</p>
                    <h3>SPACE CAPSULE</h3>
                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
            </div>

            <div className="crew-2 d-flex align-items-end justify-content-center border">
                <img className="vehicule" src={spaceport} alt="" />
            </div>
        </>
    )
}