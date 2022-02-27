import React, { useEffect, useState } from 'react'
import './profile.css'
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});
    const College_id = useParams().College_id;
    console.log(College_id);
    useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`/users?College_id=${College_id}`)
        setUser(res.data);
    };
    fetchUser(); 
    },[College_id]);

    return (
        <div> 
            <Navbar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src= {PF+"post/coverimg.jpg"} alt="cover Image" />
                            <img className='profileUserImg' src={PF+"/post/7.jpeg"} alt="userimg" />
                        </div>
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileInfoName'>Ajeet Panchal</h4>
                        <span className='profileInfoDesc'>Information Technology</span>
                    </div>
                    <div className='profileRightBottom'>
                    
                         <Feed College_id="19ITUBS011"/>
                        <Rightbar profile />
                    </div>

                </div>

            </div>
        </div>
    )
}
