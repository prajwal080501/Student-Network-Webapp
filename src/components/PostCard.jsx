import React from 'react'
import {AiOutlineLike, AiOutlineComment} from 'react-icons/ai'
import {FiShare} from "react-icons/fi"

const PostCard = ({post}) => {
    return (
        //  post card using tailwind css
        <div className="bg-black/80 lg:w-[80%] mx-auto p-2 lg:p-4 rounded-lg">
            <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="profile" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                    <h1 className="text-white text-lg font-semibold">{post.username}</h1>
                    <p className="text-gray-400 text-sm">2 Hours ago</p>
                </div>

                <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
            <div className="mt-3 bg-white/5 rounded-lg p-2 lg:p-4">
                <p className="text-white text-lg font-semibold">{post?.content && post.content}</p>
                <img src={post.img} alt="post" className="w-full mt-3 rounded-lg" />
            </div>
            {/* like comment and share button */}
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-3">
                    <AiOutlineLike className="text-3xl text-gray-400 hover:text-blue-500 cursor-pointer" />
                   
                    <AiOutlineComment className="text-3xl text-gray-400 cursor-pointer hover:text-gray-200" />
                    <FiShare className="text-3xl text-gray-400 cursor-pointer hover:text-gray-200" />
                    </div>
                    </div>
        </div>
    )
}

export default PostCard