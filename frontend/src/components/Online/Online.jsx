import React from 'react'

import './online.css'
export default function Online({user}) {
    const  PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='rightbarFriend'>
            <div className='rightbarProfileImgConainer'>
                <img className='rightbarProfileImg' src={PF+ user.profilePicture} alt="pic" />
                <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>{user.username}</span>

        </li>
    )
}
