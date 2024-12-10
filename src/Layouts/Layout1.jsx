import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Speeddial from '../components/Speeddial'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';

import ScrollToTop from '../components/ScrollToTop'

const Layout1 = () => {
  const [isDrawerOpen, SetIsDrawerOpen] = useState(true);

  useEffect(()=>{
    if(window.matchMedia('(max-width: 640px)').matches){
      SetIsDrawerOpen(false);
    }
  },[])

  let openDrawer = () => {
    SetIsDrawerOpen(true);
  }

  let closeDrawer=()=>{
    if(window.matchMedia('(max-width: 640px)').matches){
      SetIsDrawerOpen(false);
    }
  }
  
  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} toggleDrawer={openDrawer}></Navbar>
      <Sidebar isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}></Sidebar>
      <div className="p-4 sm:ml-64 bg-gray-100 dark:bg-gray-900" 
        onClick={closeDrawer}
        >
        <ScrollToTop/>
        <div
          style={{
            opacity:
              window.matchMedia('(max-width: 640px)').matches && isDrawerOpen // Small screen check
                ? 0.25
                : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <Outlet />
          <Speeddial style={{ zIndex: 10 }} />
          <Footer className="dark:bg-gray-800" />
        </div>
      </div>
    </>

  )
}

export default Layout1