import React from 'react';
import profilePic from './assests/profile.jpg'

const Profile = () => {
  return (
    <div className='col-md-6 profile-class'>
      <div id="profile-pic">
        <img src={profilePic} alt="" />
      </div>
    </div>
  )
}

export default Profile
