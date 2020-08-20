import React, { Component } from 'react';
import swal from 'sweetalert';
import { Dinner } from './Dinner';
import request from '../../api/request';


export class AllDinnerContainer extends Component {
    constructor() {
        super();
        this.state = {
            foodItem: '',
            description: '',
            howtomake: '',
            benifits: '',
            dinnerImage:null
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

    onSubmitUser = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('foodItem', this.state.foodItem);
        formData.append('description', this.state.description);
        formData.append('howtomake', this.state.howtomake);
        formData.append('benifits', this.state.benifits);
        formData.append('dinnerImage', this.state.dinnerImage);
        

        

        request('/Dinner/Ditem', 'post', formData)
        .then(res => {
            swal('added new Dinner.');
            this.props.history.push('/user/AllDinner');
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
        console.log(this.state);
        return (
            <Dinner
                {...this.state}
                onChange={this.onChange}
                uploadImage={this.uploadImage}
                onSubmitUser={this.onSubmitUser}
            />
        )
    }
}

export default AllDinnerContainer;