import React, { PropTypes } from 'react';
import s from './arrowButton.css';
import Arrow from '../Arrow/arrows'

class ABtn extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {onClick,children,direction,color} = this.props;
    return (
      <div onClick={onClick} style={{color}} className={`${s["button-arrow"]}`}>
        {children}
        <Arrow direction={direction || "down"} color={color}/>
      </div>
    );
  }

}

export default ABtn;
