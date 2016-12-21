import React, { PropTypes } from 'react';
import s from './list.css';

const List = ({style,children,menuStatus="close",help}) => {
  return (
    <ul className={`${s["sidebar-list"]} ${s["sidebar-list__" + menuStatus]} ${s["sidebar-list__" + (help ? "help":"no-help")]}`}>
      {children}
    </ul>
  )
}

export default List;
