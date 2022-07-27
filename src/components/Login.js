import React from "react"

function Login (){
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />

                </div>
                <div>
                    <input type="submit" value="Submit" />

                </div>

                
                
            </form>
            
            

        </div>
    )
}

export default Login;