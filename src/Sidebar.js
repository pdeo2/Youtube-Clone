import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const isMenuOpen1=useSelector((store)=>store.app.isMenuOpen)
  return !isMenuOpen1?null:(
    <div className='p-5 shadow-lg w-56'>
      <div>
       <ul>
       <Link to='/'>
        <h1 className=' m-[0.8rem] hover:bg-gray-400'>🏠Home</h1>
       </Link>
        <li className='flex items-center m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-shorts-icon-png.png' alt='home'/><span>Shorts</span></li>
        <li className='flex items-center  m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png' alt='Subs'/>Subscriptions</li>
      
        </ul>
        </div>
      <h1 className='font-bold border-b-4 w-44'></h1>
     
      <ul>
        <li className='flex items-center  m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png' alt='lib'/> Library</li>
        <li className='flex items-center  m-[0.8rem]'> <img className='h-4 mr-[1rem]' src='https://w7.pngwing.com/pngs/988/206/png-transparent-computer-icons-history-icon-design-time-angle-text-logo-thumbnail.png' alt='hist'/>History</li>
        <li className='flex items-center  m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://icon-library.com/images/youtube-video-icon/youtube-video-icon-17.jpg' alt='liked'/>Your videos</li>
        <li className='flex items-center  m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-watch-later_90421.png'/>watch Later</li>
        <li className='flex items-center  m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://w7.pngwing.com/pngs/976/86/png-transparent-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle-thumb-signal-thumbnail.png'/>liked videos</li>
      </ul>
      
      <h1 className='font-bold border-b-4 w-44'></h1>
      <ul>
        <li className='flex items-center  m-[0.8rem]' >take u Forward</li>
        <li className='flex items-center  m-[0.8rem]'>Coding Ninja</li>
        <li className='flex items-center  m-[0.8rem]'>Parikh Jain</li>
        <li className='flex items-center  m-[0.8rem]'>Youtube Kids</li>
      </ul>
      <h1 className='font-bold border-b-4 w-44'></h1>
      <h1>Explore</h1>
      <ul>
        <li className='flex items-center  m-[0.8rem]'>Trending</li>
        <li className='flex items-center  m-[0.8rem]'>Shopping</li>
        <li className='flex items-center  m-[0.8rem]'>Music</li>
        <li className='flex items-center  m-[0.8rem]'>Films</li>
        <li className='flex items-center  m-[0.8rem]'>Live</li>
        <li className='flex items-center  m-[0.8rem]'> Gaming</li>
        <li className='flex items-center  m-[0.8rem]'>News</li>
        <li className='flex items-center  m-[0.8rem]'>Sport</li>
      </ul>
      <h1 className='font-bold border-b-4 w-44'></h1>
      <h1>More from Youtube</h1>
      <ul>
        <li className='flex items-center  m-[0.8rem] whitespace-nowrap'><img className=' h-4 mr-[1rem]' src='https://logowik.com/content/uploads/images/youtube-premium8029.logowik.com.webp'/>YouTube Premium</li>
        <li className='flex items-center  m-[0.8rem] whitespace-nowrap'><img className='h-4 mr-[1rem]' src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_studio_icon_138004.png'/>YouTube Studio</li>
        <li className='flex items-center  m-[0.8rem]' ><img className='h-4 mr-[1rem]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png'/>YouTube Music</li>
        <li className='flex items-center  m-[0.8rem]'><img className='h-4 mr-[1rem]' src='https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc'/>YouTube Kids</li>
      </ul>
    </div>
  )
}

export default Sidebar