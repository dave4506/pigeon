import React, { PropTypes } from 'react';
import s from './accordion.css';
import AccordTitleIndicator from './titleWithIndicator'
import Help from '../list/help'

const AccordInput = ({submittable,placeholder,text,indicator,title,menuStatus="close",selected,help}) => {
  return (
    <div className={`${s["accordion-inputer"]}`}>
      <AccordTitleIndicator indicator={indicator}>{title}</AccordTitleIndicator>
      <div className={`${s["accordion-input"]}`}>
        <input placeholder={placeholder} value={text}/>
        <svg className={`${s["accordion-enter"]} ${s["accordion-enter__"+(submittable ? "enable":"disable")]}`} width="20" height="10" viewBox="0 0 35 16" xmlns="http://www.w3.org/2000/svg"><path d="M25.578 3.75c-.782-.782-.787-2.053-.006-2.834.786-.786 2.05-.778 2.834.006l5.651 5.651c.392.392.587.903.583 1.416 0 .512-.194 1.023-.589 1.419l-5.645 5.645c-.782.782-2.053.787-2.834.006-.786-.786-.778-2.05.006-2.834l2.237-2.237h-25.142c-1.105 0-2.001-.895-2.001-2 0-1.112.896-2 2.001-2h25.142l-2.237-2.237z" fill="#FFF"/></svg>
      </div>
    </div>
  )
}

export default AccordInput;
