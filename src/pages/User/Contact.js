import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="hh">
                     <h1 className="pp"> MY OWN CHEF </h1>
          <div className="container center">
          <nav className="menu">
  
              <div className="menu__right">
              <ul className="menu__list">
              <li className="menu__list-item"><a className="menu__link" href='/user/profile'>Home</a></li>
                      <li className="menu__list-item"><a className="menu__link" href='/user/About'>About</a></li>    
                      <li className="menu__list-item"><a className="menu__link menu__link--active" href='/user/Contact'>Contact</a></li>
                      
                  </ul>
  
                   <form className="menu__search-form hide" method="POST">
                      <input className="menu__search-input" placeholder="Type and hit enter" />
                  </form>
                  </div>
                  </nav>
                  </div>
                  </div>
            </div>
        )
    }
}
