import React from 'react'
import { motion } from "framer-motion"
import { AiOutlinePlusCircle, AiOutlineReload } from 'react-icons/ai'
const FloatingButton = (modal, handleModal, refresh) => {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex sticky top-20 bg-black/40 rounded-lg mx-auto mt-5  w-fit items-center">
            <button onClick={handleModal} title="New Post" className="p-3 mx-3 rounded-full my-3 bg-gradient-to-r from-blue-500 to-fuchsia-600 hover:scale-110 duration-200 active:scale-95 text-3xl font-bold dark:text-white">
                <AiOutlinePlusCircle className="text-3xl" />
            </button>
            <button onClick={refresh} title="Refresh" className="p-3 mx-3 rounded-full my-3 bg-green-500 hover:scale-110 duration-200 active:scale-95 text-3xl font-bold dark:text-white">
                <AiOutlineReload className="text-3xl" />
            </button>
        </motion.div>
    )
}

export default FloatingButton