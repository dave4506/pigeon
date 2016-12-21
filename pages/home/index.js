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
import Page from '../../components/page/page';
import SideBarComp from './sidebar';
import Sidebar from '../../components/sidebar/sidebar'

const mainPage = (onMenuClick,menuStatus) => {

  return (
    <Page menuStatus={menuStatus} onMenuClick={onMenuClick}/>
  )
}

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideBarStatus:"close"
    }
    this.switchSideBarStatus = this.switchSideBarStatus.bind(this);
  }

  static propTypes = {
  };

  componentDidMount() {
  }

  switchSideBarStatus() {
    this.setState({sideBarStatus: this.state.sideBarStatus == "open" ? "close" : "open"})
  }

  render() {
    const {sideBarStatus} = this.state;
    return (
      <div>
        <Sidebar status={sideBarStatus} mainPage={mainPage(this.switchSideBarStatus,sideBarStatus)} sideBar={(<SideBarComp/>)}/>
      </div>
    );
  }

}

export default HomePage;
