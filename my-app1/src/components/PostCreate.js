import React, { useState } from 'react'
import axios from 'axios'
import { Button, Input, Form } from 'semantic-ui-react'
const PostCreate = () => {
    const [title,setTitle]=useState("");
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log("11")
        await axios.post('http://localhost:4000/posts',{
            title
        });
        console.log("22")
       setTitle('')
    }
    return (
        <div>
            <Form>
                <h1>Create Posts</h1>
                <input value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}
export default PostCreate