import React, { PropTypes } from 'react';
import s from './accordion.css';
import StatusIndicator from '../loader/simpleLoader'

const AccordTitleIndicator = ({subText,indicator,style,children,menuStatus="close"}) => {
  return (
    <div className={`${s["accordion-title"]}`}>
      <p>{children}</p>
      <p style={{paddingRight:"1rem"}} className={`${s["accordion-title-sub"]}`}>{subText}</p>
      <StatusIndicator indicator={indicator}/>
    </div>
  )
}

export default AccordTitleIndicator;
