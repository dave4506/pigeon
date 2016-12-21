import React, { PropTypes } from 'react';
import s from './list.css';
import ListItem from './listItem';

class CollapseListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      accordion:false
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.accordion != nextProps.accordion)
      this.setState({accordion:nextProps.accordion})
  }

  render() {
    const {children,menuStatus,title} = this.props;
    const {accordion,height} = this.state;

    return (
      <ListItem>
        <div className={`${s["list-collapseItem"]}`}>
          <p className={`${s["list-collapseItem-title"]}`}>{title}</p>
          <svg onClick={(e)=>{this.setState({accordion:!accordion})}} className={`${s["list-collapseItem-arrow"]} ${s["list-collapseItem-arrow__" + (accordion ? "close":"open")]}`} width="14" height="8" viewBox="0 0 18 11" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l8 8 8-8" strokeWidth="2" stroke="#fff" fill="none"/></svg>
        </div>
        <div style={{height:(accordion ? this.refs.accordion.clientHeight+'px':'0px')}} className={`${s["list-collapseItem-accordion"]} ${s["list-collapseItem-accordion__" + (accordion ? "open":"close")]}`}>
          <div ref="accordion" className={`${s["list-collapseItem-accordion-inner"]}`}>
            {children}
          </div>
        </div>
      </ListItem>
    )
  }
}

export default CollapseListItem;
