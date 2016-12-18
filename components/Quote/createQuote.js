import React, { PropTypes } from 'react';
import s from './createQuote.css';
import SBtn from '../Buttons/simpleButton'
import Arrow from '../Arrow/arrows'

const statusHumanify = (status) => {
  switch(status) {
    case "profanity": return "I see some cool words"
    case "bigwords": return "Oooooohhh bigg words..."
    case "too_long": return "I can't remember that."
  }
}
class CreateQuote extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
      quote:""
    }
  }

  static propTypes = {
  }

  render() {
    const {quote} = this.state;
    const {status,style} = this.props;
    return (
      <div style={style} className={`${s["quote-create"]}`}>
        <input placeholder="Wise Words goes here" type="text"/>
        <span className={`${s["quote-create__description"]}`}>
          <p>{quote.length}/150 characters</p>
          <p>{statusHumanify(status)}</p>
          <SBtn onClick={(e)=>{}}>Lets Go!</SBtn>
          <Arrow style={{display:"inline"}} color="#000" direction="left"/>
        </span>
      </div>
    );
  }

}

export default CreateQuote;
