import React, { PropTypes } from 'react';
import s from './sidebar.css';

const statusClass = (status) => {
  return status == "open" ? "__open" : "__close"
}

const Sidebar = ({status,mainPage,sideBar}) => {
  return (
    <div className={`${s["menu"]}`}>
      <div className={`${s["menu-sidebar"]} ${s["menu-sidebar"+statusClass(status)]}`}>
        {sideBar}
      </div>
      <div className={`${s["menu-main-content"]} ${s["menu-main-content"+statusClass(status)]}`}>
        {mainPage}
      </div>
    </div>
  )
}

export default Sidebar;
