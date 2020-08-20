import React, { Component } from 'react';
import swal from 'sweetalert';
import EditBreakfast from './EditBreakfast';
import request from '../../api/request';
import { Redirect } from 'react-router-dom';

export class EditBreakfastContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.location.breakfast && props.location.breakfast._id ? props.location.breakfast._id : null,
            foodItem: props.location.breakfast && props.location.breakfast.foodItem ? props.location.breakfast.foodItem : '',
            description: props.location.breakfast&& props.location.breakfast.description ? props.location.breakfast.description : '',
            howtomake: props.location.breakfast && props.location.breakfast.howtomake ? props.location.breakfast.howtomake : '',
            benifits: props.location.breakfast && props.location.breakfast.benifits? props.location.breakfast.benifits: '',
            breakfastImage:props.location.breakfast && props.location.breakfast.breakfastImage ? props.location.breakfast.breakfastImage :null
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

    onSubmitBreakfast = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('foodItem', this.state.foodItem);
        formData.append('description', this.state.description);
        formData.append('howtomake', this.state.howtomake);
        formData.append('benifits', this.state.benifits);
        formData.append('breakfastImage', this.state.breakfastImage);


        request('/breakfast/Bitem', 'patch',formData)
        .then(res => {
            swal('Breakfast is updated.');
            this.props.history.push('/user/EditBreakfast');
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
                    this.state.id === null ? <Redirect to='/user/EditBreakfast' /> : null
                }
                <EditBreakfast
                    {...this.state}
                    onChange={this.onChange}
                    uploadImage={this.uploadImage}
                    onSubmitBreakfast={this.onSubmitBreakfast}
                />
            </>
        )
    }
}

export default EditBreakfastContainer;