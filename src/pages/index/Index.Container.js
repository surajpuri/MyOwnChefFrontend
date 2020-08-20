import React, { Component } from 'react';
//import swal from 'sweetalert';
import Index from './Index';
import request from '../../api/request'

export class IndexContainer extends Component {
    constructor() {
        super()
        this.state = {
            allbreakfast: [],
            alldinner: [],
            alllunch:[],
            search:'',
            
        }
    }

    componentDidMount = () => {
        this.fetchAllBreakfast();
        this.fetchAllDinner();
        this.fetchAllLunch();
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
                allbreakfast: res.data.result
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                   // (error.response.data.message);
                }
            } else {
                //("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }
    fetchAllDinner = () => {
        request('/Dinner', 'get')
        .then(res => {
            this.setState({
                alldinner: res.data.result
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                   // (error.response.data.message);
                }
            } else {
                //("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }

    fetchAllLunch = () => {
        request('/lunch', 'get')
        .then(res => {
            this.setState({
                alllunch: res.data.result
            });
        })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.data.message) {
                   // (error.response.data.message);
                }
            } else {
                //("Opps!!!, We couldn't connect to our servers, please check your internet connection");
            }
        });
    }

    render() {
        return (
            <Index
                {...this.state}
                updateSearch={this.updateSearch}
                
            />
        )
    }
}

export default IndexContainer;