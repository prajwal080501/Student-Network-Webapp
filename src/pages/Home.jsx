import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import Suggestions from '../components/Suggestions'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
const Home = ({ modal, handleModal }) => {
    const [posts, setPosts] = useState([])
    const user = useContext(AuthContext);
    const token = user?.user?.data?.token
    const id = user?.user?.data?.user?._id

    useEffect(() => {
        const fetchPosts = async () => {

            const res = await axios.get(`http://localhost:8000/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPosts(res.data.data)
            
        }
        fetchPosts()

    }, [id, token])
    return (
        <div className="w-full h-full">
            <div className="flex pt-5">
                <Feed posts={posts} modal={modal} handleModal={handleModal} />
                <Suggestions />
                <Modal modal={modal} handleModal={handleModal} />
            </div>
        </div>
    )
}

export default Home