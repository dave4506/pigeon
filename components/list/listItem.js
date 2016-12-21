import React, { PropTypes } from 'react';
import s from './list.css';

const ListItem = ({children,menuStatus}) => {
  return (
    <li className={`${s["sidebar-list-item"]} ${s["sidebar-list" + menuStatus]}`}>
      {children}
    </li>
  )
}

export default ListItem;
