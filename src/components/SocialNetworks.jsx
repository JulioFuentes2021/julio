import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
 
const SocialNetworks = () => {
    return (
        <div className="flex flex-col text-3xl text-blue-500">
            <div className="my-3 mx-2">
                <FaLinkedin />
            </div>
            <div className="my-3 mx-2">
                <FaGithub />
            </div>
            <div className="my-3 mx-2">
                <FaEnvelope />
            </div>
        </div>
    )
}

export default SocialNetworks
