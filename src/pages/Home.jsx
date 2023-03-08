import React from 'react'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import ProfileBox from '../components/ProfileBox'
import Suggestions from '../components/Suggestions'

const Home = ({modal, handleModal}) => {
    return (
        <div className="w-full h-full">
            <div className="flex pt-5">
                <Feed modal={modal} handleModal={handleModal} />
                    <Suggestions />
                <Modal modal={modal} handleModal={handleModal} />
            </div>
        </div>
    )
}

export default Home