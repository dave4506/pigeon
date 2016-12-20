import React, { PropTypes } from 'react';
import s from './quote.css';
import SBtn from '../Buttons/simpleButton'

class Quote extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {text,author,upvotes,upvoted,style} = this.props;
    return (
      <div style={style} className={`${s["quote"]}`}>
        <h1 className={`${s["quote__content"]}`}>{text}</h1>
        <span className={`${s["quote__description"]}`}>
          <p>-{author}</p>
          <p> {upvotes || 0} upvotes</p>
          <SBtn onClick={(e)=>{}}>Upvote!</SBtn>
          <SBtn onClick={(e)=>{}}>Report</SBtn>
        </span>
      </div>
    );
  }

}

export default Quote;
