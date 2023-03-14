import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { Typewriter } from 'react-simple-typewriter'

import { AuthContext } from '../context/AuthContext'
import { loginCall } from "../../src/utils/apiCalls.js"


const Register = () => {
    const words = ['Welcome!', 'Create an account', 'Building connections, unlocking potential.']
    const email = useRef()
    const password = useRef()
    const { isFetching, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        )
        navigate('/')
    }


    return (
        <div className="w-full h-fit flex items-center justify-center">
            <div className="dark:bg-black/20 shadow-lg py-8 w-[90%] lg:w-[60%] h-fit my-8 rounded-2xl flex flex-col items-center justify-center">
                <Logo />
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
                <h1 className="text-4xl font-bold text-white mb-10">Login</h1>
                <form onSubmit={onSubmit} className="flex flex-col items-center justify-center w-full">
                    <input ref={email} className="input" type="email" placeholder="Email" />
                    <input ref={password} className="input" type="password" placeholder="Password" />
                    <button type="submit" className="button">
                        {isFetching ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
                {/* privacy message */}
                <p className="text-white bg-black/30 text-center p-4 rounded-lg w-fit mb-5 text-sm mt-4">Already have an account? <Link to="/register" className="text-blue-500 hover:text-blue-600 duration-200 cursor-pointer font-bold">Register</Link></p>

                <p className="text-white mb-5 text-sm mt-4">By continuing, you agree to our <span className="text-blue-500 font-bold">User Agreement</span> and <span className="text-blue-500 font-bold">Privacy Policy</span>.</p>

            </div>
        </div>
    )
}

export default Register