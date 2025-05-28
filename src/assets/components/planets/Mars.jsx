import { NavLink } from 'react-router-dom'
import './planet.css'
import mars from "../../../../public/img/mars.png"


export default function Mars () {

    return(

        <>
            <div className="dest-1 ">
                <img src={mars} alt="" />
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
                    <h2>Mars</h2>
                </div>
                {/* Description planète */}
                <div>
                    <p>
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                    </p>
                </div>
                {/* Travel time */}
                <div>
                    <p>
                        Estimated travel time:
                    </p>
                    <p>
                        9 months.
                    </p>
                </div>
            </div>
        </>
    )
}