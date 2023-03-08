import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Logo from '../components/Logo'
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
const Login = () => {
    const words = ['Welcome Back!', 'Login to your account', 'Building connections, unlocking potential.']

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[100vh] flex items-center justify-center">
            <div className="dark:bg-black/40 shadow-lg py-8 w-[90%] lg:w-[60%] h-fit rounded-2xl flex flex-col items-center justify-center">
                <Logo />
                <h1 className="text-4xl font-bold text-white mb-10">
                    <Typewriter
                        words={words}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <Form login="login" />
                {/* register if no account */}
                <p className="text-white bg-black/30 text-center p-4 rounded-lg w-fit mb-5 text-sm mt-4">Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-600 duration-200 cursor-pointer font-bold">Register</Link></p>
                {/* privacy message */}
                <p className="text-white mb-5 text-sm mt-4">By continuing, you agree to our <span className="text-blue-500  font-bold">User Agreement</span> and <span className="text-blue-500 font-bold">Privacy Policy</span>.</p>
            </div>
        </motion.div>
    )
}

export default Login