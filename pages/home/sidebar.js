import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import List from '../../components/list/list'
import ListItem from '../../components/list/listItem'
import Header from '../../components/list/header'
import Title from '../../components/list/title'
import SimpleListItem from '../../components/list/simpleListItem'
import Spacer from '../../components/list/Spacer'
import CollapseListItem from '../../components/list/collapseListItem'
import AccordTitle from '../../components/accordion/title'
import AccordBtn from '../../components/accordion/button'
import AccordTags from '../../components/accordion/tag'
import AccordInput from '../../components/accordion/input'
import Footer from '../../components/list/footer'

import {changeSourceSubscription,updateSource} from '../../core/actions/sources'

class SideBarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {help:false}
  }
  render () {
    const {sources,enableSource,disableSource,updateSource} = this.props;
    const {help} = this.state;
    return (
      <List help={help}>
        <Header onHelp={()=>{this.setState({help:!help})}} help={help}/>
        <Title help={help} helpText="On a new tab, Pigeon will pull a headline/quote from these sources.">Active Sources</Title>
        {Object.keys(sources).map((s,i)=>{
          const source = sources[s]
          if(source.enable)
            return (
              <CollapseListItem key={s} title={source.publicTitle}>
                {Object.keys(source.params).map((p)=>{
                  const param = source.params[p];
                  const userParams = source.selectedParams[p];
                  if(param.type=="category")
                    return <AccordTags onClick={(t)=>{updateSource(s,p,{select:t})}} key={p} help={help} tags={param.categories} selected={userParams.select || param.default} title={p}/>
                  if(param.type=="search")
                    return <AccordInput onChange={(t)=>{updateSource(s,p,{value:t})}} key={p} help={help} value={userParams.value} submittable={userParams.indicator=="success"} indicator={userParams.indicator} title={p} placeholder={param.placeholder}/>
                })}
                <AccordBtn onClick={()=>{disableSource(s)}} btnType="danger">Disable</AccordBtn>
              </CollapseListItem>
            )
        })}
        <Spacer gap="2rem"/>
        <Title helpText="Customize what sources you will see!" help={help}>Explore New Sources</Title>
        {Object.keys(sources).map((s)=>{
          const source = sources[s]
          if(!source.enable)
            return <SimpleListItem onClick={()=>{enableSource(s)}} key={s} buttonText="enable">{source.publicTitle}</SimpleListItem>
        })}
        <Footer>
          <p>Created by Design Horizons</p>
          <p>Suggestions?</p>
        </Footer>
      </List>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sources: state.sources
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    enableSource: (source) => {
      dispatch(changeSourceSubscription(source,true));
    },
    disableSource: (source) => {
      dispatch(changeSourceSubscription(source,false));
    },
    updateSource: (source,category,update) => {
      dispatch(updateSource(source,category,update));
    }
  }
}

const SideBarCompRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComp)


export default SideBarCompRedux
