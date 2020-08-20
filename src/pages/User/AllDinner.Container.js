import React, { Component } from 'react';
import swal from 'sweetalert';
import AllDinner from './AllDinner';
import request from '../../api/request'

export class AllDinnerContainer extends Component {
    constructor() {
        super();
        this.state = {
            allDinner: [],
            search: ''
        }
    }

    componentDidMount = () => {
        this.fetchAllDinner();
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    fetchAllDinner = () => {
        request('/Dinner', 'get')
        .then(res => {
            this.setState({
                allDinner: res.data.result
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                    swal(error.response.data.message);
                }
            } else {
                swal("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }

    removeDinner = (event, id) => {
        event.preventDefault()
        request(`/Dinner/${id}`, 'delete')
        .then(res => {
            swal('Dinner is deleted.');
            const { allDinner } = this.state;
            allDinner && allDinner.filter((dinner, Dinner) => {
                if (dinner._id === id)
                    delete allDinner[Dinner];
                return null;
            });
            this.setState({
                allDinner
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                    swal(error.response.data.message);
                }
            } else {
                swal("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }

    render() {
        return (
            <AllDinner
                {...this.state}
                {...this.props}
                updateSearch={this.updateSearch}
                removeDinner={this.removeDinner}
            />
        )
    }
}

export default AllDinnerContainer;