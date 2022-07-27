import React, {useState, useEffect}from "react";
import NewPostForm from "./NewPostForm"


function HomePage(){
    const [blogPost, setBlogPost]=useState([]);
    // const [newBlogPost, setNewBlogPost]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/posts')
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [])

    function handleAddPost(newData){
        setBlogPost([...blogPost, newData])

        
    }
    
    

    return (
     <div>
        <h1>Blogs </h1>
        {blogPost.map((post) => {
            return (
               
                <div class="card text-center"  key={post.id}>
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">{post.Title}</h5>
                  <p class="card-text">{post.Content}</p>
                  <h4 class="btn btn-primary">By {post.Author}</h4>
                </div>
                <div class="card-footer text-muted">
                  2 days ago
                </div>
              </div>
              
              
            )
        })}
        <NewPostForm onHandleAddPost={handleAddPost}/>
        
     </div>

    )
}

export default HomePage;