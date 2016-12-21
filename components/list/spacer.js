import React, { PropTypes } from 'react';
import s from './list.css';
import ListItem from './listItem';

const Spacer = ({gap,menuStatus}) => {
  return (
    <ListItem>
      <div style={{height:gap}}>
      </div>
    </ListItem>
  )
}

export default Spacer;
