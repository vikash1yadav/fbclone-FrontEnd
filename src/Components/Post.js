import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubble'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCirclelon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Post = ({profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar' />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                    
                    
                </div>    
            </div>

            <div className="post_bottom">
                <p>{message}</p> 
                <img src={imgName} />
                {/* image part */}
            </div>

            <div className="post_options">
                        <div className="post_option">
                            <ThumbUpIcon />
                            <p>like</p>
                        </div>
                        <div className="post_option">
                            <ChatBubbleOutlineIcon />
                            <p>comment</p>
                        </div>
                        <div className="post_option">
                            <NearMeIcon />
                            <p>Share</p>
                        </div>
                        <div className="post_option">
                            <AccountCirclelon />
                            <ExpandMoreOutlined />
                            
                        </div>

                    </div>
        </div>
    )
}

export default Post
