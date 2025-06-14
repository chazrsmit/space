import { NavLink } from 'react-router-dom'
import './planet.css'
import titan from "../../../../public/img/titan.png"


export default function Titan() {

    return(

        <>
            <div className="dest-1">
                <img src={titan} alt="" />
            </div>

            <div className="dest-2 ">
                {/* Links */}
                <div className="d-flex linksss">
                    <div>
                        <NavLink to="/destination/moon"
                        className={({ isActive }) =>
                            isActive || location.pathname === "/destination" ? "active" : ""
                        }
                        >
                            <div className="div-planets">
                                MOON
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/destination/mars">
                            <div className="div-planets">
                                MARS
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/destination/europa">
                            <div className="div-planets">
                                EUROPA
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/destination/titan">
                            <div className="div-planets">
                                TITAN
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Nom planète */}
                <div>
                    <h2 className="my-3">Titan</h2>
                </div>
                {/* Description planète */}
                <div className="desc">
                    <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                </div>
                {/* Travel time */}
                <div className="travel border border-secondary border-bottom-0 border-start-0 border-end-0 mt-5 pt-3">
                    <p>Est. travel time:</p>
                    <p>3 months</p>
                </div>
            </div>
        </>
    )
}