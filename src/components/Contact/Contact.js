import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
const Contact = () => {
  return (
    <div>
      <Element className="Contact_Container" id="contact">
        <h1>Contact</h1>
        <div className="Contact_Content">
          <p className="email">
            <strong>Email</strong> : <span>kodiyarasu01@gmail.com</span>
          </p>
          <p className="github">
            <strong>Github UserName</strong> :  
             <span><a href="https://github.com/kodiyarasuc"> https://github.com/kodiyarasuc</a></span>
          </p>
          <div className="contact_icon">
            <a href="https://www.linkedin.com/in/kodiyarasu-c-2057b8259/">
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/kodi.arasu.9889">
              <IconButton>
                <Facebook />
              </IconButton>
            </a>
            <a href="https://www.secure.instagram.com/__kodi__001/">
              <IconButton>
                <Instagram />
              </IconButton>
            </a>
           
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Contact;
