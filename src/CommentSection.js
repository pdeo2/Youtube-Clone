import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { youtubeComment } from './constant';
import CommentData from './CommentData';

const CommentSection = () => {
    const [searchParams]=useSearchParams();
    const [comment,setComment]=useState([]);
    //console.log(searchParams.get("v"));
     useEffect(()=>{
         getComment();
     },searchParams.get("v"))
     const getComment=async ()=>{
         const data=await fetch(youtubeComment+searchParams.get("v"));

         const json=await data.json();
         setComment(json.items)
       // console.log(json.items)
     }
  return (
    <div>
   { comment.map(reply=> <CommentData info={reply}/>)}
    </div>
  )
}

export default CommentSection;