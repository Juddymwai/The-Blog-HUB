import React, {useState} from "react";
// import {Link} from "react-router-dom"


function NewPostForm({onHandleAddPost}){
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const [author, setAuthor]=useState('')

    function handleSubmit(e){
        e.preventDefault()

        const newObj = {
            "Title":title,
            "Content":content,
            "Author": author
        }
        fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newObj)

        })
        .then((resp) => resp.json())
        .then((newBlog) => onHandleAddPost(newBlog))
        

    }
   


    return (
        <div style={{margin: 50+ "px"}}>
            <h1 style={{textAlign:"center", marginTop: 50 +"px"}}>Create A New Post</h1>

            <form class="mb-3" onSubmit={handleSubmit}>

                <div>

                    <label for="exampleFormControlInput1" class="form-label">Title:      </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div class="mb-3">
                    <label  for="exampleFormControlTextarea1" class="form-label">Content: </label>
                    <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setContent(e.target.value)}/>
                </div>

                <div class="mb-3">
                    <label >Author: </label>

                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Author"  onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
           
               <button type="submit">Submit New Post</button>
       

            </form> 
        </div>
       
    )
}
export default NewPostForm;
