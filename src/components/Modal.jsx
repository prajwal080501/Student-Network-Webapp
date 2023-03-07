import React from 'react'
import { motion } from "framer-motion"
const Modal = ({ modal, handleModal }) => {
    const post = () => {
        console.log("post")
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={
                modal ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"
            } aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div onClick={handleModal} className="fixed inset-0 bg-black/80 bg-opacity-75 backdrop-blur-xl duration-200 ease-in transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <motion.div
                    initial={{ y: -500 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={
                        modal ? "inline-block border-2 border-blue-500 drop drop-shadow-lg align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" : "hidden"
                    } role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="bg-black/80  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-2xl leading-6 font-bold dark:text-white text-gray-900" id="modal-title">
                                    New post
                                </h3>
                                <div className="mt-2">
                                    <form className="space-y-8 divide-y divide-gray-200">
                                        <textarea rows={5} cols={5} className="w-full mt-5 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 duration-200 bg-black/20 text-white" type="text" placeholder="What's in your Mind" />
                                        <input type="file" className="w-full outline-none p-2 rounded-lg bg-black/20 text-white" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/80 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={post} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Post
                        </button>
                        <button onClick={handleModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Modal