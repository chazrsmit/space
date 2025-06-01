import { NavLink } from 'react-router-dom'
import './planet.css'
import europa from "../../../../public/img/europa.png"

export default function Europa () {

    return(

        <>
            <div className="dest-1 ">
                <img src={europa} alt="" />
            </div>

            <div className="dest-2 ">
                {/* Links */}
                <div className="linksss d-flex">
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
                    <h2 className="my-3">Europa</h2>
                </div>
                {/* Description planète */}
                <div className="desc">
                    <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                </div>
                {/* Travel time */}
                <div className="travel border border-secondary border-bottom-0 border-start-0 border-end-0 mt-5 pt-3">
                    <p>Est. travel time:</p>
                    <p>3 years</p>
                </div>
            </div>
        </>
    )
}