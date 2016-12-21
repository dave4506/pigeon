import React, { PropTypes } from 'react';
import s from './list.css';

class Help extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {children,help} = this.props;
    return (
      <div style={{height:(help ? this.refs.accordion.clientHeight+'px':'0px')}} className={`${s["list-help"]} ${s["list-help__"+(help ? "opened":"closed")]}`}>
        <p ref="accordion">{children}</p>
      </div>
    )
  }
}

export default Help;
