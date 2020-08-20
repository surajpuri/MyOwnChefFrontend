import React, { Component } from 'react';
import {Button, Grid, Table, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import  './style1.css'
export class Index extends Component {
    render() {
        
        const { search,allbreakfast, alldinner,alllunch,updateSearch } = this.props;
        const food = [...allbreakfast, ...alldinner, ...alllunch];
        const filterfoods = food && food.filter((food) => {
            return food.foodItem.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            
                 <div className="hh">
                     <h1 className="pp"> MY OWN CHEF </h1>
          <div className="container center">
          <nav className="menu">
  
              <div className="menu__right">
              <ul className="menu__list">
                      <li className="menu__list-item"><a className="menu__link menu__link--active" href='/'>Home</a></li>
                      <li className="menu__list-item"><a className="menu__link" href='/About'>About</a></li>    
                      <li className="menu__list-item"><a className="menu__link" href='/Contact'>Contact</a></li>
                      
                  </ul>
  
                   <form className="menu__search-form hide" method="POST">
                      <input className="menu__search-input" placeholder="Type and hit enter" />
                  </form>
                  </div>
                  </nav>
                  </div>
                    
               <div className="login">
                <h2 div className="h2"> LOGIN  </h2>

                <Grid textAlign='center'>
                    <Grid.Row className="hope">
                          <Button.Group size='large'>
                             <Link to='/user/login'><Button  content='Login for Admin' /></Link> 
                            
                           
                         </Button.Group>
                    </Grid.Row>
                </Grid> 
                <Grid.Column width={25}>
                    <div className="h4">
                        <div class="ui grid">
                            <div class="six wide column">
                                <div fallbackElement="[object Object]" class="ui search">
                                <div class="ui icon input">
                                    <input
                                        type="text"
                                        tabindex="0"
                                        class="prompt"
                                        placeholder='Search'
                                        value={search}
                                        onChange={updateSearch.bind(this)}
                                    />
                                    <i aria-hidden="true" class="search icon"></i>
                                </div>
                                </div>
                            </div>
                        </div> 
                        </div>
                    </Grid.Column>
             
                    
                
                 <div className="container1">
          <nav className="menu1">
            
              
          <Table celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>fooditem</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Howtomake</Table.HeaderCell>
                            <Table.HeaderCell>benifits</Table.HeaderCell>
                            <Table.HeaderCell>Food Image</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        
                        <Table.Body>
                            {
                                filterfoods && filterfoods.map((food, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{food.foodItem}</Table.Cell>
                                        <Table.Cell>{food.description}</Table.Cell>
                                        <Table.Cell>{food.howtomake}</Table.Cell>
                                        <Table.Cell>{food.benifits}</Table.Cell>
                                    
                                        <Table.Cell><Image src={food.breakfastImage || food.dinnerImage ||food.lunchImage} size='tiny' /></Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>
            
               
  
                  </nav>
                  </div> 
                </div>
                </div>
            
            
        )
    }
}

export default Index;