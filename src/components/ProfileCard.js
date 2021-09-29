import React from 'react'
import profileImg from '../profileImg.jpg'
import '../App.css';

// A centered container with...
// Your profile picture (rounded corners not required)
// Your name (in bold)
// Your title (React Native Apprentice)
// Your preferred pronouns 

const ProfileCard = () => {
    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
            <div>
                <img className='profile-img' src={profileImg}/>
            </div>
            <div>
                <h2 className='profile-name'>Xavier Mercado</h2>
                <p className='profile-title'>React Native Apprentice</p>
                <p className='profile-pronouns'>he/him</p>
            </div>
        </div>
    )
}

export default ProfileCard