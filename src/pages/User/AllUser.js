import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Button } from 'semantic-ui-react';

export class AllUser extends Component {
    render() {
        const {  logout } = this.props;

        return (
            <Container>
                 <div className="hh1">
                     <h1 className="pp"> MY OWN CHEF </h1>
          <div className="container center">
          <nav className="menu">
             
               
  
              <div className="menu__right">
                  <ul className="menu__list">
                      <li className="menu__list-item"><a className="menu__link menu__link--active" href='/user/profile'>Home</a></li>
                      <li className="menu__list-item"><a className="menu__link" href='/user/About'>About</a></li>    
                      <li className="menu__list-item"><a className="menu__link" href='/user/Contact'>Contact</a></li>
                      
                  </ul>
  
                
  
                  <form className="menu__search-form hide" method="POST">
                      <input className="menu__search-input" placeholder="Type and hit enter" />
                  </form>
                  </div>
                  </nav>
                  </div>
                  <div className="hh2">
                <Grid columns={'two'}>
                    <Grid.Column width={25}>
                        
                    </Grid.Column>
                    <Grid.Column className="hh3">
                        <Link to='/user/breakfast'>
                            <Button
                                content='ADD NEW BREAKFAST'
                                color='red'
                            /></Link>
                            <Link to='/user/lunch'>
                             <Button
                                content='ADD NEW LUNCH'
                                color='red'
                            />
                            </Link>
                            <Link to='/user/dinner'>
                             <Button
                                content='ADD NEW DINNER'
                                color='red'
                            />
                        </Link>
                        <Link to='/user/AllBreakfast'>
                             <Button
                                content='All Breakfast'
                                color='blue'
                            />
                        </Link>
                        <Link to='/user/AllLunch'>
                             <Button
                                content='All Lunch'
                                color='blue'
                            />
                        </Link>
                        <Link to='/user/AllDinner'>
                             <Button
                                content='All Dinner'
                                color='blue'
                            />
                        </Link>
                        
                        

                        <Link to='/'>
                        <Button
                            content='Logout'
                            onClick={logout}
                            color='green'
                        />
                        </Link>
                    </Grid.Column>
                </Grid>

                



                </div>
                </div>
            </Container>
            
        )
    }
}

export default AllUser;