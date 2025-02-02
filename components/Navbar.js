"use client"
import React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [showdropdown, setShowdropdown] = useState(false)
    return (
    <nav className="bg-black text-white flex justify-between items-center px-4 sm:h-14 flex-col sm:flex-row">
       <div >
        <Link className='logo font-bold text-xl' href={'/'}> 
        <span className="text-3xl sm:text-base my-5 sm:my-0">SupportSphere</span>
        </Link>
        </div>
        {/*<ul className='flex justify-between gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul>*/}
        <div className="relative flex flex-col sm:block gap-4">
          {session && 
          <>
          <button id="dropdownDefaultButton" onClick={()=> setShowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {setShowdropdown(false)}, 800)}} data-dropdown-toggle="dropdown" className="mx-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
          </button>
          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} mt-2 absolute left-[150px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href={'/dashboard'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link onClick={() => signOut()} href='#' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
          </div>
          </>}
          {session && 
        <button onClick={()=>{signOut()}} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden mr-4 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Logout
            </span>
          </button>}
          {!session && <Link href={'/login'}>
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden mr-4 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
          </button>
          </Link>}
        </div>
    </nav>
  )
}

export default Navbar
