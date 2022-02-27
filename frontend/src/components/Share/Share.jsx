import React from 'react'
import "./share.css"
import { PermMedia ,EmojiEmotions} from "@material-ui/icons";
import QuizIcon from '@mui/icons-material/Quiz';
export default function Share() {
    const PostPic = require('./pic.jpg');
    return (
        <div className="share">
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfileImg' src={PostPic} alt="" />
                    <input placeholder="what's in your mind rashmika" className="shareInput" />
                    <hr className='shareHr' />
                </div>
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>
                            <PermMedia htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Photo and video</span>
                        </div>

                        <div className='shareOption'>
                            <EmojiEmotions htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>share Achievement</span>
                        </div>


                        <div className='shareOption'>
                            <QuizIcon htmlColor='red' className='shareIcon' />
                            <span className='shareOptionText'>Ask Question</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
