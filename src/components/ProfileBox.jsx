import React from 'react'

const ProfileBox = () => {
    return (
        // profile box like linkedin using tailwind

        <div className="bg-black/40 w-[90%] rounded-lg h-fit">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="w-32 h-32 rounded-full shadow-md cursor-pointer border-4 border-fuchsia-500" alt="profile" />
                </div>
                <h1 className="text-2xl font-bold text-white mt-5">John Doe</h1>
                <p className="text-gray-300 text-sm">
                    Master's of Science (Computer Science)
                </p>
                <div className="p-4 bg-black/40 rounded-lg">
                    <p className="text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae sequi esse magnam explicabo incidunt dignissimos ipsum eaque doloremque quam?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileBox