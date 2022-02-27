import React from "react";
import './AskQuestion.css';
import '../Post/Post.css';
import CreateIcon from '@material-ui/icons/Create';
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from '../InputOption/InputOption';

export default function AskQuestion() {
  const PostPic = require('../../ad.jpg');
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={PostPic} alt="name" />
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Add Question" color="#70b5f9" />
        </div>
      </div>
    </div>

  );
}
