import { NavLink, useLocation } from 'react-router-dom'
import './planet.css'
import moon from "../../../../public/img/moon.png"


export default function Moon() {

const location = useLocation();

    return(

        <>
            <div className="dest-1">
                <img src={moon} alt="" />
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
                <div className="my-3">
                    <h2>Moon</h2>
                </div>
                {/* Description planète */}
                <div className="desc">
                    <p>
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                </div>
                {/* Travel time */}
                <div className="travel border border-secondary border-bottom-0 border-start-0 border-end-0 mt-5 pt-3">
                    <p>
                        Est. travel time :
                    </p>
                    <p>
                        3 days
                    </p>
                </div>
            </div>
        </>
    )
}