import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Grid, Button, Icon, Image } from 'semantic-ui-react';

export class AllDinner extends Component {
    render() {
        const { allDinner, search, removeDinner, logout, updateSearch } = this.props;
        const filterDinner = allDinner&& allDinner.filter((dinner) => {
            return dinner.foodItem.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <Container>
                <Grid columns={'two'}>
                    <Grid.Column width={6}>
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
                    </Grid.Column>
                    <Grid.Column>
                    <Link to='/user/profile'>
                            <Button
                                content='Back'
                                color='black'
                            />
                            </Link>
                        <Link to='/user/Dinner'>
                            <Button
                                content='Create New Dinner'
                                color='green'
                            />
                        </Link>
                        <Link to='/'>
                        <Button
                            content='Logout'
                            onClick={logout}
                        />
                        </Link>
                    </Grid.Column>
                </Grid>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>FoodItem</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Howtomake</Table.HeaderCell>
                        <Table.HeaderCell>Benifits</Table.HeaderCell>
                        <Table.HeaderCell>DinnerImage</Table.HeaderCell>
                        
                    </Table.Row>
                    </Table.Header>
                    
                    <Table.Body>
                        {
                            filterDinner && filterDinner.map((dinner) => (
                                <Table.Row key={dinner}>
                                    <Table.Cell>{dinner.foodItem}</Table.Cell>
                                    <Table.Cell>{dinner.description}</Table.Cell>
                                    <Table.Cell>{dinner.howtomake}</Table.Cell>
                                    <Table.Cell>{dinner.benifits}</Table.Cell>
                                    <Table.Cell><Image src={dinner.dinnerImage} size='tiny' /></Table.Cell>
                                    <Table.Cell>
                                        <Link to={{ pathname:'/user/EditDinner', dinner: dinner}}><Icon name='edit' color='blue' circular /></Link>
                                        <Icon name='trash' color='red' circular value={dinner._id} onClick={(event, value) => removeDinner(event, value.value)} />
                                    </Table.Cell> 
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </Container>
        )
    }
}

export default AllDinner;