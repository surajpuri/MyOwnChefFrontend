import React, { Component } from 'react';
import swal from 'sweetalert';
import AllBreakfast from './AllBreakfast';
import request from '../../api/request'

export class AllBreakfastContainer extends Component {
    constructor() {
        super();
        this.state = {
            allBreakfast: [],
            search: ''
        }
    }

    componentDidMount = () => {
        this.fetchAllBreakfast();
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    fetchAllBreakfast = () => {
        
        request('/breakfast', 'get')
        .then(res => {
            this.setState({
                allBreakfast: res.data.result
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

    removeBreakfast = (event, id) => {
        event.preventDefault()
        request(`/breakfast/${id}`, 'delete')
        .then(res => {
            swal('Breakfast is deleted.');
            const { allBreakfast } = this.state;
            allBreakfast && allBreakfast.filter((breakfast, Breakfast) => {
                if (breakfast._id === id)
                    delete allBreakfast[Breakfast];
                return null;
            });
            this.setState({
                allBreakfast
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
            <AllBreakfast
                {...this.state}
                {...this.props}
                updateSearch={this.updateSearch}
                removeBreakfast={this.removeBreakfast}
            />
        )
    }
}

export default AllBreakfastContainer;