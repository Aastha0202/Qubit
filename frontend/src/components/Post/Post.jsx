import React, { useState, useEffect } from 'react'
import { MoreVert } from "@material-ui/icons"
import { Users } from '../../dummyData'
import axios from "axios"
import { format } from "timeago.js"
import { Link } from "react-router-dom"
export default function Post({ post }) {

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/${post.userId}`);

            setUser(res.data)
        };
        fetchUser();
    }, [post.userId]);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const PostPic = require('../../Image/pic.jpg');
    const heart = require('../../Image/heart.png');
    const likeImg = require('../../Image/like.png');
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <Link to = {`profile/${user.College_id}`}>
                            <img className='postProfileImg'
                                src={user.pic || PostPic}
                                alt="pic" />
                        </Link>
                      

                        <span className='postUsername'>
                            Ajeet Panchal
                            {/*{user.name} */}
                        </span>
                        <span className='postDate'>{format(post.createdAt)}</span>

                    </div>

                    <div className='postTopRight'>
                        <MoreVert />
                    </div>

                </div>
                <div className='postCenter'>
                    <span className='postText'> {post.desc}</span>
                    <img className='postImg' src={PF+post.photo || PostPic } alt="postpic" />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src={heart} alt="heart" onClick={likeHandler} />
                        <img className='likeIcon' src={likeImg} alt="like" onClick={likeHandler} />
                        <span className='postLikeCounter'>{like} like it</span>

                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} comment</span>

                    </div>
                </div>

            </div>
        </div>
    )
}
