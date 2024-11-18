import React from "react";
import profilePic from "./assests/profile.jpg";
// import DP from "./assests/DP2.jpg";
import DP2 from "./assests/image.png";

const Profile = () => {
  return (
    <div className="col-md-6 profile-class">
      <div id="profile-pic">
        <img src={DP2 || profilePic} alt="" />
      </div>
    </div>
  );
};

export default Profile;
