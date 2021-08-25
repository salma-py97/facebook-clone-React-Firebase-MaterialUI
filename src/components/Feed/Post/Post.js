import { Avatar } from '@material-ui/core'
import './Post.css'

// icons
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* <p>{timestamp}</p> */}
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        {image && <img src={image} alt="" />}
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleOutlinedIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>

    </div>
  )
}

export default Post
