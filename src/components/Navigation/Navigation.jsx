import { Link } from "react-router-dom";
import './Navigation.css'

const NavBar=()=>{

    return <>

    <nav>
        <ul>
            <li>
                <Link to='/'> HOME </Link>
            </li>
            <li>
                <Link to='/find-events'> FIND EVENTS </Link>
            </li>
        </ul>
    </nav>
    
    </>
}

export default NavBar;