import React, {useState} from "react"
// import {Link} from "react-router-dom"

function Login ({LogIn}){

    const [input, setInput]=useState({
        email:"",
        password:""
    })


    function handleAlert(e){
        e.preventDefault()
        console.log("long")
        // alert("Welcome Back!")
        LogIn(input)


  
    }

    

    return (
        <div style={{margin:"auto", width:'60%' , marginTop: 50 +"px", height: 100+"vh"}}>
            <h2 style={{textAlign:"center"}}>Login Page</h2>
            <form onSubmit={handleAlert}>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email"  name="email" value={input.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setInput({...input, email: e.target.value})} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" name="password" value={input.password} class="form-control" id="exampleInputPassword1"  onChange= {(e) => setInput({...input, password: e.target.value})} required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                {/* <Link to="/publish"> */}
                    <input type="submit" value="Submit" />
                     {/* </Link> */}
            </form>
        </div>
        
       
        
    )
}

export default Login;