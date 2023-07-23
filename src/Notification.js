import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
       const isOpen=useSelector((store)=>store.not.isNotification)
      console.log(isOpen);
   return isOpen?null:(
     <div className='bg-gray-100 absolute w-[36rem] h-[33rem] left-[48rem] borde'> 
     <div className='flex justify-between border-b-2'>
      <span className='pt-[0.4rem] pl-[0.7rem] font-medium'>Notification</span>
      <img className='w-6 mr-[0.8rem]' src='https://archive.ulpan.com/wp-content/uploads/2020/05/settings-vector-setting-youtube-10.png'/>
     
     </div>
     <div className='ml-44 mt-12 w-52 text-center'>
     <img src='https://static.vecteezy.com/system/resources/thumbnails/010/366/166/small/bell-icon-transparent-notification-free-png.png'/>
     <p>Your notifications live here <br></br>
      Subscribe to your favourite channels to receive notifications 
      about their latest videos.
      </p>
 </div>
    </div>
  
   )
}


export default Notification