import React, { Component } from 'react';
import swal from 'sweetalert';
import  { Lunch } from './Lunch';
import request from '../../api/request';

export class AllLunchContainer extends Component {
    constructor() {
        super();
        this.state = {
            foodItem: '',
            description: '',
            howtomake: '',
            benifits: '',
            lunchImage:null
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
        formData.append('lunchImage', this.state.lunchImage);
        

        

        request('/Lunch/Litem', 'post', formData)
        .then(res => {
            swal('added new Lunch.');
            this.props.history.push('/user/AllLunch');
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
            <Lunch
                {...this.state}
                onChange={this.onChange}
                uploadImage={this.uploadImage}
                onSubmitUser={this.onSubmitUser}
            />
        )
    }
}

export default AllLunchContainer;