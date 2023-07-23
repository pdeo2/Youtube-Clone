import React, { useEffect, useState } from 'react'
import compactFormat from 'cldr-compact-number';
const VideoCard = ({info}) => {
  console.log(info);
    const [uploadDate,setUploadDate]=useState(null);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;
   const compactV=compactFormat(statistics.viewCount, 'en')
    useEffect(()=>{
      uploadingTime();
    },[])

  const uploadingTime=(()=>{
    const date = new Date(publishedAt);
    const hours=date.getHours();
    const time=date.getMinutes()
    const month=date.getMonth();
    const year=date.getFullYear();
    console.log(year);
    setUploadDate(`${hours} hours ago`);
  })

  return (
    <div className='p-2 m-2 w-72 shadow-lg h-72 min-h-72 rounded-xl'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumb'/>
        <ul>
           <li className='font-bold'>{title}</li> 
           <li>{channelTitle}</li> 
           <li>{compactV} views ⌚{uploadDate}</li> 
        </ul>
    </div>
  )
}

export default VideoCard