import React from 'react'
import { connect } from 'react-redux'
import Quote from '../Quote/quote';
import s from './createQuote.css';
import {pullQuoteData,upvote,downvote} from '../../core/actions/quote'

class QuotePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.pullQuote();
  }

  render() {
    const {quote,vote} = this.props;
    return (
      <div>
        <Quote text="Good ideas goes here" author="dave4506" upvotes="0" upvoted={false}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pullQuote:()=>{
      dispatch(pullQuoteData());
    }
  }
}

QuotePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotePage)

export default QuotePage
