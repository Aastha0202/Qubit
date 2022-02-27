import React from 'react';
import './Settings.css';

export default function Setting() {
    const PostPic = require('../../Image/pic.jpg');
    return (
        <div className="settings">
            <div className="img-container">
                <img
                    src={PostPic}
                    alt="user-dp"
                />
            </div>

            <div className="field">
                <div classname="field-label">Email</div>
                <div classname="field-value">user email</div>
            </div>

            <div className="field">
                <div classname="field-label">name</div>

                <input
                    type="text"
                    
                />

                <div classname="field-value">user name</div>

            </div>


            <div className="field">
                <div classname="field-label">New password</div>

                <input
                    type="password"
                    
                />
            </div>



            <div className="field">
                <div classname="field-label">Confirm password</div>
                <input
                    type="password"
                />
            </div>

            <div className="btn-grp">

                <button className="button save-btn">Save</button>

                <button className="button edit-btn">Edit profile</button>

            </div>
        </div>
    );
}



