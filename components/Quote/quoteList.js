import React, { PropTypes } from 'react';
import s from './quote.css';
import Quote from './quote'

const translate = (x,y,z) => {
    return `translate3d(${x},${y},${z})`;
}

const opacity = (i) => {
    if(i==-2) return 0;
    if(i==-1) return 0.3;
    if(i==0) return 1;
    if(i==1) return 0.3;
    if(i==2) return 0.1;
    if(i>=2) return 0;
}

class QuoteList extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {quotes} = this.props;
    return (
      <div className={`${s["quote-list"]}`}>
        {quotes.map((q,i)=>{
          return (
            <Quote {...q} key={q.id} style={{pointerEvents:(i==2 ? "auto":"none"),opacity:opacity(i-2),transform:translate(0,`${i-2}00%`,0,)}}/>
          )
        })}
      </div>
    );
  }

}

export default QuoteList;
