import React, {useState, useEffect}from "react";



function HomePage(){
    const [blogPost, setBlogPost]=useState([]);
    

    useEffect(()=>{
        fetch('https://cliff-cookie-bandicoot.glitch.me/posts')
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [])

    
    

    return (
     <div style={{margin:"auto", width:'60%', marginTop: 50 +"px", marginBottom: 30+ "px"}}>
        <h3 style={{textAlign:'center'}}>Read Blogs From Various Developers</h3>
        <div style={{overflow:'scroll', height: 700+ "px"}}>
            {blogPost.map((post) => {
            return (
               
                <div style={{marginBottom: 20+"px"}} class="card text-center"  key={post.id}>
                <div class="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.Title}</h5>
                  <p className="card-text">{post.Content}</p>
                  <h4 className="btn btn-primary">By {post.Author}</h4>
                </div>
                <div class="card-footer text-muted">
                  2 days ago
                </div>
              </div>
              
              
            )
        })}
        </div>

        {/* <NewPostForm onHandleAddPost={handleAddPost}/> */}
        
     </div>

    )
}

export default HomePage;