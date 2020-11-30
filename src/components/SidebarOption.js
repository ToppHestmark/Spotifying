import React from 'react';
import './SidebarOption.css';

function SidebarOption({ option, title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p> {option} </p>}  
    </div>
  )
}

export default SidebarOption
