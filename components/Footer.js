import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' bg-black text-white flex items-center justify-center px-4 h-12'>
        <p>Copyright &copy; {currentYear} SupportSphere - All rights reserved</p>
    </footer>
  )
}

export default Footer
