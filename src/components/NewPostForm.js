import React from "react";

export default function NewPostForm(){
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const [author, setAuthor]=useState('')

    function handleSubmit(e){
        e.preventDefault()

        const newObj ={
            "Title":title,
            "Content":content,
            "Author": author
        }
        fetch('http://localhost:4000/posts',{
            method:"POST",
            headers:{'Context-Type':"application/json"},
            body: JSON.stringify(newObj),


        })
        .then((response)=> response.json())
        .then ((newData)=> onHandleAddPost(newData))

    }


    return (
        <div>

        </div>
    )
}
