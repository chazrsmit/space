import Nav from '../../components/nav/Nav'
import './home.css'

export default function Home() {


    return(

        <>
        <div className="home">

                <Nav />
                
                <div className="home-content d-flex container flex-column flex-md-row px-5">
                    <div className="home-1 d-flex flex-column gap-3 justify-content-center">
                        <div>
                            <p className="p1">SO YOU WANT TO TRAVEL TO</p>
                        </div>
                        <div>
                            <h1>SPACE</h1>
                        </div>
                        <div>
                            <p className="w-75">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                    </div>
                    <div className="home-2  d-flex justify-content-end align-items-center">
                        <div className="explore">
                            <h2>EXPLORE</h2>
                        </div>
                    </div>
                </div>

        </div>
        
        </>
    )
}