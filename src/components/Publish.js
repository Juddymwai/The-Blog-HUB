import React, {useState} from "react";
import NewPostForm from "./NewPostForm";


function Publish(){

    const [newBlogPost, setNewBlogPost]=useState([])


    function handleAddPost(newData){

        setNewBlogPost([...newBlogPost, newData])

        
    }
    return (
        <div >
            
            <NewPostForm onHandleAddPost={handleAddPost}/>
        </div>

    )
}

export default Publish;