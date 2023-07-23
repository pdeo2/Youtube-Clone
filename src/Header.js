import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './appSlice';
import { toggleNotification } from './appSlice2';
import { Link } from 'react-router-dom';
import { youtubeSearch } from './constant';

const Header = () => {
  const [searchQuery,setSearchQuery]=useState([]);
  const [suggestion,setSuggestion]=useState([]);
  const [suggest,showSuggest]=useState(false);
  console.log(searchQuery);

  useEffect(()=>{
  const timer=setTimeout(()=>getSearchSuggest(),200);
  return ()=>{
    clearTimeout(timer)
  }


  },[searchQuery])

  const getSearchSuggest=async ()=>{
    const data=await fetch(youtubeSearch+searchQuery);
    const json=await data.json();
    setSuggestion(json[1]);
  }

  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

  const toggleHandler=()=>{
    dispatch(toggleNotification());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
    <div className='flex col-span-1'>
    <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' alt='sidebar' src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg'/>
   <a href='/'><img className='h-9 mx-6' alt='youtube' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'/></a>
    </div>
    <div className='col-span-10 text-center'>
    <input className='w-1/2 rounded-l-full  border border-gray-300 p-1 pl-4' type='text' value={searchQuery} 
    onChange={(e)=>setSearchQuery(e.target.value)}
    onFocus={()=>showSuggest(true)}
    onBlur={()=>showSuggest(false)}
    />
    <button className='cursor:pointer rounded-r-full border border-b-slate-600 p-1 bg-slate-300'>Search</button>
   { suggest && <div className='fixed ml-64 bg-white x-4 w-[34rem] text-left shadow-lg rounded-lg'>
      <ul>
        {suggestion.map(sug=>( <li key={sug} className='hover:bg-slate-400 shadow-sm py-2 px-2'>💖{sug}</li>))}
      </ul>

    </div>}
    </div>
    
    <div className='col-span-1 flex'>
    <img  onClick={()=>toggleHandler()} className='h-9 cursor-pointer' src='https://static.vecteezy.com/system/resources/thumbnails/010/366/166/small/bell-icon-transparent-notification-free-png.png'/>
  
      <img className='h-9' alt='user' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'/>
      
    </div>
    </div>
  )
}

export default Header