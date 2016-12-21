import React, { PropTypes } from 'react';

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

class SideBarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {help:false}
  }
  render () {
    const {} = this.props;
    const {help} = this.state;
    return (
      <List help={help}>
        <Header onHelp={()=>{this.setState({help:!help})}} help={help}/>
        <Title help={help} helpText="On a new tab, Pigeon will pull a headline/quote from these sources.">Active Sources</Title>
        <CollapseListItem accordion={help} title="NY Times">
          <AccordTags help={help} tags={["Opinion","Latest","Sports","Headline"]} selected="Opinion" title="Category"/>
          <AccordInput help={help} submittable={true} indicator="disable" title="Search" placeholder="Ex: Donald Trump, Syria"/>
          <AccordBtn btnType="danger">Disable</AccordBtn>
        </CollapseListItem>
        <Spacer gap="2rem"/>
        <Title helpText="Customize what sources you will see!" help={help}>Explore New Sources</Title>
        <SimpleListItem buttonText="enable">Reddit</SimpleListItem>
        <SimpleListItem buttonText="enable">Quote</SimpleListItem>
        <Footer>
          <p>Created by Design Horizons</p>
          <p>Suggestions?</p>
        </Footer>
      </List>
    )
  }
}

export default SideBarComp
