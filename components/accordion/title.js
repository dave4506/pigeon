import React, { PropTypes } from 'react';
import s from './accordion.css';

const AccordTitle = ({subText,style,children,menuStatus="close"}) => {
  return (
    <div className={`${s["accordion-title"]}`}>
      <p>{children}</p>
      <p className={`${s["accordion-title-sub"]}`}>{subText}</p>
    </div>
  )
}

export default AccordTitle;
