import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {
                // postsData.map(entry => (
                //     <Post
                //         profilePic={entry.avatar}
                //         message={entry.text}
                //         timestamp={entry.timestamp}
                //         imgName={entry.imgName}
                //         username={entry.user}
                //      />   
                // ))
            }
            <Post 
                profilePic=''
                message='yoo this is vikas'
                timestamp='time'
                imgName='http://localhost:9000/retrieve/images/single?name=image-1614232434324.jpg'
                username='vikas'
        
            />
            
        </div>
    )
}

export default Feed
