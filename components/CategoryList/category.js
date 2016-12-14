import React, { PropTypes } from 'react';
import s from './category.css';

class Categories extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
  }

  render() {
    const {links,onClick,active,maintainState,backgroundColor} = this.props;
    return (
      <section className={`${s["section"]}`}>
        <nav className={`${s.menu}`}>
          <ul className={`${s["menu__list"]}`}>
            {links.map((l,i)=>{
              return (
                <li onClick={(e)=>{onClick(l)}} key={i} className={`${s["menu__item"]} ${l==(active) ? s["menu__item--current"] : ""}`}>
                  <a href="#" className={`${s["menu__link"]}`}>{l}</a>
                </li>
              )
            })}
            <li style={{transform:`translate3d(${links.indexOf(active)}00%,0,0)`}} className={`${s["menu__line"]}`}>
              <div className={`${s.line}`}></div>
            </li>
          </ul>
        </nav>
      </section>
    );
  }

}

export default Categories;
