import React, { PropTypes } from 'react';
import s from './accordion.css';

const btnTyper = (btnType) => {
  switch (btnType) {
    case "danger":
      return {color:"#FF7373"}
    default:
      return {color:"#FFF"}
  }
}
const AccordBtn = ({btnType,children,menuStatus="close",onClick}) => {
  return (
    <div className={`${s["accordion-button"]}`}>
      <p style={btnTyper(btnType)} onClick={onClick}>{children}</p>
    </div>
  )
}

export default AccordBtn;
