import React, { PropTypes } from 'react';
import s from './page.css';
import Nav from '../nav/nav'
import Quote from '../quote/quote'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundLoaded:false
    }
  }

  render() {
    const {onMenuClick,menuStatus} = this.props;
    const {backgroundLoaded} = this.state;
    return (
      <div className={`${s["page"]}`}>
        <Nav onMenuClick={onMenuClick} menuStatus={menuStatus} title="NY TIMES"/>
        <Quote text="With the mighty light, comes the mighty sword." subtext="David Sun"/>
        <div className={`${s["page-gradient"]}`}></div>
        <img className={`${s["page-background-image"]} ${s["page-background-image__"+(backgroundLoaded ? "loaded":"empty")]}`} onLoad={()=>{this.setState({backgroundLoaded:true})}} src="https://source.unsplash.com/category/nature/1600x900"/>
      </div>
    )
  }
}

export default Page;
