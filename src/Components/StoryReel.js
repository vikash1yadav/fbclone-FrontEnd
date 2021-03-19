import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/149977297_1623997087788855_8225082521134853222_o.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=S_aPpI3gJEIAX9ULkjg&_nc_ht=scontent.fdel11-2.fna&oh=aa2adb7e80f272fd0751873bb892c761&oe=605B2CF1' 
                profileSrc='https://scontent.fdel11-1.fna.fbcdn.net/v/t1.0-9/143609249_1617193468469217_8350712108502385772_o.jpg?_nc_cat=100&ccb=3&_nc_sid=e3f864&_nc_ohc=cMC3rjM2gwEAX-BqOmj&_nc_ht=scontent.fdel11-1.fna&oh=edd9fa992cbf469bafe176561f2eeee7&oe=605C0CA9'
                title='vikash kumar'
            />
                <Story
                    image=''
                    profileSrc=''
                    title='manish mishra'
                />
                <Story
                    image=''
                    profileSrc=''
                    title='sudip kumar yadav'
                    />

            
        </div>
    )
}

export default StoryReel
