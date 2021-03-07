import React, { useEffect, useState } from 'react'
import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

const PostView=()=>{
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4002/posts')
        .then(res=>res.json())
        .then(res=> setPost(res))


    },[]);
    const renderList= Object.values(post).map(item=>{
        return(
            <div className="card"
            style={{width:'30%', marginBottom:'20px'}}
            key={item.id}
            >
                <div className="card-body">
                     <h3>{item.title}</h3>
                     <CommentsList comments={item.comments} />
                     <CommentCreate postId={item.id} />
                </div>
                
            </div>
        )
    })
    return(
        <div className="d-flex flex-row flex-wrap justify-content-between">
 
            {renderList}
            
        </div>
    );
}
export default PostView;