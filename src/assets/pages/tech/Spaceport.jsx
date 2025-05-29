import './tech.css'
import spaceport from "../../../../templates/assets/technology/image-spaceport-portrait.jpg"
import { useNavigate } from 'react-router-dom'


export default function Spaceport() {


    let navigate = useNavigate()

    return(

        <>
            <div className="crew-1 d-flex gap-5 pt-5 align-items-center">
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

                <div className="tech-texts w-75">
                    <h6>THE TERMINOLOGY...</h6>
                    <h3>SPACEPORT</h3>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
            </div>

            <div className="crew-2 d-flex align-items-end justify-content-center">
                <img className="vehicule" src={spaceport} alt="" />
            </div>
        </>
    )
}