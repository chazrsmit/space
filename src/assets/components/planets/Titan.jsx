import { NavLink } from 'react-router-dom'
import './planet.css'
import titan from "../../../../public/img/titan.png"


export default function Titan() {

    return(

        <>
            <div className="dest-1 ">
                <img src={titan} alt="" />
            </div>

            <div className="dest-2 ">
                {/* Links */}
                <div className="d-flex gap-5">
                    <div>
                        <NavLink to="/destination/moon"
                        className={({ isActive }) =>
                            isActive || location.pathname === "/destination" ? "active" : ""
                        }
                        >
                            <div>
                                MOON
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/destination/mars">
                            <div>
                                MARS
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/destination/europa">
                            <div>
                                EUROPA
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/destination/titan">
                            <div>
                                TITAN
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Nom planète */}
                <div>
                    <h2>Titan</h2>
                </div>
                {/* Description planète */}
                <div>
                    <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                </div>
                {/* Travel time */}
                <div>
                    <p>Estimated travel time:</p>
                    <p>3 years.</p>
                </div>
            </div>
        </>
    )
}