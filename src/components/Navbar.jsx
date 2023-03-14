import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    // get user from context local storage
    const { user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const [dropdown, setDropdown] = React.useState(false)
    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    const logOut = () => {
        // remove user from local storage
        dispatch({ type: "LOGOUT" })
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        // navbar dark themed using tailwindcss
        <nav className="bg-gray-800 sticky top-0 z-10 dark:bg-black">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center space-x-10 justify-center sm:items-stretch sm:justify-start">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <p className="text-2xl lg:text-4xl font-extrabold text-white">
                                Campus<span className="text-blue-500">Crowd</span>
                            </p>
                        </Link>
                        <div className="hidden sm:block sm:ml-6 w-[80%] rounded-lg bg-zinc-900 outline-none ring-1 focus:ring-blue-500 transition-all duration-200 ease-out ">
                            {/* search box */}
                            <div className="flex  w-full ">
                                <input type="text" className=" bg-transparent w-full px-5 py-2 text-white font-extrabold text-xl outline-none" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <div className="ml-3 relative">
                            <div className="flex space-x-5">
                                {
                                    user ? (
                                        <>
                                            <div onClick={
                                                handleDropdown
                                            } to="/profile" type="button" className="bg-gray-800 cursor-pointer flex p-3 text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                                <span className="sr-only">Open user menu</span>
                                                <img src={user?.data?.user?.profilePicture} className="h-8 w-8 rounded-full" alt="" />
                                                <p className="text-white font-bold text-lg ml-2 bg-transparent">{user.data.user.username}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <Link to="/login" className='bg-gradient-to-r from-blue-600 to-fuchsia-500 p-1 px-6 py-2 rounded-md text-white hover:scale-105 duration-200 hover:opacity-80'>
                                            Login
                                        </Link>
                                    )
                                }
 

                            </div>
                            <div className={
                                dropdown ? "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"
                            } aria-labelledby="user-menu">
                                <Link to={`/profile/${user?.data?.user._id}`} className="block hover:text-blue-500 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <p onClick={
                                    () => logOut()
                                } className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar