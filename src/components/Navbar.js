import React from "react"
import { Link} from "react-router-dom"

function Navbar(){
    return(
        <div>
            {/* <li><NavLink to="/" exact>HomePage</NavLink></li>
            <li><NavLink to="/about" exact>About Us</NavLink></li>
            <li><NavLink to="/login" exact>Login</NavLink></li> */}
            <ul class="nav nav-pills" style={{marginTop:20 +"px", marginLeft:1.6 + "em"}}>
            <li class="nav-item">
                <Link to="/" exact class="nav-link active" aria-current="page" href="#">HomePage</Link>
            </li>
            <li class="nav-item">
                <Link  to="/about" exact class="nav-link" href="#">About Us</Link>
            </li>
            <li class="nav-item">
                <Link  to="/login" class="nav-link" href="#">Login</Link>
            </li>
            
            </ul>
            
            

        </div>
    )
}
export default Navbar;