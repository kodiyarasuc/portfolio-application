import React from "react";
import { Element } from "react-scroll";
import ProfileContent from "../ProfileContent/ProfileContent";
import "../ProfileContainer/ProfileContainer.css";

const ProfilePage = () => {
  return (
    <div>
      <Element name="about" className="profilePage">
        <ProfileContent />
      </Element>
    </div>
  );
};

export default ProfilePage;
