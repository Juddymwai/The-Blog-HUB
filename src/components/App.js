import React from "react";



function App(){
    
  return(
      <Router>

          <div>

              <Navbar/>

          </div>
      
          <Routes>

              <Route exact path='/' element={<HomePage />}></Route>
              {/* <Route  exact path='/posts'>{Posts}</Route> */}
              <Route exact path='/login' element={<Login/> }></Route>
              
          </Routes>      
      </Router>



          
      

  )
}

export default App;