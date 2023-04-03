import React from "react";
import "./Qualification.css";
import { Element } from "react-scroll";
import CircularDeterminate from "../CircularProgress /CircularProgress";

const Qualification = () => {
  return (
    <Element className="qualification_details" id="qualification">
      <div className="qualification_container">
        <h1>QUALIFICATION DETAILS</h1>
      </div>
      <div className="qualification_content1">
        <div className="qualification">
          <div className="content">
            <h1>SSLC</h1>
            <p>St.Therasa matric Hr.Sec.School</p>
            <small>Senduari</small>
          </div>
        </div>
        <div className="year-of-pass">
          <h1>2015</h1>
        </div>
        <div className="cgpa">
          <h1>75.4%</h1>
          <div className="progress">
            <CircularDeterminate />
          </div>
        </div>
      </div>

      <div className="qualification_content1">
        <div className="qualification">
          <div className="content">
            <h1>HSC</h1>
            <p>Vetri Vinayaga Hr.Sec.School</p>
            <small>Samathuvapuram</small>
          </div>
        </div>
        <div className="year-of-pass">
          <h1>2017</h1>
        </div>
        <div className="cgpa">
          <h1>75.6%</h1>
          <div className="progress">
            <CircularDeterminate />
          </div>
        </div>
      </div>

      <div className="qualification_content1">
        <div className="qualification">
          <div className="content">
            <h1>Bachler Degree</h1>
            <p>Shivani Engineering college</p>
            <p>(Mechanical Engineering)</p>
            <small>Trichy</small>
          </div>
        </div>
        <div className="year-of-pass">
          <h1>2021</h1>
        </div>
        <div className="cgpa">
          <h1>77%</h1>
          <div className="progress">
            <CircularDeterminate />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Qualification;
