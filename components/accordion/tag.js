import React, { PropTypes } from 'react';
import s from './accordion.css';
import AccordTitle from './title'
import Help from '../list/help'

const AccordTags = ({tags,title,menuStatus="close",selected,help,onClick}) => {
  return (
    <div className={`${s["accordion-tag-selector"]}`}>
      <AccordTitle subText={selected} >{title}</AccordTitle>
      <div className={`${s["accordion-tags"]}`}>
        {tags.map((t,i)=>{
          return (
            <div onClick={(e)=>{onClick(t)}} key={i} className={`${s["accordion-tag"]} ${s["accordion-tag__"+(selected==t ? "selected":"not-selected")]}`}>
              {t}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccordTags;
