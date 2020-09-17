import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="hh">
                     <h1 className="pp"> MY OWN CHEF </h1>
          <div className="container center">
          <nav className="menu">
  
              <div className="menu__right">
              <ul className="menu__list">
                      <li className="menu__list-item"><a className="menu__link " href='/'>Home</a></li>
                      <li className="menu__list-item"><a className="menu__link menu__link--active" href='/About'>About</a></li>    
                      <li className="menu__list-item"><a className="menu__link" href='/Contact'>Contact</a></li>
                      
                  </ul>
  
                   <form className="menu__search-form hide" method="POST">
                      <input className="menu__search-input" placeholder="Type and hit enter" />
                  </form>
                  </div> 
                  </nav>
                  <div>
At ‘Organization Name’ , we’re tied in with presenting crisp food, regardless of whether it implies going the additional mile. When you stroll through our entryways, we do what we can to make everybody feel comfortable in light of the fact that our family stretches out through your locale.

‘Organization Name’ is an organization that is continually developing. From the principal eatery in 1969, we’ve kept on extending’ vision to help other individuals end up effective entrepreneurs by owning an ‘Organization Name’ establishment. We search for franchisees who are focused on quality, not compromising.

Today, we can be found in numerous nations and have our sights on extending much more. Be that as it may, regardless of where you discover us, quality will dependably be our formula.

We Believe in Quality. All around. Quality food can’t be made without quality initiative. Find out about the general population driving The ‘Organization Name’ .

</div>
                  </div>
                
            </div>
            </div>
        )
    }
}
