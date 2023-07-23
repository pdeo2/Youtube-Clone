import React from 'react'
import Sidebar from './Sidebar'

import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Notification from './Notification'
const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Notification/>
        <Outlet/>
    </div>
  )
}

export default Body