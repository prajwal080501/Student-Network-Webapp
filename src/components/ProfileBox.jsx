import React from 'react'
import { Skills } from '../data'

const ProfileBox = () => {
    return (
        <div className="sticky top-10 flex flex-col items-center justify-center w-full lg:w-fit lg:h-fit mb-5 mx-3 shadow-md mt-8 bg-black/80 p-5 rounded-lg">
            <div className="flex flex-col items-center overflow-y-scroll justify-center w-full h-[30%]">
                <div className="flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="w-32 h-32 rounded-full shadow-md cursor-pointer border-4 border-fuchsia-500" alt="profile" />
                </div>
                <h1 className="text-white text-3xl font-semibold mt-3">John Doe</h1>
                <p className="text-gray-400 text-lg mt-1 bg-black/50 p-4 rounded-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            {/* display city passing year, degree skills */}
            <div className="flex flex-wrap items-center justify-center w-full h-[20%] mt-5">
                <div className="flex items-center justify-center w-[30%]">
                    <p className="text-gray-400 text-lg">City</p>
                </div>
                <div className="flex items-center justify-center w-[30%]">
                    <p className="text-gray-400 text-lg">Passing Year</p>
                </div>
                <div className="flex items-center justify-center w-[30%]">
                    <p className="text-gray-400 text-lg">Degree</p>
                </div>
            </div>
            <details className="w-full h-fit mt-5 mb-5 overflow-y-scroll">
                <summary className="text-white w-full text-left text-lg font-semibold cursor-pointer">See More</summary>
                {/* display skills */}
                <div className="bg-black/70 w-full mt-5 p-4 rounded-lg grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
                    {
                        Skills.map((skill) => (
                            <div key={skill.id} className="flex flex-col h-fit w-fit items-center justify-center p-3">
                                <img src={skill.img} className="w-16 h-16" alt="skill" />
                                <p className="text-gray-400 text-lg">{skill.name}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center justify-between w-full h-[70%] mt-5">
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <h1 className="text-white text-3xl font-semibold">100</h1>
                        <p className="text-gray-400 text-lg">Posts</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <h1 className="text-white text-3xl font-semibold">100</h1>
                        <p className="text-gray-400 text-lg">Followers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <h1 className="text-white text-3xl font-semibold">100</h1>
                        <p className="text-gray-400 text-lg">Following</p>
                    </div>
                </div>
            </details>

        </div>
    )
}

export default ProfileBox