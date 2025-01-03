import React from "react";
import image1280 from "./assests/imagex1280.png";
import image1024 from "./assests/imagex1024.png";
import image640 from "./assests/imagex640.png";
import profilePic from "./assests/profile.jpg";

const Profile = () => {
  return (
    <div className="col-md-6 profile-class">
      <div id="profile-pic">
        <img
          src={image640 || profilePic}
          srcSet={`
    ${image640} 640w,
    ${image1024} 1024w,
    ${image1280} 1280w
  `}
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
          alt="Profile Picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Profile;
