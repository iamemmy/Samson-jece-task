import React from "react";
import "../Styles/styles.css";


const SideBar = ({ text, textTwo, iconSrc, isActive, onClick }) => {
    const activeClass = isActive ? 'active' : '';
  
    return (
      <div className="sidebar-item" onClick={onClick}>
        <div className="sidebar-text-wrapper">
          <p className="sidebar-text">{text}</p>
          <p className="sidebar-text-2">{textTwo}</p>
        </div>
        <img
          className={`sidebar-icon ${activeClass}`}
          src={iconSrc}
          alt={text}
        />
      </div>
    );
};

export default SideBar;