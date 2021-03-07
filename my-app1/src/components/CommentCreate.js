import React, { useState } from "react";
import axios from 'axios'
    
export default ({postId})=>{
    const [content,setContent]=useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
       
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        });

        setContent('')
    }
  
    return(
        <div>
           <form onSubmit={handleSubmit} >
               <div className="form-group">
                   <label>New Comment</label>
                   <input className="form-control"
                        onChange={(e)=>setContent(e.target.value)}
                        value={content}
                   
                   />
               </div>
               <button className="btn btn-primary">Submit</button>
           </form>
        </div>
    );
}