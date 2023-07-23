import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import { closeMenu } from './appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import SideVideo from './SideVideo';
import CommentSection from './CommentSection';
import compactFormat from 'cldr-compact-number';
const WatchPage = () => {
  const dispatch=useDispatch();
  const [searchParams]=useSearchParams();

  const [VideoDetail,setVideoDetail]=useState(null)
   
 // console.log(searchParams.get("v"))
  useEffect(()=>{
dispatch(closeMenu());
  },[])

  const fetchVideoDetails=async()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=AIzaSyBuIBtv22aRT63ShwImyrD_6LPjLcAiWOc`)
    const json = await data.json()
    //console.log( "json data",json)
    setVideoDetail(json?.items[0])
     }
 
     useEffect(()=>{
      fetchVideoDetails()
      },searchParams.get("v"))

      const compactV=compactFormat(VideoDetail?.statistics.viewCount, 'en')

  return (
    <>
    <div className='flex flex-col'>
    <div className='m-6 p-6 mt-[-0.9rem]'>
      <iframe
       width="910"
       height="490" 
       src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
       title="परदे के पीछे - Will Sharks Invest In Aman&#39;s Investment? | Wicked Gud | Shark Tank India S2 l Pitches" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen></iframe>
    </div>
   
    <div className=''>
    {console.log(VideoDetail)}
   <h1 className='px-1 m-1 text-lg ml-12 mt-[-2rem]'>{VideoDetail?.snippet?.title}</h1>
    <div className='flex justify-evenly items-start ml-[-7]'>
      <div className='flex mr-[19rem]'>
      <img className='w-12 mr-2 rounded-full' src='https://pbs.twimg.com/profile_images/1588253271797514245/LFh7bt3u_400x400.jpg' alt='channelLogo'/>
      <span className=''><h1 className='font-medium'>{VideoDetail?.snippet?.channelTitle}</h1>{compactV} Subscribers</span>  
      <button className='bg-black  text-white rounded-full w-[5.5rem] h-[2.1rem]  ml-8'>Subscribe</button>
      </div>
      <div className='inline-flex'>
      <button  className='bg-slate-200 rounded-full w-[5.5rem] h-[2.1rem]'>Like</button>
      <button  className='bg-slate-200 rounded-full  w-[5.5rem] h-[2.1rem] ml-[]'>Share</button>
      <button className='bg-slate-200 rounded-full  w-[5.5rem] h-[2.1rem]'>Download</button>
     </div>       
      </div> 
     
     </div>

     <CommentSection/> 

    </div>
    <div>
    <SideVideo/>
    </div>
    </>
  )
}

export default WatchPage