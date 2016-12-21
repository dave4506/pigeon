import React, { PropTypes } from 'react';
import s from './list.css';
import ListItem from './listItem';

const src = require('./logo.png');

const Header = ({children,menuStatus,onHelp,help}) => {
  return (
    <ListItem>
      <div className={`${s["list-header"]}`}>
        <img src={src}/>
        <svg onClick={onHelp} className={`${s["list-header-help"]} ${s["list-header-help__"+(help ? "opened":"closed")]}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#FFF" d="M8.084 11.084c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1zm0-8c-1.657 0-3 1.343-3 3 0 .553.447 1 1 1s1-.447 1-1 .447-1 1-1 1 .447 1 1-.447 1-1 1-1 .447-1 1v1c0 .553.447 1 1 1s1-.447 1-1v-.184c1.162-.413 2-1.512 2-2.816 0-1.657-1.343-3-3-3zm0-3c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/></svg>
      </div>
    </ListItem>
  )
}

export default Header;
