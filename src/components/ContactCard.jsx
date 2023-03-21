import React from "react";
import { Profile } from "../models/Profile";
import PropTypes from "prop-types";
import "../components/Styles/RightBar.scss";

/**@param {{profile:Profile}} props */
export default function ContactCard({ profile }) {
  let name = profile.name.replace(/@|.com|gmail|test/gi, "");

  function upperCaseName(name) {
    console.log(name.charAt(0));
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className="componentName">
      <div className="row mt-1 d-flex align-items-center interact rounded">
        <div className="col-1 p-0">
          <img className="contactAvatar rounded-circle" src={profile.picture} />
        </div>
        <div className="col-10 offset-1 p-0">
          <p className="p-0 m-0 contactProfileName">{upperCaseName(name)}</p>
        </div>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  profile: PropTypes.instanceOf(Profile),
};
