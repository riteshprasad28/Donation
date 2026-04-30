import React from 'react'

const Footer = () => {
 const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className='bg-gray-900 text-white text-sm md:text-base  text-center flex justify-center px-4 h-15 items-center'>
        <p>Copyright &copy; {currentYear} Get me a chai - All rights reserved!</p>
      </footer>
    </div>
  )
}

export default Footer

