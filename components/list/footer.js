import React, { PropTypes } from 'react';
import s from './list.css';
import ListItem from './listItem';
import Help from './help'

const Footer = ({children,menuStatus}) => {
  return (
    <ListItem>
      <div className={`${s["list-footer"]}`}>
        {children}
      </div>
    </ListItem>
  )
}

export default Footer;
