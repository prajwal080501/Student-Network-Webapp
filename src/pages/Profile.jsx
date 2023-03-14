import React, { useState } from 'react'
import Feed from '../components/Feed'
import ProfileBox from '../components/ProfileBox'
import {motion} from "framer-motion";
import { useParams } from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const Profile = ({modal, handleModal}) => {
  const [currentUser, setCurrentUser] = useState({})
  const {user} = useContext(AuthContext);
  const token = user?.data?.token
  const id = useParams().id
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8000/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCurrentUser(res?.data?.data)
    }
    fetchUser()
  }, [id, token])
  return (
    // profile page using tailwind
    <div className="flex flex-col lg:flex-row">
        <motion.div 
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: -100, opacity: 0}}
        transition={{duration: 1}}
        className="w-full lg:sticky lg:top-10 lg:w-[30%] flex items-center h-fit p-3">
        <ProfileBox currentUser={currentUser} modal={modal} handleModal={handleModal}/>
        </motion.div>
        <motion.div
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 100, opacity: 0}}
        transition={{duration: 1}}
         className="flex-1 h-fit p-3 mt-3">
            <Feed modal={modal} handleModal={handleModal} />
        </motion.div>
    </div>
  )
}

export default Profile