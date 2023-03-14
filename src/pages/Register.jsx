import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { Typewriter } from 'react-simple-typewriter'
import axios from 'axios'
import { useRef } from 'react'
const Register = () => {
    const fullname = useRef()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const postPicture = useRef()
    const degree = useRef();
    const words = ['Welcome!', 'Create an account', 'Building connections, unlocking potential.']
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            fullname: fullname.current.value,
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            postPicture: postPicture.current.value,
            degree: degree.current.value
        }
        try {
            await axios.post('http://localhost:8000/api/auth/register', user)
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
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
                <h1 className="text-4xl font-bold text-white mb-10">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
                    <input name="fullname" ref={fullname} className="input" type="text" placeholder="Name" />
                    <input ref={username} className="input" type="text" placeholder="Username" />
                    <input ref={email} className="input" type="email" placeholder="Email" />
                    <input ref={password} className="input" type="password" placeholder="Password" />
                    <input ref={postPicture} className="input" type="file" placeholder="Profile Picture"
                        accept='image/*'
                    />
                    <select ref={degree} className="input">
                        <option value="MSC(CS)">MSC(CS)</option>
                        <option value="MSC(CA)">MSC(CA)</option>
                        <option value="BTech">BTech</option>
                    </select>
                    <button type="submit" className="button">Register</button>
                </form>
                {/* privacy message */}
                <p className="text-white bg-black/30 text-center p-4 rounded-lg w-fit mb-5 text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600 duration-200 cursor-pointer font-bold">Login</Link></p>

                <p className="text-white mb-5 text-sm mt-4">By continuing, you agree to our <span className="text-blue-500 font-bold">User Agreement</span> and <span className="text-blue-500 font-bold">Privacy Policy</span>.</p>

            </div>
        </div>
    )
}

export default Register