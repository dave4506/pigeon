import React from 'react'
import { connect } from 'react-redux'
import Quote from '../Quote/quote';
import CreateQuote from '../Quote/createQuote';
import s from './createQuote.css';
import {changeLocalQuoteText,pushQuoteData} from '../../core/actions/createQuote'

let CreateQuotePage = ({onTextChange,quote,quoteStatus,onSubmit}) => {
  return (
    <div>
      <CreateQuote onSubmit={()=>{onSubmit(quote)}} quote={quote.text} status={quoteStatus} onTextChange={onTextChange}/>
      <div className={`${s["idea"]}`}>
        <p>Idea of the Day</p>
        <Quote text="Good ideas goes here" author="dave4506" upvotes="0" upvoted={false}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quote: state.createQuote,
    quoteStatus: state.ui.LOCAL_QUOTE_STATUS
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text)=>{dispatch(changeLocalQuoteText(text))},
    onSubmit: (quote)=>{dispatch(pushQuoteData(quote))}
  }
}

CreateQuotePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuotePage)

export default CreateQuotePage
