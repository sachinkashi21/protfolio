import React from 'react'
import AvtImg from '../assets/sachinAH.png'
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"



export default function Navbar({isDraweropen,toggleDrawer}) {
   const navigate=useNavigate();

   return (<>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
               <div className="flex items-center justify-start rtl:justify-end">
                  <button data-drawer-target="logo-sidebar" 
                     onClick={toggleDrawer}
                     type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  >
                     <span className="sr-only">Open sidebar</span>
                     <i className="fa-solid fa-bars w-8" aria-hidden="true"></i>
                  </button>
                  <div onClick={()=>navigate("/dashboard")} className="flex ms-2 md:me-24">
                     <img src={logo} className="h-12 me-3" alt="Sachin Logo" />
                     <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Sachin A</span>
                  </div>
               </div>

               <div className="flex items-center">

                  <div className="flex items-center ms-3">
                     <div>
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                           <span className="sr-only">Open user menu</span>
                           <img className="w-12 -12 rounded-full" src={AvtImg} alt="user photo" />
                        </button>
                     </div>
                     <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                        <div className="px-4 py-3" role="none">
                           <p className="text-sm text-gray-900 dark:text-white" role="none">
                              Sachin A
                           </p>
                           <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                              sachinkashi21@gmail.com
                           </p>
                        </div>
                        <ul className="py-1" role="none">
                           <li>
                              <div onClick={()=>navigate("/dashboard")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</div>
                           </li>
                           <li>
                              <div onClick={()=>navigate("/dashboard")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</div>
                           </li>
                           <li>
                              <div onClick={()=>navigate("/dashboard")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</div>
                           </li>
                           <li>
                              <div onClick={()=>navigate("/dashboard")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</div>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <ThemeToggle></ThemeToggle>

               </div>
            </div>
         </div>
      </nav>

      <div className='w-full h-24'>
      </div>
   </>
   );
}

