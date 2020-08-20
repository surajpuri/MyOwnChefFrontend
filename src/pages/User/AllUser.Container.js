import React, { Component } from 'react';
//import swal from 'sweetalert';
import AllUser from './AllUser';
import request from '../../api/request'

export class AllUserContainer extends Component {
    constructor() {
        super();
        this.state = {
            allUser: [],
            search: ''
        }
    }

    componentDidMount = () => {
        this.fetchAllUser();
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    fetchAllUser = () => {
        request('/user', 'get')
        .then(res => {
            this.setState({
                allUser: res.data.result
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                    //swal(error.response.data.message);
                }
            } else {
                //swal("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }

    removeUser = (event, id) => {
        event.preventDefault()
        request(`/user/${id}`, 'delete')
        .then(res => {
           // swal('Donor is deleted.');
            const { allUser } = this.state;
            allUser && allUser.filter((donor, index) => {
                if (donor._id === id)
                    delete allUser[index];
                return null;
            });
            this.setState({
                allUser
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                    //swal(error.response.data.message);
                }
            } else {
                //swal("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }

    render() {
        return (
            <AllUser
                {...this.state}
                {...this.props}
                updateSearch={this.updateSearch}
                removeUser={this.removeUser}
            />
        )
    }
}

export default AllUserContainer;