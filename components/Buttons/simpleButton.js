import React, { PropTypes } from 'react';
import s from './simpleButton.css';

class SBtn extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {onClick,children,disabled} = this.props;
    return (
      <button disabled={disabled} onClick={onClick} className={`${s["button-simple"]}`}>
        {children}
      </button>
    );
  }

}

export default SBtn;
