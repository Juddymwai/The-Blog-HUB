import React from "react"
import {Link} from "react-router-dom"

function Login (){
    return (
        <div>
            <h2>Login Form</h2>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />

                </div>
                <div>
                    <Link to="/"><input type="submit" value="Submit"/> </Link>

                </div>
                
            </form>
            
            

        </div>
    )
}

export default Login;