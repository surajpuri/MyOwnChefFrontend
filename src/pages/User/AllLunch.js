import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Grid, Button, Icon, Image } from 'semantic-ui-react';

export class AllLunch extends Component {
    render() {
        const { allLunch, search, removeLunch, logout, updateSearch } = this.props;
        const filterLunch = allLunch && allLunch.filter((lunch) => {
            return lunch.foodItem.toLowerCase().indexOf(search.toLowerCase()) !== -1;
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
                        <Link to='/user/Lunch'>
                            <Button
                                content='Create New Lunch'
                                color='green'
                            />
                        </Link>
                        <Button
                            content='Logout'
                            onClick={logout}
                        />
                    </Grid.Column>
                </Grid>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>foodItem</Table.HeaderCell>
                        <Table.HeaderCell>description</Table.HeaderCell>
                        <Table.HeaderCell>howtomake</Table.HeaderCell>
                        <Table.HeaderCell>benifits</Table.HeaderCell>
                        <Table.HeaderCell>lunchImage</Table.HeaderCell>
                        
                    </Table.Row>
                    </Table.Header>
                    
                    <Table.Body>
                        {
                            filterLunch && filterLunch.map((lunch) => (
                                <Table.Row key={lunch}>
                                    <Table.Cell>{lunch.foodItem}</Table.Cell>
                                    <Table.Cell>{lunch.description}</Table.Cell>
                                    <Table.Cell>{lunch.howtomake}</Table.Cell>
                                    <Table.Cell>{lunch.benifits}</Table.Cell>
                                    <Table.Cell><Image src={lunch.lunchImage} size='tiny' /></Table.Cell>
                                    <Table.Cell>
                                        <Link to={{ pathname:'/user/EditLunch', lunch: lunch}}><Icon name='edit' color='blue' circular /></Link>
                                        <Icon name='trash' color='red' circular value={lunch._id} onClick={(event, value) => removeLunch(event, value.value)} />
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

export default AllLunch;