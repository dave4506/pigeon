import React, { PropTypes } from 'react';
import s from './list.css';
import ListItem from './listItem';
import Help from './help'
const Title = ({children,menuStatus,help,helpText}) => {
  return (
    <ListItem>
      <div className={`${s["list-title"]}`}>
        <p>{children}</p>
        <Help help={help}>{helpText}</Help>
      </div>
    </ListItem>
  )
}

export default Title;
