import React, { PropTypes } from 'react';
import s from './nav.css';

const Nav = ({style,title,onMenuClick,menuStatus}) => {
  return (
    <div style={style} className={`${s["navbar"]} ${s["fade-up"]}`}>
      <svg onClick={(e)=>{onMenuClick()}} className={`${s["navbar-menu"]} ${s["navbar-menu__" + menuStatus]}`} width="24" height="18" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 24c1.104 0 2-.896 2-2s-.896-2-2-2h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12zm16-10c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28zm-8-10c1.104 0 2-.896 2-2s-.896-2-2-2h-20c-1.104 0-2 .896-2 2s.896 2 2 2h20z" fill="#fff"/></svg>
      <h4 className={`${s["navbar-title"]}`}>{title}</h4>
      <button className={`${s["navbar-checkout"]}`}>Check it out</button>
    </div>
  )
}

export default Nav;
