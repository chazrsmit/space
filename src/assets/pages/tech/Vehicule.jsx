import { NavLink, useNavigate } from 'react-router-dom'
import './tech.css'
import vehicule from "../../../../templates/assets/technology/image-launch-vehicle-portrait.jpg"

export default function Vehicule() {

    let navigate = useNavigate()

    return(

        <>
            <div className=" crew-1 techh d-flex gap-5 align-items-center">
                <div className="div-buttons d-flex flex-column gap-4">
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

                <div className="tech-texts  w-75">
                    <h6>THE TERMINOLOGY...</h6>
                    <h3>LAUNCH VEHICULE</h3>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>

            <div className=" crew-2 d-flex align-items-end justify-content-center">
                <img className="vehicule" src={vehicule} alt="" />
            </div>
        </>
    )
}