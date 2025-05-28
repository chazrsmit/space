import { NavLink } from 'react-router-dom'
import './planet.css'
import moon from "../../../../public/img/moon.png"


export default function Moon() {


    return(

        <>
            <div className="dest-1 ">
                <img src={moon} alt="" />
            </div>

            <div className="dest-2 ">
                {/* Links */}
                <div className="d-flex gap-5">
                    <div>
                        <NavLink to="/destination/moon">
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
                <h2>Moon</h2>
                </div>
                {/* Description planète */}
                <div>
                    <p>
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                </div>
                {/* Travel time */}
                <div>
                    <p>
                        Estimated travel time :
                    </p>
                    <p>
                        3 days.
                    </p>
                </div>
            </div>
        </>
    )
}