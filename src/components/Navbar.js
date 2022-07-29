import React from "react"
import { Link} from "react-router-dom"

function Navbar(){
    return(
        <div style={{padding: 40+"px", marginLeft:100+ "px"}}>

            <ul class="nav nav-pills" style={{marginTop:20 +"px", marginLeft:1.6 + "em"}}>
            <li class="nav-item">
                <Link to="/" exact class="nav-link " aria-current="page" >HomePage</Link>
            </li>
            <li class="nav-item">
                <Link  to="/publish" exact class="nav-link">Publish</Link>
            </li>
            <li class="nav-item">
                <Link  to="/login" class="nav-link" >Login</Link>
            </li>
            
            </ul>
          


            
            

        </div>
    )
}
export default Navbar;