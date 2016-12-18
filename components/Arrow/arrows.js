import React, { PropTypes } from 'react';
import s from './arrows.css';

const rotate = (direction) => {
  switch (direction) {
    case "up": return `rotate(180deg)`
    case "down": return `rotate(0deg)`
    case "left": return `rotate(270deg)`
    case "right": return `rotate(90deg)`
  }
}

class Arrows extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {color,direction,style} = this.props;
    return (
      <div style={Object.assign({},style)} className={`${s["arrow"]}`}>
        <svg style={{transform:rotate(direction)}} width="16" height="34" viewBox="0 0 16 34" xmlns="http://www.w3.org/2000/svg"><path d="M12.221 24.907c.782-.782 2.053-.787 2.834-.006.786.786.778 2.05-.006 2.834l-5.651 5.651c-.392.392-.903.587-1.416.583-.512 0-1.023-.194-1.419-.589l-5.645-5.645c-.782-.782-.787-2.053-.006-2.834.786-.786 2.05-.778 2.834.006l2.237 2.237v-25.142c0-1.105.895-2.001 2-2.001 1.112 0 2 .896 2 2.001v25.142l2.237-2.237z" fill={`${color}` || "#000"}/></svg>
      </div>
    );
  }

}

export default Arrows;
