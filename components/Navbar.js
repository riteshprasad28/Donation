"use client";

import React, { useState, useEffect, useRef } from 'react' // 1. Import hooks
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);

  // 2. Create a reference for the dropdown container
  const dropdownRef = useRef(null);

  // 3. Effect to detect clicks outside the component
  useEffect(() => {
    function handleClickOutside(event) {
      // If the dropdown is open AND the click is NOT inside the dropdownRef
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className='bg-gray-900 shadow-lg shadow-white text-white flex justify-between px-4 md:h-15 items-center flex-col md:flex-row'>
      
      <Link href={"/"} className="logo font-semibold text-lg flex justify-center items-center ">
        <img className='invertImg' src="tea.gif" alt="" width={44} />
        <span className='text-lg md:base my-3 md:my-0'>𝐂𝐡𝐚𝐢𝐒𝐞𝐯𝐚</span>
      </Link>

      {/* 4. Attach the ref to the parent container of the button and the menu */}
      <div className='relative flex flex-col md:block gap-3 mb-1.5 md:mb-0' ref={dropdownRef}>
        {session && <>
          <button
            onClick={() => { setShowdropdown(!showdropdown) }}
            // Removed onBlur entirely
            className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 box-border dark:focus:ring-blue-800 dark:bg-blue-600 border border-transparent hover:bg-blue-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-xs px-2 py-1.5 md:text-sm md:px-4 md:py-2.5 focus:outline-none"
            type="button"
          >
            Welcome {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          {/* Dropdown menu */}
          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link
                  href="/dashboard"
                  onClick={() => setShowdropdown(false)} // Close when link is clicked
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={`/${session.user.name}`}
                  onClick={() => setShowdropdown(false)} // Close when link is clicked
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Your Page
                </Link>
              </li>
              <li>
                {/* Used a div/button for signout action */}
                <button
                  onClick={() => { signOut(); setShowdropdown(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </>}

        {session &&
          <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs px-2 py-1.5 md:text-sm md:px-5 md:py-2.5 text-center leading-5 me-2 ml-2" onClick={() => { signOut() }}>LogOut</button>
        }

        {!session &&
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  text-sm px-5 py-2.5  text-center leading-5 me-2">Login</button>
          </Link>
        }
      </div>

    </nav>
  )
}

export default Navbar  