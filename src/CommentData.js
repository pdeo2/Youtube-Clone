import React from 'react'


const CommentData = ({info}) => {
    const {snippet}=info;
   const {topLevelComment}=snippet;
    const {authorChannelId,textDisplay,authorDisplayName,authorProfileImageUrl,likeCount,textOriginal}=topLevelComment?.snippet;
   // console.log(authorChannelId);
  return (
    
    <div className='flex m-5 p-5 shadow-md'>
        <img className='rounded-full h-20' src={authorProfileImageUrl} alt='channelIcon'/>
        <ul className='ml-6'>
            <li className='font-bold'>{authorDisplayName}</li>
            <li>{textOriginal}</li>
            <li className='flex mt-[0.8rem]'> <img className='h-4 mt-[0.2rem]' src='https://cdn.icon-icons.com/icons2/936/PNG/512/thumbs-up_icon-icons.com_73369.png' alt='like'/>
            <span className='ml-3'>{likeCount}</span> 
            <img className='h-4 ml-[1rem] mt-[0.2rem]' src='https://www.vhv.rs/dpng/d/405-4051098_black-and-white-youtube-dislike-png-icon-dislike.png' alt='disL'/>
             <span className='ml-[2rem] cursor-pointer'>Reply</span>
             </li>
          
        </ul>

    </div>
  )
}

export default CommentData