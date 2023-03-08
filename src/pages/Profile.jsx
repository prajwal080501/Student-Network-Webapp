import React from 'react'
import Feed from '../components/Feed'
import ProfileBox from '../components/ProfileBox'
import {motion} from "framer-motion";
const Profile = () => {
  return (
    // profile page using tailwind
    <div className="flex flex-col lg:flex-row">
        <motion.div 
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: -100, opacity: 0}}
        transition={{duration: 1}}
        className="w-full lg:sticky lg:top-10 lg:w-[30%] flex items-center h-fit p-3">
        <ProfileBox/>
        </motion.div>
        <motion.div
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 100, opacity: 0}}
        transition={{duration: 1}}
         className="flex-1 h-fit p-3 mt-3">
            <Feed />
        </motion.div>
    </div>
  )
}

export default Profile