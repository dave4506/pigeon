import React, { PropTypes } from 'react';
import s from './menu.css';

class MenuButton extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {status,onClick} = this.props;
    const className = status == "open" ? "menu-button--open" : "";
    return (
      <button onClick={onClick} className={`${s["menu-button"]} ${s[className]}`}>
        <span>Menu</span>
      </button>
    );
  }

}

export default MenuButton;
