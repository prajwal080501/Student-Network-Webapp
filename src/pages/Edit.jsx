import axios from 'axios';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Edit = () => {
  const [currentUser, setCurrentUser] = useState({})
  const { user } = useContext(AuthContext);
  const token = user?.data?.token
  const navigate = useNavigate();
  const id = useParams().id

  const fullname = useRef();
  const degree = useRef();
  const bio = useRef();
  const profilePicture = useRef();
  const passingYear = useRef();

  const handleUpdate = async (e) => {
    e.preventDefault();
    // send the user as a json object to the server
    const updatedUser = {
      fullname: fullname.current.value,
      degree: degree.current.value,
      bio: bio.current.value,
      profilePicture: profilePicture.current.value,
      passingYear: passingYear.current.value
    }
    try {
      await axios.put(`http://localhost:8000/api/user/${id}`, updatedUser, {
        headers: {
          Application: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
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

  console.log(currentUser);
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <form onSubmit={handleUpdate} className="w-[80%] mx-auto h-full text-white bg-black/60 p-5 rounded-lg mt-5">
        <p className="text-white w-full text-center text-3xl font-medium mt-3 mb-8">Let's edit your profile <span className="text-blue-500 font-bold">{currentUser.fullname}</span></p>
        <div className="flex flex-col items-center justify-center w-[90%] mx-auto space-y-5 mx-auto">
          <div className="flex items-center justify-center">
            <img src={currentUser.profilePicture} className="w-32 h-32 rounded-full shadow-md cursor-pointer border-4 border-blue-600 drop-shadow-xl" alt="profile" />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="w-full h-full bg-transparent font-bold text-2xl">Degree</label>
            <select ref={
              degree
            } className="input">
              <option value="1">MSC(CS)</option>
              <option value="2">MSC(CA)</option>
              <option value="3">BTech</option>
            </select>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="w-full h-full bg-transparent font-bold text-2xl">Full Name</label>
            <input ref={fullname} className="input" type="text" placeholder={currentUser.fullname} />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="w-full h-full bg-transparent font-bold text-2xl">Passing Year</label>
            <input ref={passingYear} className="input" type="number" placeholder={currentUser.passingYear} />
          </div>
        </div>
        <div className="flex flex-col w-[90%] mx-auto space-y-5 mt-5">
          <label className="w-full h-full bg-transparent font-bold text-2xl">Bio</label>
          <textarea ref={bio} className="input" type="text" placeholder={currentUser.bio} />
        </div>
        <div className="flex flex-col w-[90%] mx-auto space-y-5 mt-5">
          <label className="w-full h-full bg-transparent font-bold text-2xl">Profile Picture</label>
          <input ref={profilePicture} className="input" type="text" placeholder={currentUser.profilePicture} />
        </div>
        <div className="flex justify-center items-center w-[90%] mx-auto space-y-5 mt-5">
          <button type="submit" className="button" >Update</button>
        </div>
      </form>
    </div>
  )
}

export default Edit