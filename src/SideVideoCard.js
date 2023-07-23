import React, { useState } from 'react'
import compactFormat from 'cldr-compact-number';
import { useEffect } from 'react';
import monthDays from 'month-days';
const SideVideoCard = ({info}) => {
   // console.log(info)
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;
    const compactV=compactFormat(statistics.viewCount, 'en')
    const [uploadDate,setUploadDate]=useState(null);
    useEffect(()=>{
      uploadingTime();
    },[])

  const uploadingTime=(()=>{
    const date = new Date(publishedAt);
    const m=date.getMonth();
    const y=date.getFullYear();
    const d=date.getHours();
    setUploadDate(d); 
  })
 

  return (
    <div className='p-2 m-2 w-[31rem] shadow-lg   flex'>
        <img className='rounded-lg w-[17rem] h-40' src={thumbnails.medium.url} alt='thumb'/>
        <ul className='ml-4'>
           <li className='font-bold'>{title}</li> 
           <li>{channelTitle}✔️</li> 
           <li>{compactV} views</li> 
           <li>{uploadDate} hours ago</li>
        </ul>
    </div>
  )
}

export default SideVideoCard