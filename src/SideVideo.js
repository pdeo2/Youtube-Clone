import React, { useEffect } from 'react'
import { useState } from 'react'
import { youtubeApi } from './constant';
import SideVideoCard from './SideVideoCard';
import { Link } from 'react-router-dom';


const SideVideo = () => {
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideoContainers();
    },[])
    const getVideoContainers= async ()=>{
        const data=await fetch(youtubeApi);
        const json=await data.json();
        setVideos(json.items)
    }
  return (
    <div className='flex flex-col'>
 { videos.map(video=><Link to={"/watch?v="+video.id}><SideVideoCard key={video.id} info={video}/></Link>)}
    </div>
  )
}

export default SideVideo;