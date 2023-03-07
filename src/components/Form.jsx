import React from 'react'

const Form = ({login}) => {
    return (
        !login ? (<form className="flex flex-wrap items-center justify-center w-[80%]">
            <input type="text" placeholder="Username" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input type="password" placeholder="Confirm Password" className="input" />
            <button className="button">Register</button>
        </form>) : (
            <form className="flex flex-wrap items-center justify-center w-[80%]">
            <input type="text" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="button">Login</button>
        </form>
        )
    )
        }

export default Form;