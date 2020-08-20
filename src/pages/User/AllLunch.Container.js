import React, { Component } from 'react';
import swal from 'sweetalert';
import AllLunch from './AllLunch';
import request from '../../api/request'

export class AllLunchContainer extends Component {
    constructor() {
        super();
        this.state = {
            allLunch: [],
            search: ''
        }
    }

    componentDidMount = () => {
        this.fetchAllLunch();
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    fetchAllLunch= () => {
        request('/lunch', 'get')
        .then(res => {
            this.setState({
                allLunch: res.data.result
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

    removeLunch = (event, id) => {
        event.preventDefault()
        request(`/lunch/${id}`, 'delete')
        .then(res => {
            swal('Lunch is deleted.');
            const { allLunch } = this.state;
            allLunch && allLunch.filter((lunch, Lunch) => {
                if (lunch._id === id)
                    delete allLunch[Lunch];
                return null;
            });
            this.setState({
                allLunch
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
            <AllLunch
                {...this.state}
                {...this.props}
                updateSearch={this.updateSearch}
                removeLunch={this.removeLunch}
            />
        )
    }
}

export default AllLunchContainer;