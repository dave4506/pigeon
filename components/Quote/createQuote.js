import React, { PropTypes } from 'react';
import s from './createQuote.css';
import SBtn from '../Buttons/simpleButton'
import Arrow from '../Arrow/arrows'

const CreateQuote = ({quote,status,style,onTextChange,onSubmit}) => {
  return (
    <div style={style} className={`${s["quote-create"]}`}>
      <input value={quote} onChange={(e)=>{onTextChange(e.target.value)}}
        placeholder="Wise Words goes here" type="text"/>
      <span className={`${s["quote-create__description"]}`}>
        <p>{quote.length}/150 characters</p>
        <p>{status.publicStatus}</p>
        <SBtn disabled={!status.qualify} onClick={(e)=>{e.preventDefault();onSubmit()}}>Lets Go!
          <Arrow style={{display:"inline"}} color="#000" direction="left"/>
        </SBtn>
      </span>
    </div>
  )
}

export default CreateQuote;
