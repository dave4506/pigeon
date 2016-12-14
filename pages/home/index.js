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
import s from './styles.css';
import Parent from '../../components/PageStack/parent';
import Category from '../../components/CategoryList/category';

const nav = (category,newCategory,filter,newFilter) => {
  return (
    <div>
      <Category onClick={(link)=>{newCategory(link)}} links={["Upvoted","Latest","Popular","Yours"]} active={category || "Upvoted"}/>
      <Category onClick={(link)=>{newFilter(link)}} links={["No Profanity","Only Profanity","Give it all","Supa Big Words"]} active={filter || "Give it all"}/>
    </div>
  )
}

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      category:"",
      filter:""
    }
  }

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    const {} = this.props
    const {category,filter} = this.state;
     return (
      <div>
        <Parent nav={nav(category,(link)=>{this.setState({category:link})},filter,(link)=>{this.setState({filter:link})})}>
          <div key="quote">
          </div>
          <div key="create"></div>
        </Parent>
      </div>
    );
  }

}

export default HomePage;
