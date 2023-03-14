import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Skills } from '../data'

const ProfileBox = ({ currentUser }) => {
    const user = useContext(AuthContext);
    return (
        <div className="sticky top-10 flex flex-col items-center overflow-y-scroll justify-center w-full lg:w-full lg:h-fit mb-5 mx-3 shadow-md mt-8 bg-black/80 p-5 rounded-lg">
            <div className="flex flex-col space-y-5 items-center  justify-center w-full h-[30%]">
                {/* edit profile button */}
                {currentUser._id === user.user.data.user._id && <div className="flex items-end justify-end w-full">
                    <Link to={`/edit/${currentUser._id}`} className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md">Edit Profile</Link>
                </div>}
                <div className="flex items-center justify-center">
                    <img src={
                        currentUser?.profilePicture
                    } className="w-32 h-32 rounded-full shadow-md cursor-pointer border-4 border-blue-600 drop-shadow-xl" alt="profile" />
                </div>

                <h1 className="text-white text-3xl font-semibold mt-3">{currentUser?.fullname}</h1>
                <div className="flex items-center justify-center">
                    {
                        user.user.data.user.followers.includes(currentUser?._id) ? (
                            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md">Unfollow</button>
                        ) : (
                            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md">Follow</button>
                        )
                    }
                </div>
                {
                    user.user.data.user.followings.includes(currentUser?._id) && (
                        <p className="text-blue-400 text-lg">Follows You</p>
                    )
                }
                <div className="flex items-center justify-between w-full h-[70%] mt-5">
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <h1 className="text-white text-3xl font-semibold">100</h1>
                        <p className="text-gray-400 text-lg">Posts</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <h1 className="text-white text-3xl font-semibold">{
                            currentUser?.followers?.length
                        }</h1>
                        <p className="text-gray-400 text-lg">Followers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <h1 className="text-white text-3xl font-semibold">{
                            currentUser?.followings?.length
                        }</h1>
                        <p className="text-gray-400 text-lg">Following</p>
                    </div>
                </div>
                <p className="text-blue-400 text-lg mt-1 bg-black/50 p-4 rounded-lg text-center">{currentUser.bio}</p>
            </div>


            {/* display city passing year, degree skills */}
            <div className="flex items-center justify-center w-full h-[20%] mt-5">
                <div className="flex items-center justify-center w-[30%]">
                    <p className="text-gray-400 text-lg">{currentUser?.passingYear}</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[30%]">
                    <p className="text-gray-400 text-lg">{
                        currentUser?.degree
                    }</p>
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

            </details>

        </div>
    )
}

export default ProfileBox