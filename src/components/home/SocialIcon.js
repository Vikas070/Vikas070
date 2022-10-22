import React from "react";

function SocialIcon(props) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i style={{ color: "#f8f8f8" }} className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
