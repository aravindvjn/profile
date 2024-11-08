import React from 'react';
import profilePic from './assests/profile.jpg'
// import DP from './assests/DP.jpg'
// import DP from './assests/DP1.jpg'
import DP from './assests/DP2.jpg'

const Profile = () => {
  return (
    <div className='col-md-6 profile-class'>
      <div id="profile-pic">
        <img src={DP || profilePic} alt="" />
      </div>
    </div>
  )
}

export default Profile
