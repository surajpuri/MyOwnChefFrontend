import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Grid, Button, Icon, Image } from 'semantic-ui-react';

export class AllBreakfast extends Component {
    render() {
        const { allBreakfast, search, removeBreakfast, logout, updateSearch } = this.props;
        const filterBreakfast = allBreakfast && allBreakfast.filter((breakfast) => {
            return breakfast.foodItem.toLowerCase().indexOf(search.toLowerCase()) !== -1;
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

                        <Link to='/user/breakfast'>
                            <Button
                                content='Create New Breakfast'
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
                        <Table.HeaderCell>BreakfastImage</Table.HeaderCell>
                        
                    </Table.Row>
                    </Table.Header>
                    
                    <Table.Body>
                        {
                            filterBreakfast && filterBreakfast.map((breakfast) => (
                                <Table.Row key={breakfast}>
                                    <Table.Cell>{breakfast.foodItem}</Table.Cell>
                                    <Table.Cell>{breakfast.description}</Table.Cell>
                                    <Table.Cell>{breakfast.howtomake}</Table.Cell>
                                    <Table.Cell>{breakfast.benifits}</Table.Cell>
                                    <Table.Cell><Image src={breakfast.breakfastImage} size='tiny' /></Table.Cell>
                                    <Table.Cell>
                                        <Link to={{ pathname:'/user/EditBreakfast', breakfast: breakfast}}><Icon name='edit' color='blue' circular /></Link>
                                        <Icon name='trash' color='red' circular value={breakfast._id} onClick={(event, value) => removeBreakfast(event, value.value)} />
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

export default AllBreakfast;