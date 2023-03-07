import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Logo from '../components/Logo'

const Register = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="dark:bg-black/20 shadow-lg py-8 w-[90%] lg:w-[60%] h-fit rounded-2xl flex flex-col items-center justify-center">
            <Logo/>
                <h1 className="text-4xl font-bold text-white mb-10">Register</h1>
                <Form/>
                {/* privacy message */}
                <p className="text-white bg-black/30 text-center p-4 rounded-lg w-fit mb-5 text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600 duration-200 cursor-pointer font-bold">Login</Link></p>

                <p className="text-white mb-5 text-sm mt-4">By continuing, you agree to our <span className="text-blue-500 font-bold">User Agreement</span> and <span className="text-blue-500 font-bold">Privacy Policy</span>.</p>

            </div>
        </div>
    )
}

export default Register