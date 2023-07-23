import React, { useEffect, useState } from 'react'
import CommentSection from './CommentSection';
import Channeldatai from './Channeldatai';

const Comment = ({info}) => {
    console.log(info.snippet.title)
    //  const {snippet}=info;
    //  const {thumbnails,title}=snippet
//  console.log(channelDetails)
//   useEffect(()=>{
//   ChannelDetail()
//  },[])
 
//  const ChannelDetail=async ()=>{
//    const data=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&part=contentOwnerDetails&key=AIzaSyBuIBtv22aRT63ShwImyrD_6LPjLcAiWOc&id=${info?.snippet?.channelId}`)
//    const json=await data.json();
//   setChannelDetails(json?.items);
//    console.log(json.items)
//  }

  return (
    <div>
    <CommentSection/> 
     </div>
  )
}

export default Comment