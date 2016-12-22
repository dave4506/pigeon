import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {pullQuote} from '../../core/actions/sources'

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

  componentWillMount() {
    this.props.pullQuote();
  }

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    const {onMenuClick,menuStatus,quote,quoteStatus} = this.props;
    const {backgroundLoaded} = this.state;
    return (
      <div className={`${s["page"]}`}>
        <Nav onCheck={(e)=>{this.openInNewTab(quote.link)}} onMenuClick={onMenuClick} menuStatus={menuStatus} title={quote.source}/>
        {(()=>{
          if(quoteStatus == "complete")
            return <Quote text={quote.text} subtext={quote.subtext} onClick={()=>{this.openInNewTab(quote.link)}} />
        })()}
        <div className={`${s["page-gradient"]}`}></div>
        <img className={`${s["page-background-image"]} ${s["page-background-image__"+(backgroundLoaded ? "loaded":"empty")]}`} onLoad={()=>{this.setState({backgroundLoaded:true})}} src="https://source.unsplash.com/category/nature/1600x900"/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    quote: state.quote,
    quoteStatus: state.ui.QUOTE
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    pullQuote:()=>{
      dispatch(pullQuote())
    }
  }
}

const PageRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default PageRedux;
