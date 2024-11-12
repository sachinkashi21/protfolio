import React from 'react'
import Navbar from '../components/Navbar'
import Speeddial from '../components/Speeddial'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';

const Layout1 = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="p-4 sm:ml-64 bg-gray-100 dark:bg-gray-900 text-gray-200">
      <Outlet />
        <Speeddial style={{ zIndex: 100 }} />
        <Footer className="dark:bg-gray-800" />
      </div>
    </>
  )
}

export default Layout1