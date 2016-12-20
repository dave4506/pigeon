import React, { PropTypes } from 'react';
import s from './page.css';
import MenuButton from '../MenuButton/menu'

const translate = (x,y,z) => {
    return `translate3d(${x},${y},${z})`;
}

class Parent extends React.Component {

  constructor(props) {
    super(props);
    const {initialStatus} = props;
    this.state = {
      status: initialStatus || "openPage",
      currentPageIndex: "",
      pageMap:[]
    }
    this.generateStyles = this.generateStyles.bind(this);
    this.generateClassNames = this.generateClassNames.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.openPage = this.openPage.bind(this);
    this.menuClick = this.menuClick.bind(this);
  }

  static propTypes = {
  }

  reorderPages(key) {

  }

  componentWillReceiveProps(nextProps) {
    const {newStatus} = nextProps;
    if(props.newStatus != newStatus)
      if(newStatus.execute == "openPage")
        this.openPage(newStatus.pageIndex);
      else
        this.openMenu();
  }

  openPage(key) {
    if(this.state.status == "openMenu") {
      var newState = {status:"openPage",currentPageIndex:key};
      if(this.props.reorder)
        newState = Object.assign({},newState,{pageMap:reorderPages(key)});
      this.setState(newState)
    } else {
      return "ALREADY_OPENED"
    }
  }

  openMenu() {
    if(this.state.status == "openPage") {
      this.setState({status:"openMenu"})
    } else {
      return "ALREADY_OPENED"
    }
  }

  componentWillMount() {
    const {children} = this.props;
    if (children) {
      const pageMap = children.map((c)=>{
        return c.key
      })
      this.setState({pageMap,currentPageIndex:children[0].key});
    }
  }

  generateClassNames() {
    const {status,pageMap,currentPageIndex} = this.state;
    if(status == "openMenu") {
      const pages = {}
      pageMap.forEach((p)=>{
        pages[p] = p==currentPageIndex ? "" : s["page--inactive"]
      })
      return {
        pages,
        stack:s["pages-stack--open"],
        nav:s["pages-nav--open"],
        menu:"menu-button--close"
      }
    } else if (status == "openPage") {
      const pages = {}
      pageMap.forEach((p)=>{
        pages[p] = p==currentPageIndex ? "" : s["page--inactive"]
      })
      return {
        pages,
        stack:s["pages-stack--open"],
        nav:s["pages-nav--close"],
        menu:"menu-button--burger"
      }
    }
  }

  generateStyles() {
    const {status,pageMap,currentPageIndex} = this.state;
    if(status == "openMenu") {
      var pages = {}
      pageMap.map((p,i)=>{
        pages[p] = {
          zIndex:(pageMap.length - i)+7,
          transform:translate(0,"75%",`${parseInt(-1 * 200 - 50*i)}px`),
          opacity:(1-i*0.2)
        }
      })
      return {
        pages
      }
    } else if (status == "openPage") {
      var pages = {}
      pageMap.map((p,i)=>{
        pages[p] = {
          zIndex:(pageMap.length - i)+7,
          transform:translate(0,currentPageIndex==p ? 0 : "100%",0),
          opacity:1
        }
      })
      return {
        pages
      }
    }
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps) {

  }

  menuClick(e) {
    var newState = {};
    newState.status = this.state.status == "openPage" ? "openMenu":"openPage";
    this.setState(newState);
  }

  render() {
    const {children,nav} = this.props;
    const {status} = this.state;
    const classes = this.generateClassNames();
    const styles = this.generateStyles()
    return (
      <div>
        <MenuButton onClick={this.menuClick} status={status == "openMenu" ? "open":"closed"}/>
        <div className={`${classes.nav} ${s["pages-nav"]}`}>
          {nav(this.openPage)}
        </div>
        <div className={`${s["pages-stack"]} ${classes.stack}`}>
          {(children || []).map((c)=>{
            return (
              <div key={c.key} onClick={(e)=>{if(status=="openMenu") this.openPage(c.key)}} style={styles.pages[c.key]} className={`${s.page} ${classes.pages[c.key]}`}>
                {c}
              </div>
            )
          })}
        </div>
      </div>
    );
  }

}

export default Parent;
