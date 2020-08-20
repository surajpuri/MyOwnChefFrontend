import React, { Component } from 'react';
import swal from 'sweetalert';
import Login from './Login';
import request, { setDefaults } from '../../api/request';

export class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onLogin = (event) => {
        event.preventDefault();
        request('/admin/login', 'post', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem('LoginToken', JSON.stringify(`Bearer ${res.headers.authorization}`));
            setDefaults(); //Set default headers for every api request
            this.props.login();
            window.location.reload();
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
            <Login
                {...this.state}
                onChange={this.onChange}
                onLogin={this.onLogin}
            />
        )
    }
}

export default LoginContainer;