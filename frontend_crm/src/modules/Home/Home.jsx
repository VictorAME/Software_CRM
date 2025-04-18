import React from "react";
import {Link} from "react-router-dom"

function Home() {
    return(
        <>
            <div>
                <header>
                    <h1>Welcome to me CRM</h1>
                </header>
            </div>

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/signup'}>Sign up</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="div-body-home">

            </div>
        </>
    );
}

export default Home;