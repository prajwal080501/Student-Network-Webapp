import React from 'react'
import { AiOutlinePlusCircle, AiOutlineReload } from 'react-icons/ai'
import { motion } from "framer-motion"
import PostCard from './PostCard'
import { Posts } from '../data'

const Feed = ({ modal, handleModal, posts }) => {

    const refresh = () => {
        window.location.reload()
    }
    return (
        <div className="bg-black/40 rounded-lg lg:mx-5 w-full lg:w-[90%] h-fit">
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex sticky top-20 rounded-lg mx-auto mt-5  w-fit items-center">
                {/* add a blur div at background of this div */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-filter backdrop-blur-lg -z-10 rounded-lg"></div>
                <button onClick={handleModal} title="New Post" className="p-3 mx-3 rounded-full my-3 bg-gradient-to-r from-blue-500 to-fuchsia-600 hover:scale-110 duration-200 active:scale-95 text-3xl font-bold dark:text-white">
                    <AiOutlinePlusCircle className="text-3xl" />
                </button>
                <button onClick={refresh} title="Refresh" className="p-3 mx-3 rounded-full my-3 bg-green-500 hover:scale-110 duration-200 active:scale-95 text-3xl font-bold dark:text-white">
                    <AiOutlineReload className="text-3xl hover:animate-spin ease-linear duration-200" />
                </button>
            </motion.div>
            <div className="flex flex-col pb-5 space-y-5 w-[95%] mx-auto mt-5">
                {
                    posts?.map(post => (
                        <PostCard key={post._id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed;