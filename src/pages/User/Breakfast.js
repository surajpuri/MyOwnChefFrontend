import React, { Component } from 'react';
import { Container, Header, Grid, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class BreakFast extends Component {
    render() {
        const {foodItem, description, howtomake, benifits,uploadImage, onChange, onSubmitBreakfast } = this.props;
        return (
            <Container>
                <Grid>
                    <Grid.Column>
                        <Header as='h2' color='teal' textAlign='center' content='Add a BreakFast' />
                        <Form onSubmit={(event) => onSubmitBreakfast(event)}>
                            <Form.Input
                                label='FoodItem'
                                placeholder='Enter food name'
                                name='foodItem'
                                value={foodItem}
                                onChange={(event) => onChange(event)}
                            />
                             
                            <Form.Input
                                label='description'
                                placeholder='Enter description'
                                name='description'
                                value={description}
                                onChange={(event) => onChange(event)}
                            />
                             <Form.Input
                                label='howtomake'
                                placeholder='Enter how to make'
                                name='howtomake'
                                value={howtomake}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='benifits'
                                placeholder='Enter benifits'
                                name='benifits'
                                value={benifits}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Breakfast Image'
                                type='file'
                                name='breakfastImage'
                                                   
                                onChange={(event) =>uploadImage(event)}
                            />
            
                            
                            <Button
                                color='green'
                                content='Add Breakfast'
                            />
                            <Link to='/user/profile'>
                            <Button
                                content='Cancel'
                                color='green'
                            />
                            </Link>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default BreakFast;