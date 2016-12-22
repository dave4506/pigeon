import React, { PropTypes } from 'react';
import s from './quote.css';

const generateFontSize = (text) => {
  const length = text.length;
  if(length>0 && length < 70)
    return '4rem';
  if(length>=70 && length < 150)
    return '3rem';
  if(length>=150)
    return '2rem';
}
const Quote = ({text,subtext,onClick}) => {
  return (
    <div onClick={onClick} className={`${s["quote"]} ${s["fade-up"]}`}>
      <h1 style={{fontSize:generateFontSize(text)}} className={`${s["quote-headline"]}`}>{text}</h1>
      <h4 className={`${s["quote-subtext"]}`}>{subtext}</h4>
    </div>
  )
}

export default Quote;
