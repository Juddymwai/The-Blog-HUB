import React from "react"

function Navbar(){
    return(
        <div>
            <li><NavLink to="/" exact>HomePage</NavLink></li>
            {/* <li><NavLink to="/posts" exact>Posts</NavLink></li> */}
            <li><NavLink to="/login" exact>Login</NavLink></li>
            

        </div>
    )
}