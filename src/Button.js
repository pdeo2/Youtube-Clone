import React from 'react'

const Button = ({name}) => {
  return (
    <div>
   <button className='bg-gray-200 m-3 px-5 py-2 rounded-xl  hover:bg-gray-500'>{name}</button>
    </div>
  )
}

export default Button