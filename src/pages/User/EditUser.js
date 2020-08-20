import React, { Component } from 'react';
import { Container, Header, Grid, Form, Button } from 'semantic-ui-react';

export class EditUser extends Component {
    render() {
        const { id, fullName, email, gender, dateofBirth, address, mobileNumber, phoneNumber, bloodType, lastBloodGiven, positionInHospital, onChange, uploadImage, onSubmitUser } = this.props;
        return (
            <Container>
                <Grid>
                    <Grid.Column>
                        <Header as='h2' color='teal' textAlign='center' content='Create a user account' />
                        <Form onSubmit={(event) => onSubmitUser(event, id)}>
                            <Form.Input
                                label='Full Name'
                                placeholder='Enter full name'
                                name='fullName'
                                value={fullName}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='E-mail'
                                placeholder='Enter e-mail'
                                name='email'
                                value={email}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Gender'
                                placeholder='Enter gender'
                                name='gender'
                                value={gender}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Date of Birth'
                                placeholder='Enter date of birth'
                                name='dateofBirth'
                                type='date'
                                value={dateofBirth}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Address'
                                placeholder='Enter address'
                                name='address'
                                value={address}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Mobile Number'
                                placeholder='Enter mobile number'
                                name='mobileNumber'
                                value={mobileNumber}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Phone Number'
                                placeholder='Enter phone number'
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Blood Type'
                                placeholder='Enter blood type'
                                name='bloodType'
                                value={bloodType}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Last Blood Given Date'
                                placeholder='Enter last blood given date'
                                type='date'
                                name='lastBloodGiven'
                                value={lastBloodGiven}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='Position in Hospital'
                                placeholder='Enter position in hospital'
                                name='positionInHospital'
                                value={positionInHospital}
                                onChange={(event) => onChange(event)}
                            />
                            <Form.Input
                                label='User Image'
                                type='file'
                                name='userImage'
                                onChange={(event) => uploadImage(event)}
                            />
                            <Button
                                color='green'
                                content='Edit User'
                            />
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default EditUser;