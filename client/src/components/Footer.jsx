import React from 'react'

function Footer() {
  return (
    <footer className="p-4 text-black dark:text-white bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Luxe . All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer