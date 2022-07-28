import React from "react"
import { Link} from "react-router-dom"

function Navbar(){
    return(
        <div style={{padding: 30+"px"}}>

            <ul class="nav nav-pills" style={{marginTop:20 +"px", marginLeft:1.6 + "em"}}>
            <li class="nav-item">
                <Link to="/" exact class="nav-link active" aria-current="page" href="#">HomePage</Link>
            </li>
            <li class="nav-item">
                <Link  to="/publish" exact class="nav-link" href="#">Publish</Link>
            </li>
            <li class="nav-item">
                <Link  to="/login" class="nav-link" href="#">Login</Link>
            </li>
            
            </ul>
            
            

        </div>
    )
}
export default Navbar;