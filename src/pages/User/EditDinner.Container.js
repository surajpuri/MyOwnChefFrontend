import React, { Component } from 'react';
import swal from 'sweetalert';
import request from '../../api/request';
import { Redirect } from 'react-router-dom';
import EditDinner from './EditDinner';

export class EditDinnerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.location.dinner && props.location.dinner._id ? props.location.dinner._id : null,
            foodItem: props.location.dinner && props.location.dinner.foodItem ? props.location.dinner.foodItem : '',
            description: props.location.dinner&& props.location.dinner.description ? props.location.dinner.description : '',
            howtomake: props.location.dinner && props.location.dinner.howtomake ? props.location.dinner.howtomake : '',
            benifits: props.location.dinner && props.location.dinner.benifits? props.location.dinner.benifits: '',
            breakfastImage:  props.location.dinner && props.location.dinner.dinnerImage ? props.location.dinner.dinnerImage :null
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

    onSubmitUser = (event, id) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('foodItem', this.state.foodItem);
        formData.append('description', this.state.description);
        formData.append('howtomake', this.state.howtomake);
        formData.append('benifits', this.state.benifits);
        formData.append('dinnerImage', this.state.dinnerImage);

        request(`/Ditem/${id}`, 'patch', formData)
        .then(res => {
            swal('Dinner is updated.');
            this.props.history.push('/user/EditDinner');
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
                    this.state.id === null ? <Redirect to='/user/EditDinner' /> : null
                }
                <EditDinner
                    {...this.state}
                    onChange={this.onChange}
                    uploadImage={this.uploadImage}
                    onSubmitUser={this.onSubmitUser}
                />
            </>
        )
    }
}

export default EditDinnerContainer;