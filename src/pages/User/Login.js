import React, { Component } from 'react';
import { Container, Grid, Form, Header, Button } from 'semantic-ui-react';

export class Login extends Component {
    render() {
        const { email, password, onChange, onLogin } = this.props;
        return (
            <Container>
                <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center' content='Login to your account' />
                        <Form size='large' onSubmit={(event) => onLogin(event)}>
                            <Form.Input
                                label='E-mail'
                                placeholder='Enter e-mail'
                                name='email'
                                value={email}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Password'
                                placeholder='Enter password'
                                name='password'
                                type='password'
                                value={password}
                                onChange={(event) => onChange(event)}
                            />
                            <Button
                                fluid
                                color='green'
                                content='Login'
                            />
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Login;