import React, { Component } from 'react';
import swal from 'sweetalert';
import request from '../../api/request';
import { Redirect } from 'react-router-dom';
import EditLunch from './EditLunch';

export class EditLunchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.location.lunch && props.location.lunch._id ? props.location.lunch._id : null,
            foodItem: props.location.lunch && props.location.lunch.foodItem ? props.location.lunch.foodItem : '',
            description: props.location.lunch&& props.location.lunch.description ? props.location.lunch.description : '',
            howtomake: props.location.lunch && props.location.lunch.howtomake ? props.location.lunch.howtomake : '',
            benifits: props.location.lunch&& props.location.lunch.benifits? props.location.lunch.benifits: '',
            breakfastImage:  props.location.lunch && props.location.lunch.lunchImage ? props.location.lunch.lunchImage :null
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
        formData.append('lunchImage', this.state.lunchImage);

        request(`/Litem/${id}`, 'patch', formData)
        .then(res => {
            swal('Lunch is updated.');
            this.props.history.push('/user/EditLunch');
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
                    this.state.id === null ? <Redirect to='/user/EditLunch' /> : null
                }
                <EditLunch
                    {...this.state}
                    onChange={this.onChange}
                    uploadImage={this.uploadImage}
                    onSubmitUser={this.onSubmitUser}
                />
            </>
        )
    }
}

export default EditLunchContainer;