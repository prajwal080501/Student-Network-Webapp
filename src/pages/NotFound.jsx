import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    // modern looking 404 page using tailwindcss
    <div className="flex flex-col items-center justify-center h-screen">
      <p className=" font-bold mb-14 dark:text-white text-9xl animate-bounce">🥺</p>
        <h1 className="text-9xl font-bold dark:text-white">404</h1>
        <h2 className="text-6xl font-bold mb-14 dark:text-white">Page Not Found</h2>
        <Link to="/" className="px-6 py-3 bg-gray-800 hover:scale-110 duration-200 ease-out active:scale-95 shadow-lg active:shadow-md text-white rounded-full text-2xl hover:bg-gray-700 transition">Go Back Home</Link>
    </div>
  )
}

export default NotFound