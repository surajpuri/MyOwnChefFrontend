import React, { Component } from 'react';
import swal from 'sweetalert';
import Breakfast from './Breakfast';
import request from '../../api/request';

export class breakfastContainer extends Component {
    constructor() {
        super();
        this.state = {
            foodItem: '',
            description: '',
            howtomake: '',
            benifits: '',
            breakfastImage:null
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

    onSubmitBreakfast= (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('foodItem', this.state.foodItem);
        formData.append('description', this.state.description);
        formData.append('howtomake', this.state.howtomake);
        formData.append('benifits', this.state.benifits);
        formData.append('breakfastImage', this.state.breakfastImage);
        

        

        request('/breakfast/Bitem', 'post', formData)
        .then(res => {
            swal('added new breakfast.');
            this.props.history.push('/user/AllBreakfast');
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
            <Breakfast
                {...this.state}
                onChange={this.onChange}
                uploadImage={this.uploadImage}
                onSubmitBreakfast={this.onSubmitBreakfast}
            />
        )
    }
}

export default breakfastContainer;