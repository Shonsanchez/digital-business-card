import React from "react";

export default function Info() {
  return (
    <div className="info">
      <div className="info--image-container">
        <img
          className="info--profile-picture"
          src="../images/profile-cropped2.jpg"
        />
      </div>
      <h1 className="info--name">Shon Sanchez</h1>
      <h4 className="info--title">Backend Developer</h4>
      <p className="info--site">shonsanchez.com</p>
      <div className="info--buttons">
        <a href="https://www.gmail.com/">
          <div className="button--email">
            <img className="info--button-icon" src="../svgs/Mail.svg" />
            <span className="info--button-email-title">Email</span>
          </div>
        </a>
        <a href="https://www.linkedin.com/">
          <div className="button--linkedin">
            <img className="info--button-icon" src="../svgs/linkedin.svg" />
            <span className="info--button-linkedin-title">LinkedIn</span>
          </div>
        </a>
      </div>
    </div>
  );
}
