import React from 'react'
import "./Sidebar.css"
import {
    RssFeed, Chat,
    HelpOutline,
    Event,
    School,
} from "@material-ui/icons";
import { Users } from '../../dummyData';
import CloseFriend from '../CloseFriend/CloseFriend';
export default function sidebar() {
    
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>

                    <li className='sidebarListItem'>
                        <HelpOutline className='sidebarIcon' />
                        <span className='sidebarListItemText'>Quesiton</span>
                    </li>

                    <li className='sidebarListItem'>
                        <School className='sidebarIcon' />
                        <span className='sidebarListItemText'>collage</span>
                    </li>


                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'>chats</span>
                    </li>

                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon' />
                        <span className='sidebarListItemText'>Coming soon</span>
                    </li>

                </ul>

                <button className='sidebarButton'>Show more</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                {Users.map((u)=>(
                    <CloseFriend key={u.id} user={u}/>
                ))}
                </ul>
            </div>



        </div>
    )
}
