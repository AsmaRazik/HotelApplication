import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const hotelurl = "https://developerfunnel.herokuapp.com/hotelsdetails";
const burl="";

class PlaceBooking extends Component {
    constructor() {
        super()

        this.state = {
            orderid: Math.floor(Math.random() * 10000),
            hotel_name: '',
            name: '',
            phone: '',
            address: '',
            person: ''

        }
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleChangePerson = (event) => {
        this.setState({ person: event.target.value })
    }

    handleChangePhone = (event) => {
        this.setState({ phone: event.target.value })
    }

    handleChangeAddress = (event) => {
        this.setState({ address: event.target.value })
    }

    handleSubmit = () =>
    {
        console.log(this.state)
        fetch(burl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application.json'       
            },
            body:JSON.stringify(this.state)    
        })
        .then((this.props.history.push('/viewBooking')))

    }



    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Booking for Hotel {this.state.hotel_name}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label"> Order_ID: </label>
                            <input type="text" name="order_id" value={this.state.orderid} readOnly className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Order_ID: </label>
                            <input type="text" name="order_id" value={this.state.hotel_name} readOnly className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Name: </label>
                            <input type="text" name="order_id" value={this.state.name} className="form-control" onChange={this.handleChangeName} />
                        </div>

                        <div className="form-group">
                            <label className="control-label"> Phone: </label>
                            <input type="text" name="order_id" value={this.state.phone} className="form-control" onChange={this.handleChangePhone} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Address: </label>
                            <input type="text" name="order_id" value={this.state.address} className="form-control" onChange={this.handleChangeAddress}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label"> How Many Persons: </label>
                            <select name="person" value={this.state.person} className="form-control" onChange={this.handleChangePerson}>
                                <option value="1" >One</option>
                                <option value="2" >Two</option>
                                <option value="3" >Three</option>
                            </select>
                        </div>
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Cancel</Link>
                        &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>Success</button>
                    </div>
                </div>
            </div>
        )
    }





    componentDidMount() {
        let hotelid = this.props.match.params.id;
        axios.get(`${hotelurl}/${hotelid}`)
            .then((response) => { this.setState({ hotel_name: response.data[0].name }) })
    }
}

export default PlaceBooking