import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Logo from '../components/Logo'
import { Typewriter } from 'react-simple-typewriter'

const Register = () => {
    const words = ['Welcome!', 'Create an account', 'Building connections, unlocking potential.']
    return (
        <div className="w-full h-fit flex items-center justify-center">
            <div className="dark:bg-black/20 shadow-lg py-8 w-[90%] lg:w-[60%] h-fit my-8 rounded-2xl flex flex-col items-center justify-center">
            <Logo/>
                <p className="text-2xl lg:text-4xl font-bold text-center text-white mb-10">
                    <Typewriter
                        words={words}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
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