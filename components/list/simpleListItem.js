import React, { PropTypes } from 'react';
import s from './list.css';
import ListItem from './listItem';

const SimpleListItem = ({children,menuStatus,buttonText,onClick}) => {
  return (
    <ListItem>
      <div className={`${s["list-simpleItem"]}`}>
        <p className={`${s["list-simpleItem-title"]}`}>{children}</p>
        <p onClick={onClick} className={`${s["list-simpleItem-button"]}`}>{buttonText}</p>
      </div>
    </ListItem>
  )
}

export default SimpleListItem;
