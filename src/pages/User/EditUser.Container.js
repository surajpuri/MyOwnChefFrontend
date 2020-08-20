import React, { Component } from 'react';
import swal from 'sweetalert';
import EditUser from './EditUser';
import request from '../../api/request';
import { Redirect } from 'react-router-dom';

export class EditUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.location.user && props.location.user._id ? props.location.user._id : null,
            fullName: props.location.user && props.location.user.fullName ? props.location.user.fullName : '',
            email: props.location.user && props.location.user.email ? props.location.user.email : '',
            password: props.location.user && props.location.user.password ? props.location.user.password : '',
            gender: props.location.user && props.location.user.gender ? props.location.user.gender : '',
            dateofBirth: props.location.user && props.location.user.dateofBirth ? props.location.user.dateofBirth : '',
            address: props.location.user && props.location.user.address ? props.location.user.address : '',
            mobileNumber: props.location.user && props.location.user.mobileNumber ? props.location.user.mobileNumber : '',
            phoneNumber: props.location.user && props.location.user.phoneNumber ? props.location.user.phoneNumber : '',
            bloodType: props.location.user && props.location.user.bloodType ? props.location.user.bloodType : '',
            lastBloodGiven: props.location.user && props.location.user.lastBloodGiven ? props.location.user.lastBloodGiven : '',
            positionInHospital: props.location.user && props.location.user.positionInHospital ? props.location.user.positionInHospital : '',
            userImage:  props.location.user && props.location.user.userImage ? props.location.user.userImage :null
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    uploadImage = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    }

    onSubmitUser = (event, id) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('fullName', this.state.fullName);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('gender', this.state.gender);
        formData.append('dateofBirth', this.state.dateofBirth);
        formData.append('address', this.state.address)
        formData.append('mobileNumber', this.state.mobileNumber);
        formData.append('phoneNumber', this.state.phoneNumber);
        formData.append('bloodType', this.state.bloodType);
        formData.append('lastBloodGiven', this.state.lastBloodGiven);
        formData.append('positionInHospital', this.state.positionInHospital);
        formData.append('userImage', this.state.userImage);

        request(`/user/${id}`, 'patch', formData)
        .then(res => {
            swal('User is updated.');
            this.props.history.push('/user/profile');
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                    swal("Opps!!! " + error.response.data.message);
                }
            } else {
                swal("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    } 

    render() {
        return (
            <>
                {
                    this.state.id === null ? <Redirect to='/user/profile' /> : null
                }
                <EditUser
                    {...this.state}
                    onChange={this.onChange}
                    uploadImage={this.uploadImage}
                    onSubmitUser={this.onSubmitUser}
                />
            </>
        )
    }
}

export default EditUserContainer;