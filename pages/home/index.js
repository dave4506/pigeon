/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import s from './styles.css';
import Parent from '../../components/PageStack/parent';
import Category from '../../components/CategoryList/category';
import ABtn from '../../components/Buttons/arrowButton';
import CreateQuotePage from '../../components/Pages/createQuote';
import QuotePage from '../../components/Pages/quote.js'

var raw_quotes = [{
    id:1,
    quote:"Time will tell all your lies and truths",
    author:"dave4506"
},{
  id:2,
  quote:"And yet, this world tells me to move on but also to stay still.",
  author:"dave4506"
},{
  id:3,
  quote:"I have not lived. I am merely happy.",
  author:"dave4506"
},{
  id:4,
  quote:"What is the meaning of life? To ask that question.",
  author:"dave4506"
},{
  id:5,
  quote:"Come the seas may rise. But Come must we stand.",
  author:"dave4506"
},
{
  id:6,
  quote:"Will thou die? Never. Until the hand comes I will walk in.",
  author:"dave4506"
},
{
  id:7,
  quote:"Oh the light. The wondrous energy of a enigmatic dance.",
  author:"dave4506"
}
]

const nav = (category,newCategory,filter,newFilter) => {
  return (openPage) => (
    <div>
      <Category onClick={(link)=>{newCategory(link)}} links={["Upvoted","Latest","Popular","Yours"]} active={category || "Upvoted"}/>
      <Category onClick={(link)=>{newFilter(link)}} links={["No Profanity","Only Profanity","Give it all","Supa Big Words"]} active={filter || "Give it all"}/>
      <ABtn onClick={(e)=>{openPage("create")}} color="#2ED686">Say some wise words</ABtn>
    </div>
  )
}

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      category:"",
      filter:"",
      shifted:false
    }
  }

  static propTypes = {
  }

  componentWillMount() {
    this.setState({quote:raw_quotes[0]})
  }

  componentDidMount() {
  }

  render() {
    const {} = this.props
    const {category,filter,quote} = this.state;
     return (
      <div>
        <Parent newStatus={{}} nav={nav(category,(link)=>{this.setState({category:link})},filter,(link)=>{this.setState({filter:link})})}>
          <div key="quote">
            <QuotePage/>
          </div>
          <div key="create">
            <CreateQuotePage/>
          </div>
        </Parent>
      </div>
    );
  }

}


export default HomePage;
