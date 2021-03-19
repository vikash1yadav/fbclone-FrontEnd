import { Avatar, Input } from '@material-ui/core'
import React from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'


const MessageSender = () => {
    const [input, setInput] = React.useState('')
    const [image, setImage] = React.useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('submitting');
    }


    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar src='' />
                <form>
                    <input
                    type="text"
                    className="messageSender_input"
                    placeholder="What's on your mind?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                    <Input 
                    type="file" 
                    className="messageSender_fileSelector"
                    onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit'>submit</button>
                </form>
            </div>

            <div className="messageSender_buttom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>live video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
