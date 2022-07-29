import React from "react"
// import {Link} from "react-router-dom"

function Login (){
    function handleAlert(e){
        e.preventDefault()
        alert("Welcome Back!")
        
    }
    return (
        <div style={{margin:"auto", width:'60%' , marginTop: 50 +"px", height: 100+"vh"}}>
            <h2 style={{textAlign:"center"}}>Login Page</h2>
            <form onSubmit={handleAlert}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                {/* <Link to="/publish"> */}
                    <input type="submit" value="Submit"  required/>
                     {/* </Link> */}
            </form>
        </div>
        
       
        
    )
}

export default Login;