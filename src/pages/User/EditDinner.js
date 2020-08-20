import React, { Component } from 'react';
import { Container, Header, Grid, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class EditDinner extends Component {
    render() {
        const { id,foodItem, description, howtomake, benifits, uploadImage, onChange, onSubmitUser } = this.props;
        return (
            <Container>
                <Grid>
                    <Grid.Column>
                        <Header as='h2' color='teal' textAlign='center' content='EDIT BREAKFAST' />
                        <Form onSubmit={(event) => onSubmitUser(event, id)}>
                            <Form.Input
                                label='Food Item'
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
                                label='Dinner Image'
                                type='file'
                                name='dinnerImage'                   
                                onChange={(event) => uploadImage(event)}
                            />
                          <Link to='/user/AllDinner'>
                            <Button
                                color='green'
                                content='Edit Dinner'

                            />
                            </Link>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default EditDinner;